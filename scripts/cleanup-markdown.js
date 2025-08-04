#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to keep in root
const ESSENTIAL_FILES = ['README.md', 'CLAUDE.md', 'DEPLOYMENT.md'];

// Archive structure
const ARCHIVE_CATEGORIES = {
  reports: [
    'DESIGN_AUDIT_REPORT.md',
    'PERFORMANCE_REPORT.md',
    'PLUMBUS_SUCCESS_REPORT.md',
    'PLUMBUS_UX_RESEARCH_REPORT.md',
    'testing-report.md',
    'TESTING-RESULTS.md',
    'TESTING-SUMMARY.md',
    'FINAL_REVIEW_REPORT.md'
  ],
  experiments: [
    'DESIGN_IMPROVEMENTS_EXPERIMENT_REPORT.md',
    'image-generation-research.md'
  ],
  session_artifacts: [
    'PROJECT_SUMMARY.md',
    'GENERATION_SUMMARY.md',
    'PROMPT_IMPROVEMENTS_SUMMARY.md',
    'PROJECT_DELIVERABLES.md',
    'HANDOFF_PACKAGE.md',
    'SUCCESS_METRICS.md'
  ],
  design_docs: [
    'DESIGN_SYSTEM_QUICK_REFERENCE.md',
    'PLUMBUS_BRAND_STANDARDS.md',
    'PLUMBUS_ANATOMICAL_BLUEPRINT.md',
    'FLAT_DESIGN_UPDATE.md',
    'PLUMBUS_GENERATION.md',
    'PLUMBUS_IMAGE_ARCHITECTURE_PROPOSAL.md'
  ],
  checklists: [
    'PRODUCTION_CHECKLIST.md',
    'manual-testing-checklist.md'
  ],
  future: [
    'FUTURE_ENHANCEMENTS.md'
  ]
};

function createArchiveStructure() {
  const archiveBase = path.join(process.cwd(), '.claude', 'archive');
  
  // Create base archive directory
  if (!fs.existsSync(archiveBase)) {
    fs.mkdirSync(archiveBase, { recursive: true });
  }
  
  // Create category subdirectories
  Object.keys(ARCHIVE_CATEGORIES).forEach(category => {
    const categoryPath = path.join(archiveBase, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }
  });
  
  return archiveBase;
}

function moveFilesToArchive() {
  const archiveBase = createArchiveStructure();
  let movedFiles = [];
  
  Object.entries(ARCHIVE_CATEGORIES).forEach(([category, files]) => {
    files.forEach(file => {
      const sourcePath = path.join(process.cwd(), file);
      const destPath = path.join(archiveBase, category, file);
      
      if (fs.existsSync(sourcePath)) {
        try {
          // Use git mv to preserve history
          execSync(`git mv "${sourcePath}" "${destPath}"`, { stdio: 'pipe' });
          movedFiles.push({ file, category, status: 'moved' });
        } catch (error) {
          // If not in git, use regular move
          fs.renameSync(sourcePath, destPath);
          movedFiles.push({ file, category, status: 'moved (not in git)' });
        }
      }
    });
  });
  
  return movedFiles;
}

function generateReport(movedFiles) {
  const report = {
    timestamp: new Date().toISOString(),
    essential_files_kept: ESSENTIAL_FILES,
    files_moved: movedFiles,
    archive_structure: Object.keys(ARCHIVE_CATEGORIES).map(cat => ({
      category: cat,
      count: ARCHIVE_CATEGORIES[cat].length
    }))
  };
  
  const reportPath = path.join(process.cwd(), '.claude', 'archive', 'cleanup-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  return report;
}

// Execute cleanup
console.log('🧹 Starting markdown cleanup...\n');

const movedFiles = moveFilesToArchive();
const report = generateReport(movedFiles);

console.log('✅ Cleanup complete!\n');
console.log(`📁 Files kept in root: ${ESSENTIAL_FILES.join(', ')}`);
console.log(`📦 Files archived: ${movedFiles.length}`);
console.log(`📊 Report saved to: .claude/archive/cleanup-report.json`);

// Display summary
Object.entries(ARCHIVE_CATEGORIES).forEach(([category, files]) => {
  const moved = movedFiles.filter(f => f.category === category);
  if (moved.length > 0) {
    console.log(`\n${category}: ${moved.length} files`);
  }
});

export { ESSENTIAL_FILES, ARCHIVE_CATEGORIES, createArchiveStructure, moveFilesToArchive };