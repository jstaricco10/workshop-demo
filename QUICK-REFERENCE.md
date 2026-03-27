# 🎯 Quick Reference Card - Keep This Open During Presentation

## Setup Commands
```bash
# Run ONCE before presentation
./setup-workshop.sh
```

## Terminal Tabs
```bash
Tab 1: cd workshop-demo-v1
Tab 2: cd workshop-demo-v2
Tab 3: cd workshop-demo-v3
Tab 4: cd workshop-demo-v4
```

## The Prompt (Copy This)
```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

## Demo Flow (For Each Version)

1. **Show config:** `ls -la | grep -E '(cursor|claude)'`
2. **Paste prompt** in Cursor/Claude Code
3. **While running:** Narrate what's happening
4. **Show results:** `git status && git diff src/`
5. **Point out key differences**
6. **Reset:** `git checkout . && git clean -fd`

## Version-Specific Commands

### V1
- No setup needed
- Point out: default exports, inline styles, `any` types

### V2
- Has `.cursorrules`
- Point out: named exports, Tailwind, correct types

### V3
- Run: `/feature` then paste prompt
- After done: `/review`
- Point out: step-by-step workflow

### V4 ⭐
- Run: `/workshop` (that's it!)
- Point out: fully autonomous, auto-review

## Quick Commands

```bash
# Show files changed
git status --short

# Show code
cat src/components/DeploymentHistory.tsx
cat src/types/dashboard.ts

# Show diff stats
git diff --stat

# Reset
git checkout . && git clean -fd

# Kill port 3003 if needed
lsof -ti:3003 | xargs kill -9
```

## Key Messages

- **V1:** "Sin config = impredecible"
- **V2:** "Con rules = consistente"
- **V3:** "Con commands = workflow guiado"
- **V4:** "Con skills = autónomo" 🎤⬇️

## Timing
- V1: 7 min
- V2: 7 min
- V3: 10 min
- V4: 15 min ⭐
- Total: ~40-45 min + Q&A

## Emergency
- Have backup screenshots ready
- Pre-generated diffs in case live demo fails
- "Demo gods not with us today, but here's what normally happens..."
