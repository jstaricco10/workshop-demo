---
description: Run complete workshop demo end-to-end
tags: [workshop, demo, automation]
---

# Workshop Demo Runner

Execute the workshop prompt autonomously, demonstrating full AI configuration power.

## Instructions

When invoked, execute this prompt:

**"Improve the dashboard to better reflect deployment activity and reliability."**

## Execution Flow

### Step 1: Analyze (CRITICAL - DO FIRST)

This vague prompt requires deep analysis:

1. **Read existing code:**
   - `src/types/dashboard.ts` - type patterns
   - `src/data/mockData.ts` - data structure
   - `src/components/MetricCard.tsx` - reuse opportunities
   - All components - styling patterns
   - `App.tsx` - layout structure

2. **Interpret requirement:**
   - "deployment activity" → deployment history/timeline
   - "reliability" → success/failure metrics
   - Decide specific features to add

3. **Plan & explain:**
   - What features you'll add and why
   - Visualization choice based on patterns
   - Component reuse strategy (use MetricCard!)
   - Data structure decisions

**EXPLAIN YOUR PLAN BEFORE ANY CODE.**

### Step 2-6: Implementation

Follow CLAUDE.md standards strictly:

**Step 2: Types** - Add interfaces to `src/types/dashboard.ts`
**Step 3: Data** - Add mock data to `src/data/mockData.ts`
**Step 4: Components** - Create in `src/components/` with named exports, props interfaces
**Step 5: Integration** - Wire in `App.tsx`, import data there, pass via props
**Step 6: Validate** - Run `yarn build`

### Key Standards (from CLAUDE.md)

- Named exports (no default)
- Types in src/types/ (no inline)
- Data in src/data/ (no inline)
- Tailwind only (no inline styles)
- Project colors only: blue/emerald/red/gray (NO green/teal/purple)
- Data via props (no imports in components)
- Reuse MetricCard for metrics
- Components <80 lines
- Use `yarn` (not npm)

### Step 7: Summary

Show complete summary with all changes and confirmation that all standards met.

## Demo Impact

This demonstrates v4 (skills) power:
- v1 (no config): Unpredictable, ~55/100 score
- v4 (skills): Autonomous, ~95/100 score

Full automation with perfect adherence to standards.

## Usage

Simply invoke `/workshop` and let it run autonomously.
