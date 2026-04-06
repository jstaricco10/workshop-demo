# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Workshop demo React dashboard that demonstrates the impact of AI configuration levels (zero config → rules only → full setup with commands). The codebase follows strict conventions to highlight how AI assistants can better follow project patterns when properly configured.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3003)
npm run build        # Type-check and build for production
npm run preview      # Preview production build
```

## Tech Stack

- **React 18** with functional components and hooks
- **TypeScript** (strict mode with `noUncheckedIndexedAccess`)
- **Vite** for build tooling
- **Tailwind CSS** for styling (no inline styles, no CSS modules)
- **Recharts** for data visualization
- **Lucide React** for icons

## Architecture & File Organization

### Directory Structure
```
src/
  types/dashboard.ts      # All TypeScript interfaces
  data/mockData.ts        # Mock data, typed and exported
  components/             # One component per file
  App.tsx                 # Main layout
```

### Component Patterns

**Named exports only** — never use default exports:
```tsx
export function ComponentName({ prop }: ComponentNameProps) { }
```

**Props interfaces** — every component must define its props interface:
```tsx
interface ComponentNameProps {
  data: SomeType
}
```

**Data flow** — components receive all data via props. Never import data directly inside components. Data imports happen in `App.tsx` and are passed down.

**Component size** — keep under 80 lines. Extract sub-components if longer.

### TypeScript Standards

- **Strict mode**: No `any` types ever
- **Type imports**: Use `import type { X }` for type-only imports
- **Interfaces**: Define all data structures in `src/types/dashboard.ts`
- **Array access**: Handle potential `undefined` (noUncheckedIndexedAccess is enabled)
- Use `interface` for object shapes, `type` for unions/intersections

### Styling Conventions

**Tailwind utility classes exclusively**:
- Cards: `rounded-xl` with `shadow-sm`, `hover:shadow-md` for interactive elements
- Inner elements: `rounded-lg`
- Avatars: `rounded-full`
- Spacing: Prefer `gap-*` utilities over margins between siblings
- Transitions: Always add `transition-*` classes for hover/state changes

**Color Palette** (use these exact shades):
- Primary: `blue-50`, `blue-500`, `blue-600`
- Success/positive: `emerald-500`, `emerald-600`
- Error/negative: `red-500`
- Neutrals: `gray-50`, `gray-100`, `gray-400`, `gray-500`, `gray-900`

**Icons**: Import individually from `lucide-react`, not `import * as`

## Workflow: Adding Dashboard Features

When adding new features, follow this exact sequence:

### 1. Types First
Create or extend interfaces in `src/types/dashboard.ts` for new data structures.

### 2. Mock Data
Add realistic mock data in `src/data/mockData.ts`, using the types from step 1. Export as named constants.

### 3. Components
Create components in `src/components/`:
- One file per component, PascalCase filename
- Named export with `ComponentNameProps` interface
- Follow Tailwind patterns and color palette
- If adding a metric stat, reuse the existing `MetricCard` component

### 4. Integration
Wire into `App.tsx`:
- Import component and data
- Add to layout grid following existing patterns
- New sections typically go below existing ones

## Path Aliases

TypeScript is configured with `@/*` alias mapping to `src/*`:
```tsx
import type { DevMetric } from '@/types/dashboard'
```

## Workshop Demo Context

This project demonstrates the power of AI configuration by comparing two versions:
1. **Zero Config**: No AI configuration (demonstrates inconsistent, unpredictable output)
2. **Full Stack**: CLAUDE.md + Skills (demonstrates autonomous, production-ready code generation)

The same prompt is used in both versions to show the dramatic difference configuration makes.

**For presentations:** See `PRESENTATION-SIMPLE.md` for the complete 25-minute demo guide and `QUICK-REFERENCE-SIMPLE.md` as your cheat sheet during the talk.
