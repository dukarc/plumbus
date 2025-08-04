#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { ESSENTIAL_FILES } from './cleanup-markdown.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const tests = {
  test_markdown_categorization: () => {
    // Verify only essential files in root
    const rootMarkdown = fs.readdirSync(projectRoot)
      .filter(f => f.endsWith('.md'));
    
    const unexpected = rootMarkdown.filter(f => !ESSENTIAL_FILES.includes(f));
    
    if (unexpected.length > 0) {
      throw new Error(`Unexpected markdown files in root: ${unexpected.join(', ')}`);
    }
    
    console.log('✓ test_markdown_categorization: Only essential files in root');
  },

  test_archive_structure_creation: () => {
    // Verify archive directories exist
    const archiveDirs = [
      '.claude/archive',
      '.claude/archive/reports',
      '.claude/archive/experiments',
      '.claude/archive/session_artifacts',
      '.claude/archive/design_docs',
      '.claude/archive/checklists',
      '.claude/archive/future'
    ];
    
    archiveDirs.forEach(dir => {
      const fullPath = path.join(projectRoot, dir);
      if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isDirectory()) {
        throw new Error(`Archive directory missing: ${dir}`);
      }
    });
    
    console.log('✓ test_archive_structure_creation: All archive directories exist');
  },

  test_file_movement_preserves_git_history: () => {
    // Check that archived files are tracked by git
    const gitTracked = execSync('git ls-files .claude/archive', { cwd: projectRoot })
      .toString()
      .trim()
      .split('\n')
      .filter(f => f.endsWith('.md'));
    
    if (gitTracked.length < 20) {
      throw new Error(`Expected at least 20 tracked files in archive, found ${gitTracked.length}`);
    }
    
    console.log('✓ test_file_movement_preserves_git_history: Files tracked by git');
  },

  test_claude_md_contains_documentation_rules: () => {
    // Verify CLAUDE.md has strict rules
    const claudeMd = fs.readFileSync(path.join(projectRoot, 'CLAUDE.md'), 'utf8');
    
    const requiredPhrases = [
      'NEVER create markdown files in the root directory',
      'Session artifacts belong in `.claude/archive/`',
      'Only these files may exist in root:'
    ];
    
    requiredPhrases.forEach(phrase => {
      if (!claudeMd.includes(phrase)) {
        throw new Error(`CLAUDE.md missing required phrase: "${phrase}"`);
      }
    });
    
    console.log('✓ test_claude_md_contains_documentation_rules: Has strict rules');
  },

  test_no_markdown_files_in_root_except_allowed: () => {
    // Double-check no extra markdown files
    const markdownFiles = fs.readdirSync(projectRoot)
      .filter(f => f.endsWith('.md') || f.endsWith('.MD'));
    
    markdownFiles.forEach(file => {
      if (!ESSENTIAL_FILES.includes(file)) {
        throw new Error(`Unauthorized markdown file in root: ${file}`);
      }
    });
    
    console.log('✓ test_no_markdown_files_in_root_except_allowed: Root is clean');
  }
};

// Run all tests
console.log('🧪 Running markdown organization tests...\n');

let passed = 0;
let failed = 0;

Object.entries(tests).forEach(([name, test]) => {
  try {
    test();
    passed++;
  } catch (error) {
    console.error(`✗ ${name}: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}