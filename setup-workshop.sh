#!/bin/bash

# Workshop Demo Setup Script
# Creates 4 separate project directories, one for each version

set -e  # Exit on error

echo "🎬 Setting up Workshop Demo environments..."
echo ""

BASE_DIR="workshop-demo"
PARENT_DIR=$(dirname "$(pwd)")

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
  echo "❌ Error: Run this script from the workshop-demo directory"
  exit 1
fi

echo "📦 Creating project copies..."

# V1 - Zero Config
echo "  Creating v1-zero-config..."
cd "$PARENT_DIR"
rm -rf workshop-demo-v1
cp -r "$BASE_DIR" workshop-demo-v1
cd workshop-demo-v1
rm -rf .cursorrules .cursor .claude CLAUDE.md 2>/dev/null || true
# Set port to 3001
sed -i '' 's/port: 3003/port: 3001/' vite.config.ts
npm install > /dev/null 2>&1
git init > /dev/null 2>&1
git add . > /dev/null 2>&1
git commit -m "v1: zero config" > /dev/null 2>&1
echo "  ✅ v1-zero-config ready (port 3001)"

# V2 - Rules Only
echo "  Creating v2-rules-only..."
cd "$PARENT_DIR"
rm -rf workshop-demo-v2
cp -r "$BASE_DIR" workshop-demo-v2
cd workshop-demo-v2
rm -rf .cursor .claude CLAUDE.md 2>/dev/null || true
cp _versions/v2-rules-only/.cursorrules .
# Set port to 3002
sed -i '' 's/port: 3003/port: 3002/' vite.config.ts
npm install > /dev/null 2>&1
git init > /dev/null 2>&1
git add . > /dev/null 2>&1
git commit -m "v2: rules only" > /dev/null 2>&1
echo "  ✅ v2-rules-only ready (port 3002)"

# V3 - Commands
echo "  Creating v3-full-setup..."
cd "$PARENT_DIR"
rm -rf workshop-demo-v3
cp -r "$BASE_DIR" workshop-demo-v3
cd workshop-demo-v3
rm -rf .claude CLAUDE.md 2>/dev/null || true
cp _versions/v3-full-setup/.cursorrules .
cp -r _versions/v3-full-setup/.cursor .
npm install > /dev/null 2>&1
git init > /dev/null 2>&1
git add . > /dev/null 2>&1
git commit -m "v3: full setup with commands" > /dev/null 2>&1
echo "  ✅ v3-full-setup ready"

# V4 - Skills
echo "  Creating v4-skills..."
cd "$PARENT_DIR"
rm -rf workshop-demo-v4
cp -r "$BASE_DIR" workshop-demo-v4
cd workshop-demo-v4
rm -rf .cursorrules .cursor 2>/dev/null || true
cp _versions/v4-skills/CLAUDE.md .
cp -r _versions/v4-skills/.claude .
# Keep port 3003 for v3
# Set port to 3004
sed -i '' 's/port: 3003/port: 3004/' vite.config.ts
npm install > /dev/null 2>&1
git init > /dev/null 2>&1
git add . > /dev/null 2>&1
git commit -m "v4: skills" > /dev/null 2>&1
echo "  ✅ v4-skills ready (port 3004)"

echo ""
echo "✨ Workshop setup complete!"
echo ""
echo "📁 Created directories:"
echo "  - workshop-demo-v1/ (zero config) - http://localhost:3001"
echo "  - workshop-demo-v2/ (rules only) - http://localhost:3002"
echo "  - workshop-demo-v3/ (commands) - http://localhost:3003"
echo "  - workshop-demo-v4/ (skills) - http://localhost:3004"
echo ""
echo "🎯 Next steps:"
echo "  1. Open 4 terminal tabs"
echo "  2. In each tab:"
echo "     Tab 1: cd $PARENT_DIR/workshop-demo-v1"
echo "     Tab 2: cd $PARENT_DIR/workshop-demo-v2"
echo "     Tab 3: cd $PARENT_DIR/workshop-demo-v3"
echo "     Tab 4: cd $PARENT_DIR/workshop-demo-v4"
echo "  3. Start your presentation!"
echo ""
echo "💡 To reset a demo:"
echo "     git checkout . && git clean -fd"
echo ""
