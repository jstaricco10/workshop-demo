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

## Prompt 1 - Implementation
```
Improve the dashboard to better reflect deployment activity and reliability.
```

**One sentence. Ultra-vague. Forces all decisions.**

---

## Prompt 2 - Evaluation
```
Do not make any changes, I just want to evaluate your changes.

Look for:
- Code quality and consistency with the existing codebase
- Reuse of existing components, patterns, and utilities
- Introduction of unnecessary abstractions or duplication
- Naming conventions and clarity
- Separation of concerns (UI, logic, data)
- Scalability and extensibility of the solution
- Handling of edge cases (e.g., failed or missing data)
- Visual and UX consistency with the rest of the dashboard
- Complexity vs simplicity trade-offs

For each point:
- Explain what was done well
- Point out any issues or questionable decisions
- Highlight differences from typical best practices

Finally:
- Give an overall assessment of the implementation quality with a score /100
- Mention what a more senior/production-ready solution would improve
```

**Same evaluation for both. Watch the score difference.**

---

## Zero Config Demo (10-12 min)

### Check config:
```bash
ls -la | grep -E '(cursor|claude|CLAUDE)'  # Should be empty
```

### Run Prompt 1:
- Paste implementation prompt
- Wait for generation
- ⏱️ Time it

### Show code:
```bash
ls -la src/components/
ls -la src/types/
cat src/components/DeploymentHistory.tsx
cat src/types/dashboard.ts 2>/dev/null || echo "No types!"
```

### Run Prompt 2 (Evaluation):
- Paste evaluation prompt
- Watch the analysis
- **Note the score: ~45-65/100**

**Point out issues:**
- ❌ Custom metric displays
- ❌ Wrong colors (green-500, teal, etc.)
- ❌ Inline types or missing
- ❌ Default exports
- ❌ No analysis beforehand

---

## Full Stack Demo (12-15 min) ⭐

### Show config:
```bash
head -30 CLAUDE.md
ls .claude/skills/
```

### Run /workshop:
```
/workshop
```

**That's it!** ☕ Narrate while it runs.

### Show code:
```bash
ls -la src/components/
ls -la src/types/
cat src/types/dashboard.ts
cat src/components/DeploymentHistory.tsx
```

### Run Prompt 2 (Evaluation):
- Paste same evaluation prompt
- Watch the analysis
- **Note the score: ~90-98/100**

**Point out excellence:**
- ✅ Analyzed codebase first
- ✅ Reuses MetricCard perfectly
- ✅ Correct palette ONLY
- ✅ Types centralized
- ✅ Named exports
- ✅ Production-ready

### Show it working:
```bash
yarn dev  # http://localhost:3004
```

---

## The Score Reveal (5 min) 🎯

**Show the scores:**
```
Zero Config:  55/100 ⚠️
Full Stack:   95/100 ✅

Difference: 40 points
```

**Show both running:**
- Zero Config: http://localhost:3001
- Full Stack: http://localhost:3004

**Visual may look similar, but CODE quality is night and day.**

---

## The Message 🎤

> "Mismo prompt. Misma evaluación.
>
> 55/100 vs 95/100
> Junior vs Senior
> Needs rework vs Production-ready
>
> La diferencia es la CONFIGURACIÓN.
>
> CLAUDE.md + Skills = Senior AI Teammate"

---

## Emergency Commands

```bash
# Kill a port
lsof -ti:3001 | xargs kill -9
lsof -ti:3004 | xargs kill -9

# List generated files
ls -la src/components/
ls -la src/types/
```

---

## Timing
- Intro: 3 min
- Zero Config: 10-12 min (implementation + evaluation)
- Full Stack: 12-15 min (implementation + evaluation) ⭐
- Score Reveal: 5 min
- Wrap: 3 min
- **Total: 33-38 min**

---

## Backup Plan
If live demo fails:
- Show pre-recorded video
- Show screenshots
- Explain what should happen
