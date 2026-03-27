---
description: Add a new feature/section to the dashboard
---

# Add Dashboard Feature

When adding a new feature to the dashboard, follow this exact sequence:

## Step 1: Types
Create or extend interfaces in `src/types/dashboard.ts` for any new data structures.

## Step 2: Mock Data
Add realistic mock data in `src/data/mockData.ts`. Import and use the types from step 1.

## Step 3: Components
Create new component(s) in `src/components/`:
- One file per component
- Named export
- Define `ComponentNameProps` interface
- Follow existing Tailwind patterns (rounded-xl, shadow-sm, color palette)
- If adding a stat, reuse `MetricCard` with a new entry in the `metrics` array

## Step 4: Integration
Wire into `App.tsx`:
- Import the new component and data
- Add to the layout grid following existing patterns
- New sections go below existing ones unless replacing something

## Step 5: Verify
After making changes, list all modified/created files and confirm:
- [ ] Types defined in src/types/
- [ ] Mock data is typed and realistic
- [ ] Component uses named export and props interface
- [ ] Tailwind classes match existing patterns
- [ ] No `any` types
- [ ] Component is under 80 lines
