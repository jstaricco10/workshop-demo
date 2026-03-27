# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Workshop demo React dashboard (v4-skills version) demonstrating the power of AI skills for autonomous, intelligent development workflows. This version showcases how skills can automate complex multi-step processes while maintaining strict quality standards.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3003)
npm run build        # Type-check and build for production
npm run preview      # Preview production build
```

## Available Skills

### `/feature` - Add Dashboard Feature
Guides you through adding a new dashboard feature following the strict workflow:
**Types → Data → Components → Integration**

Automatically:
- Creates TypeScript interfaces
- Generates mock data
- Builds components following patterns
- Integrates into App.tsx
- Verifies quality standards

### `/review` - Code Quality Review
Analyzes code against project standards and offers automatic fixes:
- TypeScript compliance (no `any`, proper interfaces)
- Component patterns (named exports, under 80 lines)
- Styling standards (Tailwind, color palette)
- Architecture compliance (data flow, file organization)

Can auto-fix issues with user approval.

### `/demo-reset` - Reset to Base State
Resets project to clean state for workshop demonstrations:
- Discards uncommitted changes
- Removes untracked files
- Verifies clean working tree
- Optional dev server restart

Perfect for running multiple demos.

### `/workshop` - Full Demo Runner
Executes the complete workshop demo end-to-end:
- Runs the standard workshop prompt automatically
- Adds "Deployment History" feature
- Creates all necessary types, data, components
- Integrates everything
- Auto-reviews the code
- Shows complete summary

**This is the killer feature** - fully autonomous execution while maintaining perfect quality.

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

**Data flow** — components receive all data via props. Never import data directly inside components.

**Component size** — keep under 80 lines. Extract sub-components if longer.

### TypeScript Standards

- **Strict mode**: No `any` types ever
- **Type imports**: Use `import type { X }` for type-only imports
- **Interfaces**: Define all data structures in `src/types/dashboard.ts`
- **Array access**: Handle potential `undefined` (noUncheckedIndexedAccess is enabled)

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

## Path Aliases

TypeScript is configured with `@/*` alias mapping to `src/*`:
```tsx
import type { DevMetric } from '@/types/dashboard'
```

## V4 Skills Advantage

This version demonstrates the evolution from basic configuration to intelligent automation:

| Capability | v1 Zero Config | v2 Rules | v3 Commands | v4 Skills |
|------------|---------------|----------|-------------|-----------|
| Consistency | ❌ Unpredictable | ✅ Reliable | ✅ Reliable | ✅ Reliable |
| Workflow Guidance | ❌ None | ⚠️ Implicit | ✅ Step-by-step | ✅✅ Automated |
| Quality Checks | ❌ None | ⚠️ Manual | ✅ Checklist | ✅✅ Auto-review |
| User Intervention | ❌ Constant | ⚠️ Frequent | ⚠️ Each step | ✅ Minimal |
| Intelligence | ❌ Basic | ⚠️ Pattern-matching | ✅ Guided | ✅✅ Autonomous |

Skills can:
- Execute complex multi-step workflows automatically
- Make intelligent decisions based on context
- Self-validate and auto-correct
- Chain multiple operations together
- Provide rich, interactive feedback

## Workshop Demo Context

This is the v4-skills version showing the pinnacle of AI configuration. Compare this with:
- **v1-zero-config**: No configuration
- **v2-rules-only**: Basic `.cursorrules`
- **v3-full-setup**: Commands + modular rules
- **v4-skills**: Intelligent, autonomous skills

Run `/workshop` to see the full power of automated feature development with built-in quality assurance.
