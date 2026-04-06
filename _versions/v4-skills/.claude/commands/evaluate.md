---
description: Evaluate implementation quality against project standards
tags: [review, evaluation, quality]
---

# Evaluate Implementation

Do not make any changes, I just want to evaluate your changes.

Look for:
- Code quality and consistency with the existing codebase
- Reuse of existing components, patterns, and utilities
- Introduction of unnecessary abstractions or duplication
- Naming conventions and clarity
- Separation of concerns (UI, logic, data)
- Scalability and extensibility of the solution
- Handling of edge cases (e.g., failed or missing data)
- Visual and UX consistency with the rest of the dashboard
- Complexity vs simplicity trade-offs

For each point:
- Explain what was done well
- Point out any issues or questionable decisions
- Highlight differences from typical best practices

Finally:
- Give an overall assessment of the implementation quality with a score /100
- Mention what a more senior/production-ready solution would improve

---

## Scoring Framework (100 points)

**1. Code Quality (15 pts)**
- Named exports (no default): -5 if violated
- Types in `src/types/`: -5 if inline
- No `any` types: -5 if used
- Props interfaces: -3 if missing

**2. Component Reuse (15 pts)**
- Reused MetricCard for metrics: -10 if custom display created
- Followed patterns: -5 if not
- No duplication: -5 if duplicated

**3. Abstractions (10 pts)**
- Appropriate level: -5 if over-engineered
- No premature abstractions: -3 if present
- DRY principle: -4 if duplication

**4. Naming (10 pts)**
- PascalCase components, camelCase vars: -4 if wrong
- ComponentNameProps pattern: -3 if not followed
- Descriptive names: -3 if unclear

**5. Separation of Concerns (15 pts)**
- Data via props only: -8 if imported in components
- Types separated: -5 if inline
- Pure UI components: -4 if mixed concerns

**6. Scalability (10 pts)**
- Extensible solution: -4 if rigid
- Follows patterns: -5 if breaks conventions
- Flexible data structures: -3 if hardcoded

**7. Edge Cases (5 pts)**
- Handles undefined/missing: -3 if not
- TypeScript safety: -2 if unsafe

**8. Visual/UX Consistency (15 pts)**
- Tailwind only: -8 if inline styles
- Project colors ONLY: -5 if wrong colors (green/teal/etc)
- Consistent spacing/styling: -4 if inconsistent
- Transitions on hover: -2 if missing

**9. Complexity (5 pts)**
- Simple, readable: -3 if over-complicated
- Components <80 lines: -2 if exceeded

---

## Score Guide

- **90-100**: Production-ready, follows all conventions
- **80-89**: Very good, minor issues
- **70-79**: Good, some issues to address
- **60-69**: Acceptable, several issues
- **50-59**: Needs work, many issues
- **<50**: Major issues, doesn't follow conventions
