#!/bin/bash

# Workshop Demo Setup Script (Simplified - 2 Versions)
# V1: Zero Config vs V4: Full Stack

set -e  # Exit on error

echo "🎬 Setting up Workshop Demo environments (V1 vs V4)..."
echo ""

BASE_DIR="workshop-demo"
PARENT_DIR=$(dirname "$(pwd)")

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
  echo "❌ Error: Run this script from the workshop-demo directory"
  exit 1
fi

echo "📦 Creating project copies..."

# Zero Config
echo "  Creating zero-config..."
cd "$PARENT_DIR"
rm -rf workshop-demo-zero-config
cp -r "$BASE_DIR" workshop-demo-zero-config
cd workshop-demo-zero-config
rm -rf .cursorrules .cursor .claude CLAUDE.md 2>/dev/null || true
rm -rf _versions 2>/dev/null || true  # Remove versions to keep it clean
# Set port to 3001
sed -i '' 's/port: 3003/port: 3001/' vite.config.ts
npm install > /dev/null 2>&1
echo "  ✅ zero-config ready (port 3001)"

# Full Stack (Skills + Rules + Commands)
echo "  Creating full-stack..."
cd "$PARENT_DIR"
rm -rf workshop-demo-full-stack
cp -r "$BASE_DIR" workshop-demo-full-stack
cd workshop-demo-full-stack
rm -rf .cursorrules .cursor 2>/dev/null || true
# Copy config BEFORE removing _versions
if [ -d "_versions/v4-skills" ]; then
  cp _versions/v4-skills/CLAUDE.md . 2>/dev/null || true
  cp -r _versions/v4-skills/.claude . 2>/dev/null || true
elif [ -d "$PARENT_DIR/$BASE_DIR/_versions/v4-skills" ]; then
  cp "$PARENT_DIR/$BASE_DIR/_versions/v4-skills/CLAUDE.md" . 2>/dev/null || true
  cp -r "$PARENT_DIR/$BASE_DIR/_versions/v4-skills/.claude" . 2>/dev/null || true
fi
rm -rf _versions 2>/dev/null || true  # Remove versions to keep it clean
# Set port to 3004
sed -i '' 's/port: 3003/port: 3004/' vite.config.ts
npm install > /dev/null 2>&1
echo "  ✅ full-stack ready (port 3004)"

cd "$PARENT_DIR"

echo ""
echo "✨ Workshop setup complete!"
echo ""
echo "📁 Created directories:"
echo "  - workshop-demo-zero-config/ (sin configuración) - http://localhost:3001"
echo "  - workshop-demo-full-stack/ (configuración completa) - http://localhost:3004"
echo ""
echo "🎯 Next steps:"
echo "  1. Open 2 terminal tabs"
echo "  2. In each tab:"
echo "     Tab 1: cd $PARENT_DIR/workshop-demo-zero-config"
echo "     Tab 2: cd $PARENT_DIR/workshop-demo-full-stack"
echo "  3. Start your presentation!"
echo ""
echo "🎬 Presentation flow:"
echo "  1. Zero Config - point out problems"
echo "  2. Full Stack - demonstrate /workshop skill"
echo "  3. Compare results side-by-side"
echo "  4. Mic drop 🎤⬇️"
echo ""
