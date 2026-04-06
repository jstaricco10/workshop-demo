---
description: Reset project to base state for workshop demonstrations
tags: [workshop, demo, utility]
---

# Demo Reset

Reset the project to its clean base state, perfect for running workshop demonstrations multiple times.

## Instructions for Claude

When this skill is invoked:

### Step 1: Safety Check
**IMPORTANT**: Before doing anything, check:
```bash
git status
```

If there are uncommitted changes, **STOP** and ask the user:
- "⚠️ You have uncommitted changes. Do you want to commit them first, stash them, or discard them?"

Wait for user confirmation before proceeding.

### Step 2: Check Current Branch
Check what branch we're on:
```bash
git branch --show-current
```

If not on `master` or `main`, ask the user if they want to switch.

### Step 3: Reset to Clean State
Execute these commands:
```bash
git checkout .
git clean -fd
```

This will:
- Discard all uncommitted changes
- Remove all untracked files and directories

### Step 4: Verify Clean State
```bash
git status
```

Should show: "nothing to commit, working tree clean"

### Step 5: Optional - Restart Dev Server
Ask the user: "Would you like me to restart the dev server (npm run dev)?"

If yes:
1. Kill any existing process on port 3003
2. Start fresh dev server in background

### Step 6: Confirmation
Report to the user:
```
✅ Project reset complete!
   - All changes discarded
   - Untracked files removed
   - Working tree clean
   - Ready for next demo
```

## Workshop Use Case

This skill is designed for presenters running the workshop multiple times. After demonstrating v1, v2, or v3, they can quickly reset to the base state and run the next version.

**Typical workflow:**
1. Run demo with a version (add deployment history feature)
2. Show the results
3. Run `/demo-reset`
4. Switch to next version
5. Run same demo with new configuration

## Safety Features

- Always checks for uncommitted work first
- Asks for confirmation before discarding changes
- Shows exactly what was reset
- Verifies clean state after reset
