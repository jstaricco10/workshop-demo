# V2 — Rules Only

This version has a `.cursorrules` file that describes the project conventions.

## Setup

1. Copy `.cursorrules` to the project root
2. Make sure no commands or skills are configured

## Prompt to use:

Same exact prompt as V1:

```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

## What to observe vs V1:
- Does it create types in src/types/?
- Does it use named exports?
- Does it follow the Tailwind color palette?
- Does it use the existing MetricCard for the new stat?
- Does it match rounded-xl, shadow-sm patterns?
- Is TypeScript strict (no `any`)?
