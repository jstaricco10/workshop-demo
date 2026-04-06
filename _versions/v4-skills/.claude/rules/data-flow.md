---
description: Data flow and architecture rules
globs: ["**/*.tsx", "**/*.jsx"]
---

# Data Flow Rules

## Data Imports
- Data can ONLY be imported in `App.tsx`
- NEVER import data directly in components
- Components must be pure UI

## Props-Based Architecture
- All data passed to components via props
- Components receive data, don't fetch it
- Example:
  ```tsx
  // ✅ CORRECT - in App.tsx
  import { mockData } from '@/data/mockData'
  <Component data={mockData} />
  
  // ❌ WRONG - in Component.tsx
  import { mockData } from '@/data/mockData'
  ```

## Data Organization
- ALL mock data goes in `src/data/mockData.ts`
- Export as named constants
- Follow existing data structure patterns
- Use proper typing from `src/types/dashboard.ts`

## Separation of Concerns
- Types: `src/types/dashboard.ts`
- Data: `src/data/mockData.ts`
- UI: `src/components/`
- Layout: `App.tsx`
