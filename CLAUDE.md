# CLAUDE.md

Workshop demo React dashboard showcasing AI configuration impact.

## Commands

**Use `yarn` (NOT npm):**
- `yarn install` - Install dependencies
- `yarn dev` - Start dev server (http://localhost:3003)
- `yarn build` - Build for production

**Evaluation:** Run `/evaluate` command for quality assessment with /100 scoring.

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
- ✅ Always use semantic HTML (prefer `<button>` over `<div onClick>`)
- ✅ Prefer composition over inheritance (pass children/render props)

## Workflow

1. Analyze: Read types, data, existing components (especially `MetricCard`)
2. Plan: Explain approach before coding
3. Implement: Types → Data → Components → Integration
4. Validate: `yarn build`


---

## Workshop Demo Context

This project is a workshop demo showcasing AI configuration impact. The strict conventions above are intentional - they demonstrate how AI performs with clear guidance vs without.

When using this codebase for the workshop:
- Zero config typically scores ~55/100 on evaluations
- Full config (with CLAUDE.md + skills) typically scores ~95/100
- Same vague prompt, same evaluation rubric, 40-point difference
