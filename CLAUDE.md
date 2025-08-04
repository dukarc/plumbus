## Project Documentation Guidelines

### CRITICAL: Markdown File Rules
1. **NEVER create markdown files in the root directory** except when explicitly requested
2. **Session artifacts belong in `.claude/archive/`** - reports, summaries, experiments
3. **Only these files may exist in root:**
   - README.md (project overview)
   - CLAUDE.md (this file)
   - DEPLOYMENT.md (production deployment guide)

### File Organization
- `/docs/` - User-facing documentation only
- `/.claude/archive/reports/` - Performance reports, audits, analyses
- `/.claude/archive/experiments/` - Experiment results, research findings
- `/.claude/archive/session_artifacts/` - Summaries, deliverables, handoffs

### When Asked to Document Work
1. First ask: "Should this be a permanent doc or session artifact?"
2. If permanent: Create in `/docs/` with user approval
3. If temporary: Create in `.claude/archive/` appropriate subdirectory
4. Never assume documentation needs to be in root

### Testing and Verification
- Always test with Puppeteer MCP to print visuals of website
- Always test the npm build before responding back that things are done
- Run `npm run lint` and `npm run typecheck` after code changes

### Import Notes
- NEVER create "PROJECT_SUMMARY.md" or similar session artifacts in root
- NEVER create multiple test report files - consolidate into one if needed
- NEVER create design experiment reports in root - use archive