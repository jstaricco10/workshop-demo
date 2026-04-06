# Workshop Demo: Dev Dashboard
## Rules, Commands & Skills — Accelerate AI

A simple React dashboard used to demonstrate the impact of AI configuration levels.

## Quick Start

```bash
yarn install
yarn dev
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

## 🚀 Quick Setup for Presenters

**Dramatic contrast in 25-30 minutes:**

```bash
./setup-workshop-simple.sh
```

This creates:
- `workshop-demo-zero-config/` - Sin configuración (port 3001)
- `workshop-demo-full-stack/` - Configuración completa con skills (port 3004)

**Impact: Maximum** 🎯

See [`PRESENTATION-SIMPLE.md`](./PRESENTATION-SIMPLE.md) for the full presentation guide.
See [`QUICK-REFERENCE-SIMPLE.md`](./QUICK-REFERENCE-SIMPLE.md) as your cheat sheet during the talk.

---

## 🎯 Workshop Demo Guide

### The Workshop Prompts

**Prompt 1 - Implementation (ultra-vague):**

```
Improve the dashboard to better reflect deployment activity and reliability.
```

**That's it.** Intentionally ultra-vague. No guidance on what, how, or where.

**Prompt 2 - Evaluation (comprehensive):**

After implementation, evaluate with:

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

**The Strategy:**
1. Ultra-vague implementation prompt forces many decisions
2. Rigorous evaluation reveals quality differences
3. Zero config: typically scores 45-65/100
4. Full stack: typically scores 90-98/100
5. The score difference makes the impact undeniable

### Version 1: Zero Config
In `workshop-demo-zero-config/`:
1. Make sure there's no `.cursorrules`, `.cursor/`, `.claude/`, or `CLAUDE.md`
2. Open Claude Code or Cursor
3. Paste the prompt
4. Let it generate — observe the output
5. **Things to point out to audience:**
   - ❌ Might use inline styles instead of Tailwind
   - ❌ Might create default exports
   - ❌ Might put types inline instead of in types/
   - ❌ Might not match the color palette
   - ❌ Might use `any` or loose typing
   - ❌ File structure might not follow conventions
   - ❌ No workflow guidance

### Version 2: Full Stack (Skills) ⭐
In `workshop-demo-full-stack/`:
1. Verify `CLAUDE.md` and `.claude/skills/` exist
2. Open Claude Code
3. Simply run: `/workshop`
4. **Things to point out to audience:**
   - ✅ Fully autonomous execution - no manual steps
   - ✅ Creates types → data → components → integration automatically
   - ✅ Self-validates with built-in review
   - ✅ Shows complete summary with all changes
   - ✅ Perfect adherence to all conventions
   - ✅ Named exports, proper types, Tailwind, correct colors
   - ✅ **This is the killer demo** - AI coding autonomously with quality

### Comparison Points (for presentation)

| Aspect | Zero Config | Full Stack (Skills) |
|--------|-------------|---------------------|
| **File structure** | ❌ Unpredictable | ✅ Follows conventions |
| **TypeScript** | ❌ Loose, maybe `any` | ✅ Strict, typed |
| **Styling** | ❌ Mixed approaches | ✅ Tailwind + palette |
| **Workflow order** | ❌ Random | ✅ Fully automated |
| **Quality gate** | ❌ None | ✅ Auto-review + auto-fix |
| **User intervention** | ❌ Constant corrections | ✅ Minimal (approve once) |
| **Intelligence** | ❌ Basic guessing | ✅ Autonomous execution |
| **Reusability** | ❌ One-off | ✅ Intelligent automation |
| **Demo impact** | "AI is inconsistent" | "AI works autonomously" |

---

## Tips for Live Demo

1. **Run `./setup-workshop-simple.sh`** before your talk to create both environments
2. **Have 2 terminal tabs** ready: one for zero-config, one for full-stack
3. **Time each run** — even roughly ("that took about 30 seconds")
4. **Show the diff** between versions to highlight structural differences
5. **If something goes wrong** in zero-config, that's actually great — it proves the point
6. **Build the narrative**:
   - Zero Config: "Without config, AI is unpredictable"
   - Full Stack: "With skills + CLAUDE.md, AI works autonomously" ⭐
7. **The magic moment**: Just run `/workshop` and let it execute. Show the summary at the end
8. **Practice the full-stack demo** multiple times — it's your hero moment

## Workshop Flow Suggestion

### Act 1: Introduction (3 min)
"Same prompt. Two configurations. Watch the difference..."
- Show the dashboard
- Show the prompt

### Act 2: The Problem - Zero Config (8-10 min)
"Let's see what happens without any configuration..."
- Run prompt, show inconsistent output
- Point out issues: wrong exports, inline styles, missing types, etc.
- Message: "It works, but won't pass code review"

### Act 3: The Solution - Full Stack (10-12 min) 🎬
"Now with CLAUDE.md + Skills..."
- Show the configuration files
- Simply run `/workshop`
- Let it execute autonomously
- Show the perfect result
- Message: "Production-ready code, zero corrections"

### Act 4: Comparison (3-5 min)
Show both side-by-side:
- Code quality differences
- Workflow differences
- Time to production differences

### Act 5: Mic Drop (2 min) 🎤
**Key message**: Configuration isn't optional anymore. It's the difference between an AI that guesses and an AI teammate that knows your codebase.
