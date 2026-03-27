# V1 — Zero Config

This version has NO AI configuration at all.
No .cursorrules, no commands, no skills.

## Demo Instructions

1. Open this project in Cursor
2. Delete any .cursorrules file if present
3. Remove .cursor/rules/ and .cursor/commands/ if they exist
4. Use the prompt below and observe the output

## Prompt to use:

```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

## What to observe:
- Does it match the existing code style?
- Does it use TypeScript properly?
- Does it follow the component structure?
- Does it use Tailwind correctly?
- Does it create types in the right place?
