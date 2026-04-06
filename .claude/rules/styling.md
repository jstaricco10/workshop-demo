---
description: Styling and design system rules
globs: ["**/*.tsx", "**/*.jsx"]
---

# Styling Rules

## NO Inline Styles
- NEVER use inline styles
- NEVER use CSS modules
- NEVER use styled-components

## Tailwind Only
- Use Tailwind utility classes EXCLUSIVELY

## Color Palette (Strict)
- **Allowed:** `blue-50/500/600`, `emerald-500/600`, `red-500`, `gray-50/100/400/500/900`
- **NEVER use:** green-*, teal-*, purple-*, or any other color variants

## Standard Patterns
- Cards: `rounded-xl shadow-sm hover:shadow-md transition-shadow p-6`
- Inner elements: `rounded-lg`
- Spacing: `gap-4`, `space-y-4`, `p-6`, `mb-8`

## Icons
- Import individually from `lucide-react`
- NEVER use `import * as Icons`

## Interactive Elements
- Always add hover states
- Always add transitions: `transition-shadow`, `transition-colors`
- Maintain pointer cursor for clickable items

## Status Colors
- Success: `bg-emerald-500 text-white`
- Failure: `bg-red-500 text-white`  
- Neutral: `bg-gray-100 text-gray-700`

## Typography
- Labels: `text-sm text-gray-500`
- Content: `text-base text-gray-900`
- Emphasis: `font-semibold`
