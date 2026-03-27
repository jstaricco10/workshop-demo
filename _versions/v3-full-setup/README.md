# V3 — Full Setup (Rules + Commands)

This version has the complete AI configuration:
- `.cursorrules` — project-level rules (always on)
- `.cursor/rules/` — modular rules by concern (TypeScript, components, data)
- `.cursor/commands/` — reusable task commands (/feature, /review)

## Setup

1. Copy `.cursorrules` to project root
2. Copy `.cursor/` folder to project root
3. Restart Cursor to pick up the new config

## Prompt to use:

Same exact prompt as V1 and V2:

```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

**Pro tip:** Start by invoking the `/feature` command — it will guide the AI through the exact steps.

## After generating, run:
Use the `/review` command on the generated code to show the audience how commands work as a quality gate.

## What to observe vs V1 and V2:
- Does it follow the step-by-step workflow from /feature?
- Does it create types FIRST, then data, then components?
- Is the code review checklist useful as a quality gate?
- How does the modular rules approach compare to a single .cursorrules?

## Full file tree for this version:

```
.cursorrules                    # Project-level rules (always active)
.cursor/
  rules/
    typescript.mdc              # TS conventions (activated on .ts/.tsx files)
    components.mdc              # Component patterns (activated in src/components/)
    data.mdc                    # Data conventions (activated in src/data/, src/types/)
  commands/
    feature.md                  # /feature — step-by-step for adding features
    review.md                   # /review — code quality checklist
```
