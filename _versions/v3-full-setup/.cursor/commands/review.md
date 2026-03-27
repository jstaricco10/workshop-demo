---
description: Review code for quality and consistency
---

# Code Review

Review the current file or selection against project standards:

## Checklist

### TypeScript
- [ ] No `any` types
- [ ] Props interface defined for components
- [ ] `import type` used for type-only imports
- [ ] No unnecessary type assertions (`as`)

### Components
- [ ] Named export (not default)
- [ ] Under 80 lines
- [ ] Props received, no direct data imports
- [ ] Tailwind classes only (no inline styles)

### Styling
- [ ] Uses project color palette (blue/emerald/red/gray)
- [ ] Cards use rounded-xl + shadow-sm
- [ ] Hover states have transitions
- [ ] Consistent spacing (gap-* preferred)

### Data
- [ ] Types in src/types/
- [ ] Mock data typed and exported from src/data/

## Output Format
For each issue found, provide:
1. **File + line** — where the issue is
2. **Problem** — what's wrong
3. **Fix** — concrete code change

End with a summary: ✅ passed / ⚠️ N issues found
