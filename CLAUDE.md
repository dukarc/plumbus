## Available Agents

### Development & Testing
- **rapid-prototyper**: Create MVPs, prototypes, or proof-of-concepts within 6-day cycles
- **frontend-developer**: Build responsive web interfaces with React/Vue/Angular
- **backend-architect**: Design APIs, server logic, databases, and scalable systems
- **mobile-app-builder**: Develop native iOS/Android or React Native applications
- **ai-engineer**: Implement AI/ML features, LLM integrations, and intelligent automation
- **test-writer-fixer**: Write tests, analyze failures, and fix broken test suites (use after code changes)
- **api-tester**: Comprehensive API testing including performance and contract testing
- **performance-benchmarker**: Profile applications and provide optimization strategies
- **test-results-analyzer**: Analyze test data and generate quality metrics reports

### Infrastructure & Operations
- **devops-automator**: Set up CI/CD, cloud infrastructure, monitoring, and deployments
- **infrastructure-maintainer**: Monitor system health, optimize performance, manage scaling
- **experiment-tracker**: Track A/B tests, feature experiments, and iterative improvements

### Product & Analytics
- **trend-researcher**: Identify market opportunities from TikTok, App Store, and social trends
- **feedback-synthesizer**: Analyze user feedback and identify patterns for product insights
- **analytics-reporter**: Generate insights from data and create performance reports
- **app-store-optimizer**: Maximize app visibility and downloads through ASO
- **tiktok-strategist**: Create viral TikTok marketing strategies and content ideas

### Project Management
- **sprint-prioritizer**: Plan 6-day cycles and prioritize features for maximum value
- **studio-producer**: Coordinate cross-functional teams and optimize workflows
- **project-shipper**: Manage releases, launches, and go-to-market strategies
- **workflow-optimizer**: Streamline processes and improve human-agent collaboration
- **work-completion-summary**: Generate concise summaries and maintain momentum

### Design & UX
- **brand-guardian**: Establish and maintain cohesive brand experiences
- **ux-researcher**: Conduct user research and validate design decisions
- **visual-storyteller**: Create visual narratives and compelling presentations
- **ui-designer**: Design beautiful, functional interfaces for rapid implementation
- **whimsy-injector**: Add delightful, playful elements to user experiences (use after UI changes)

### Support & Legal
- **support-responder**: Handle customer inquiries and create support documentation
- **legal-compliance-checker**: Review ToS, privacy policies, ensure regulatory compliance
- **finance-tracker**: Manage budgets, optimize costs, and analyze financial performance

### Specialized
- **tool-evaluator**: Evaluate new tools and frameworks for the 6-day cycle philosophy
- **joker**: Lighten the mood with programming humor and startup jokes
- **studio-coach**: Elite performance coach for coordinating complex multi-agent tasks

## MCP Servers

### Available MCP Servers and Use Cases

1. **Puppeteer** (`mcp__puppeteer`)
   - Browser automation and visual testing
   - Take screenshots of web pages
   - Navigate, click, fill forms, and interact with web elements
   - Execute JavaScript in browser context
   - **Use for**: Visual regression testing, UI verification, browser automation

2. **Quick-data** (`mcp__quick-data`)
   - Load and analyze JSON/CSV datasets
   - Create charts and visualizations
   - Perform data analysis and correlations
   - Execute custom analytics code
   - **Use for**: Data analysis, reporting, visualization tasks

3. **GitHub** (`mcp__github`)
   - Create/update files, repositories, issues, and PRs
   - Search code, repositories, and users
   - Manage branches and commits
   - **Use for**: Repository operations, code search, GitHub automation

4. **Filesystem** (`mcp__filesystem`)
   - Advanced file operations beyond standard tools
   - Batch file operations and directory trees
   - File metadata and permissions
   - **Use for**: Complex file management tasks

5. **Firecrawl** (`mcp__firecrawl`)
   - Scrape web content with advanced options
   - Search the web and extract structured data
   - Map websites and discover URLs
   - **Use for**: Web scraping, content extraction, web research

6. **Sequential-thinking** (`mcp__sequential-thinking`)
   - Dynamic problem-solving through step-by-step analysis
   - Hypothesis generation and verification
   - **Use for**: Complex problems requiring multi-step reasoning

7. **ElevenLabs** (`mcp__elevenlabs`)
   - Generate audio from text
   - Create multi-voice scripts
   - **Use for**: Audio content generation, voiceovers

8. **IDE** (`mcp__ide`)
   - Get diagnostics from VS Code
   - Execute code in Jupyter notebooks
   - **Use for**: Code execution, error diagnostics

## Development Workflow

### Testing and Verification Requirements
1. **Before considering any task complete, ALWAYS:**
   - Run `npm run lint` to check for linting errors
   - Run `npm run build` to ensure TypeScript compilation succeeds
   - Write tests using Vitest for new functionality
   - Run `npm test` to ensure all tests pass
   - Use `npm run typecheck` (via tsc) to verify TypeScript types

2. **Visual Testing:**
   - Always test with Puppeteer MCP to capture screenshots of website changes
   - Verify responsive design at different viewport sizes

3. **Test Writing Guidelines:**
   - Write tests in `*.test.ts` or `*.test.tsx` files
   - Use Testing Library for React component tests
   - Ensure tests cover edge cases and error scenarios
   - Run `npm run test:coverage` periodically to check coverage

## Agent Usage Guidelines

### Proactive Agent Usage
1. **After Code Changes:**
   - Always use `test-writer-fixer` agent to write/update tests
   - Use appropriate language-specific agents for code review

2. **For Complex Tasks:**
   - Use `studio-coach` agent when coordinating multiple agents
   - Use `rapid-prototyper` for new feature scaffolding

3. **For UI/UX Changes:**
   - Use `whimsy-injector` after implementing UI components
   - Use `ui-designer` for interface design decisions

4. **For Performance Issues:**
   - Use `performance-benchmarker` to identify bottlenecks
   - Use `infrastructure-maintainer` for scaling concerns

5. **For Product Decisions:**
   - Use `trend-researcher` for market validation
   - Use `feedback-synthesizer` for user insight analysis

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

### Import Notes
- NEVER create "PROJECT_SUMMARY.md" or similar session artifacts in root
- NEVER create multiple test report files - consolidate into one if needed
- NEVER create design experiment reports in root - use archive