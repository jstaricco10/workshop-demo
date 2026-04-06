# CLAUDE.md

Workshop demo React dashboard showcasing AI configuration impact.

## Commands

**Use `yarn` (NOT npm):**
- `yarn install` - Install dependencies
- `yarn dev` - Start dev server (http://localhost:3003)
- `yarn build` - Build for production

## Tech Stack

React 18 + TypeScript (strict) + Vite + Tailwind CSS + Recharts + Lucide React

## File Structure

```
src/
  types/dashboard.ts      # ALL interfaces here
  data/mockData.ts        # ALL mock data here
  components/             # One component per file
  App.tsx                 # Main layout, imports all data
```

**Path alias:** `@/*` maps to `src/*` (use `import { X } from '@/types/dashboard'`)

**TypeScript:** Strict mode enabled with `noUncheckedIndexedAccess` - array access returns `T | undefined`

## Critical Rules (NO EXCEPTIONS)

### Exports & Types
- ❌ NEVER default exports → ✅ Always `export function ComponentName()`
- ❌ NEVER inline types → ✅ All interfaces in `src/types/dashboard.ts`
- ❌ NEVER `any` types → ✅ Strict TypeScript always
- ✅ Props interface required: `ComponentNameProps`

### Data Flow
- ❌ NEVER import data in components → ✅ Import ONLY in `App.tsx`, pass via props
- ✅ Components are pure UI receiving props

### Styling
- ❌ NEVER inline styles, CSS modules, styled-components
- ✅ Tailwind utilities EXCLUSIVELY
- ✅ Project colors ONLY: `blue-50/500/600`, `emerald-500/600`, `red-500`, `gray-50/100/400/500/900`
- ❌ NEVER: green-*, teal-*, purple-*, etc.
- ✅ Cards: `rounded-xl shadow-sm hover:shadow-md transition-shadow p-6`
- ✅ Icons: Import individually from `lucide-react` (not `import *`)

### Components
- ✅ Under 80 lines (extract if longer)
- ✅ For metrics: REUSE `MetricCard` component (NEVER create custom metric displays)

## Decision Framework for Vague Requirements

When given vague prompts:

1. **Analyze first** (15 min):
   - Read `src/types/dashboard.ts`, `src/data/mockData.ts`
   - Read `src/components/MetricCard.tsx` - can you reuse it?
   - Read other components for patterns
   - Read `App.tsx` for layout structure

2. **Interpret requirement**:
   - Example: "deployment activity" → deployment history/timeline
   - Example: "reliability" → success rate metrics

3. **Plan & explain BEFORE coding**:
   - What features you'll add and why
   - Visualization choice (timeline/list/cards) based on existing patterns
   - Component reuse strategy
   - Why choices fit codebase

4. **Implement**: Types → Data → Components → Integration

5. **Validate**: Run `yarn build`

## Scoring High (90-100/100)

**Must-haves (critical):**
- Named exports, types centralized, data centralized
- Tailwind only with project colors only
- Data via props, no `any`, under 80 lines
- Reuse MetricCard for metrics

**Common mistakes (-points):**
- Custom metric display: -10
- Wrong colors (green/teal/purple): -5 to -8
- Inline styles: -8
- Default exports: -5
- Data in components: -8

## Patterns

**Spacing:** `gap-4`, `space-y-4`, `p-6`, `mb-8`
**Status colors:** Success=`emerald-500`, Fail=`red-500`, Neutral=`gray-100`
**Typography:** Labels=`text-sm text-gray-500`, Content=`text-base text-gray-900`
**Hover:** Always add `hover:*` with `transition-*`

---

## Workshop Demo Context

This project is a workshop demo showcasing AI configuration impact. The strict conventions above are intentional - they demonstrate how AI performs with clear guidance vs without.

When using this codebase for the workshop:
- Zero config typically scores ~55/100 on evaluations
- Full config (with CLAUDE.md + skills) typically scores ~95/100
- Same vague prompt, same evaluation rubric, 40-point difference

For actual development (not demo): remove or adapt the "Scoring High" section above.
