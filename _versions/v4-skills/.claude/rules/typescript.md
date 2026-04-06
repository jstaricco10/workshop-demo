---
description: TypeScript and type safety rules
globs: ["**/*.ts", "**/*.tsx"]
---

# TypeScript Rules

## Strict Mode
- NEVER use `any` types
- Always use proper TypeScript types
- Violations will break the build

## Type Organization
- ALL interfaces must be in `src/types/dashboard.ts`
- NEVER define types inline in components
- Use `import type { X }` for type-only imports

## Type Patterns
- Use `interface` for object shapes
- Use `type` for unions/intersections
- Status fields: use union types like `'success' | 'failed' | 'pending'`

## Array Access
- Remember: `noUncheckedIndexedAccess` is enabled
- Array access returns `T | undefined`
- Always handle potential undefined values

## Props Interfaces
- Pattern: `ComponentNameProps`
- Always explicit, never inline
- Document complex props with comments
