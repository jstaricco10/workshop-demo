---
description: Review code for quality and project standards compliance
tags: [quality, review, validation]
---

# Code Review

I'll review your code against project standards and automatically suggest or apply fixes.

## Instructions for Claude

When this skill is invoked:

### Step 1: Determine Scope
Ask the user what to review:
- Specific file(s)?
- All recently modified files?
- Entire codebase?

### Step 2: Read and Analyze
For each file in scope, check against these standards:

#### TypeScript Standards
- [ ] No `any` types (strict mode)
- [ ] Props interfaces defined for all components
- [ ] `import type` used for type-only imports
- [ ] No unnecessary type assertions (`as`)
- [ ] Array access handles potential `undefined` (noUncheckedIndexedAccess)

#### Component Standards
- [ ] Named exports only (no default exports)
- [ ] Component under 80 lines
- [ ] Props received via props interface (no data imports)
- [ ] One component per file
- [ ] PascalCase filename matches component name

#### Styling Standards
- [ ] Tailwind classes only (no inline styles, no CSS modules)
- [ ] Uses correct color palette: `blue-500/600`, `emerald-500`, `red-500`, `gray-50/100/400/500/900`
- [ ] Cards use `rounded-xl` + `shadow-sm`
- [ ] Interactive elements have `hover:shadow-md`
- [ ] Hover/state changes include `transition-*` classes
- [ ] Inner elements use `rounded-lg`
- [ ] Avatars use `rounded-full`
- [ ] Spacing uses `gap-*` utilities over margins

#### Data & Architecture
- [ ] Types in `src/types/dashboard.ts`
- [ ] Mock data in `src/data/mockData.ts`
- [ ] Data properly typed with interfaces
- [ ] Icons imported individually from `lucide-react` (not `import * as`)

### Step 3: Report Issues
For each issue found, provide:

```
📄 File: path/to/file.tsx:line
❌ Problem: [clear description]
✅ Fix: [concrete solution or code change]
```

### Step 4: Offer Auto-Fix
If issues are found, ask the user:
- "Would you like me to fix these issues automatically?"

If yes, apply fixes using Edit tool and report what was changed.

### Step 5: Summary
End with a summary:
- ✅ **Passed** - No issues found
- ⚠️ **N issues found** - List count by category (TypeScript, Components, Styling, Data)

## Auto-Fix Priorities

When auto-fixing, prioritize in this order:
1. Critical: `any` types, missing prop interfaces, default exports
2. Important: Wrong color palette, missing transitions, inline styles
3. Nice-to-have: Spacing adjustments, icon imports cleanup

Always show the user what will be changed before applying fixes.
