---
description: Add a new dashboard feature following the project workflow
tags: [workflow, development]
---

# Add Dashboard Feature

I'll guide you through adding a new feature to the dashboard following our strict workflow: **Types → Data → Components → Integration**.

## Instructions for Claude

When this skill is invoked, follow these steps in order:

### Step 1: Understand Requirements
Ask the user what feature they want to add. Get details on:
- What data needs to be displayed?
- What visual components are needed?
- Should any existing components be reused (like MetricCard)?

### Step 2: Create Types
1. Read `src/types/dashboard.ts` to understand existing patterns
2. Create new TypeScript interfaces for the feature's data structures
3. Add them to `src/types/dashboard.ts`
4. Show the user the new types and confirm before proceeding

### Step 3: Create Mock Data
1. Read `src/data/mockData.ts` to see the pattern
2. Create realistic mock data using the types from Step 2
3. Add as a named export to `src/data/mockData.ts`
4. Show the user the mock data and confirm before proceeding

### Step 4: Create Components
1. Read an existing component (like `src/components/MetricCard.tsx`) to understand patterns
2. Create new component file(s) in `src/components/`:
   - Use PascalCase filename
   - Named export only (no default exports)
   - Define `ComponentNameProps` interface
   - Keep under 80 lines
   - Use Tailwind classes: `rounded-xl`, `shadow-sm`, `hover:shadow-md`, `transition-shadow`
   - Use color palette: `blue-500/600`, `emerald-500`, `red-500`, `gray-50/100/400/500/900`
3. If adding a metric stat, reuse the existing `MetricCard` component
4. Show the user the component(s) and confirm before proceeding

### Step 5: Integration
1. Read `src/App.tsx` to understand the layout
2. Import the new component and data
3. Add to the layout grid following existing patterns
4. Show the changes and confirm

### Step 6: Verification
Run through this checklist and report results:
- ✓ Types defined in `src/types/dashboard.ts`
- ✓ Mock data is typed and exported from `src/data/mockData.ts`
- ✓ Component uses named export
- ✓ Props interface defined
- ✓ Tailwind classes match patterns (rounded-xl, shadow-sm, color palette)
- ✓ No `any` types used
- ✓ Component is under 80 lines
- ✓ No data imports inside component (data passed via props)

Present a summary of all files created/modified.

## Key Patterns to Follow

**Never use:**
- Default exports
- The `any` type
- Inline styles or CSS modules
- Data imports inside components

**Always use:**
- Named exports
- `import type` for type-only imports
- Tailwind utility classes
- Props to pass data to components
