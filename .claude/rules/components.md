---
description: Component development rules
globs: ["**/*.tsx", "**/*.jsx"]
---

# Component Rules

## Exports
- Always use named exports: `export function ComponentName()`
- NEVER use default exports

## Props
- Every component MUST have a props interface: `ComponentNameProps`
- Never inline prop types

## Size
- Keep components under 80 lines
- Extract sub-components if longer

## Semantic HTML
- Always use semantic HTML elements
- Prefer `<button>` over `<div onClick>`
- Use proper ARIA attributes when needed

## Composition
- Prefer composition over inheritance
- Pass children or render props instead of complex inheritance patterns

## Metrics
- For metric displays: ALWAYS reuse the `MetricCard` component
- NEVER create custom metric display components
