# 🎯 Quick Reference - Zero Config vs Full Stack

## Setup (Once Before Presentation)
```bash
cd ~/Desktop/workshop-demo
./setup-workshop-simple.sh
```

## Terminals
```bash
Tab 1: cd ~/Desktop/workshop-demo-zero-config  # Port 3001
Tab 2: cd ~/Desktop/workshop-demo-full-stack   # Port 3004
```

## The Prompt
```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

---

## Zero Config Demo (8-10 min)

### Check config:
```bash
ls -la | grep -E '(cursor|claude|CLAUDE)'  # Should be empty
```

### Run demo:
- Paste prompt in AI
- Wait for generation
- ⏱️ Time it

### Show problems:
```bash
git status
cat src/components/DeploymentHistory.tsx
cat src/types/dashboard.ts 2>/dev/null || echo "No types!"
git diff src/
```

**Point out:**
- ❌ Default exports
- ❌ Inline styles
- ❌ Missing types file
- ❌ `any` types
- ❌ Wrong colors

### Reset:
```bash
git checkout . && git clean -fd
```

---

## Full Stack Demo (10-12 min) ⭐

### Show config:
```bash
head -30 CLAUDE.md
ls .claude/skills/
```

### Run demo:
```
/workshop
```

**That's it!** ☕ Narrate while it runs.

### Show perfection:
```bash
git status
cat src/types/dashboard.ts
cat src/components/DeploymentHistory.tsx
git diff --stat
```

**Point out:**
- ✅ Named exports
- ✅ Types in right place
- ✅ Tailwind + palette
- ✅ Props interface
- ✅ Reuses MetricCard
- ✅ Auto-reviewed

### Show it working:
```bash
npm run dev  # http://localhost:3004
```

---

## Side-by-Side (5 min)

**Both running:**
- Zero Config: http://localhost:3001
- Full Stack: http://localhost:3004

**Show code diffs side by side**

---

## The Message

> "Mismo prompt. Dos resultados.
>
> La diferencia es la configuración.
>
> CLAUDE.md + Skills = Autonomous teammate"

---

## Emergency Commands

```bash
# Reset a demo
git checkout . && git clean -fd

# Kill a port
lsof -ti:3001 | xargs kill -9
lsof -ti:3004 | xargs kill -9

# Check git status
git status

# See what was generated
git diff --stat
```

---

## Timing
- Intro: 3 min
- Zero Config: 8-10 min
- Full Stack: 10-12 min ⭐
- Compare: 5 min
- Wrap: 2 min
- **Total: 28-32 min**

---

## Backup Plan
If live demo fails:
- Show pre-recorded video
- Show pre-generated diffs
- Explain what should happen

Have `backup-v1.diff` and `backup-v4.diff` ready!
