# V4: Skills (Intelligent Automation)

This version demonstrates **intelligent, autonomous AI workflows** using Claude Code skills.

## What's Different?

Unlike v3 (commands that guide step-by-step), v4 skills can:
- ✅ Execute complete workflows autonomously
- ✅ Make intelligent decisions based on context
- ✅ Self-validate and auto-correct issues
- ✅ Chain multiple operations together
- ✅ Provide interactive, rich feedback

## Skills Included

### `/feature` - Guided Feature Addition
Interactive skill that walks through: Types → Data → Components → Integration

Asks for confirmation at each major step, but handles the implementation details automatically.

### `/review` - Intelligent Code Review
Analyzes code against project standards and offers automatic fixes:
- Detects TypeScript issues
- Validates component patterns
- Checks styling compliance
- Verifies architecture

Can auto-fix with user approval.

### `/demo-reset` - Workshop Reset
Safely resets project to clean state:
- Checks for uncommitted work
- Asks for confirmation
- Cleans working tree
- Verifies success

Perfect for running demos multiple times.

### `/workshop` - Full Automation ⭐
**The killer feature** - runs the complete workshop demo automatically:
1. Creates deployment history types
2. Generates mock data
3. Builds timeline component
4. Integrates into app
5. Runs quality review
6. Presents summary

This demonstrates true autonomous development with maintained quality standards.

## Setup for Demo

```bash
# Copy v4 configuration to project root
cp -r _versions/v4-skills/.claude /path/to/project/
cp _versions/v4-skills/CLAUDE.md /path/to/project/
```

## Running the Demo

### Option 1: Fully Automated
```
/workshop
```

That's it! Sit back and watch as Claude:
- Creates all necessary files
- Follows all conventions perfectly
- Reviews its own work
- Presents a complete summary

### Option 2: Interactive Feature Addition
```
/feature
```

Then describe what you want to add. Claude will guide you through each step, asking for confirmation before major changes.

### Option 3: Manual with Review
1. Make changes manually or with basic prompts
2. Run `/review` to check quality
3. Accept auto-fixes if offered

## The V4 Advantage

| Aspect | v3 Commands | v4 Skills |
|--------|-------------|-----------|
| Execution | Step-by-step, requires confirmation | Autonomous with intelligent decisions |
| Quality | Manual checklist | Automatic validation + auto-fix |
| Speed | Slower (user waits for each step) | Faster (executes full workflows) |
| Intelligence | Follows instructions | Makes contextual decisions |
| Error Handling | User must fix | Can self-correct |
| Demo Impact | "Here's a workflow" | "Watch AI code autonomously" |

## Workshop Presentation Tips

1. **Start with v3** - Show the command-based workflow
2. **Introduce v4** - "But what if it could do all this automatically?"
3. **Run `/workshop`** - Let it execute completely
4. **Show the diff** - Perfect code following all conventions
5. **Run `/review`** - Show it validates its own work
6. **Emphasize**: "This is the same prompt, but now with zero manual steps"

## Key Message

**v4 shows the future**: AI that doesn't just follow rules or checklists, but autonomously executes complex workflows while maintaining rigorous quality standards.

Skills transform AI from a "smart assistant" into an "autonomous developer teammate."
