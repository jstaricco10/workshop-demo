# Workshop Demo: Dev Dashboard
## Rules, Commands & Skills — Accelerate AI

A simple React dashboard used to demonstrate the impact of AI configuration levels.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3003

## Project Structure

```
src/
  components/
    MetricCard.tsx        # Stat cards (commits, PRs, reviews, build rate)
    ActivityChart.tsx      # Weekly bar chart (Recharts)
    TeamTable.tsx          # Team members table
    SprintProgress.tsx     # Sprint progress bars
  types/
    dashboard.ts           # All TypeScript interfaces
  data/
    mockData.ts            # Mock data for all components
  App.tsx                  # Main layout
  main.tsx                 # Entry point
```

## Tech Stack
- React 18 + TypeScript (strict)
- Vite
- Tailwind CSS
- Recharts
- Lucide React icons

---

## 🎯 Workshop Demo Guide

### The Prompt (same for all 3 versions):

```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

### Version 1: Zero Config
1. Make sure there's no `.cursorrules` or `.cursor/` folder
2. Open Cursor, paste the prompt in Composer
3. Let it generate — observe the output
4. **Things to point out to audience:**
   - Might use inline styles instead of Tailwind
   - Might create default exports
   - Might put types inline instead of in types/
   - Might not match the color palette
   - Might use `any` or loose typing
   - File structure might not follow conventions

### Version 2: Rules Only
1. Copy `_versions/v2-rules-only/.cursorrules` to project root
2. Undo V1 changes (git checkout .)
3. Paste the SAME prompt
4. **Things to point out to audience:**
   - Should now use named exports
   - Should create types in src/types/
   - Should follow Tailwind patterns
   - Should reuse MetricCard for the new stat
   - Might still not follow the ideal workflow order

### Version 3: Full Setup
1. Copy `_versions/v3-full-setup/.cursorrules` to project root
2. Copy `_versions/v3-full-setup/.cursor/` to project root
3. Undo V2 changes (git checkout .)
4. Start by invoking the `/feature` command, then paste the prompt
5. After generation, run `/review` on the new code
6. **Things to point out to audience:**
   - Follows exact step-by-step: types → data → components → integration
   - Code passes the review checklist
   - Modular rules activate per file type
   - Commands provide repeatable workflows
   - Quality is consistently higher

### Comparison Points (for presentation)

| Aspect | V1 Zero Config | V2 Rules | V3 Full Setup |
|--------|---------------|----------|---------------|
| File structure | Unpredictable | Follows conventions | Follows conventions |
| TypeScript | Loose, maybe `any` | Strict, typed | Strict, typed |
| Styling | Mixed approaches | Tailwind + palette | Tailwind + palette |
| Workflow order | Random | Better but unguided | Types → Data → Component → Wire |
| Quality gate | None | Implicit | Explicit (/review) |
| Reusability | One-off | Consistent | Consistent + repeatable |

---

## Tips for Live Demo

1. **Git init the project** before starting so you can `git diff` and `git checkout .` between versions
2. **Have 3 terminal tabs** ready: one per version
3. **Time each run** — even roughly ("that took about 20 seconds")
4. **Show the diff** between versions to highlight structural differences
5. **If something goes wrong** in V1, that's actually great — it proves the point
6. **End with /review** on V3 to show the command workflow in action
