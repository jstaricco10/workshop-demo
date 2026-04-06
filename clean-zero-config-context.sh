#!/bin/bash

# Script to clean zero-config project context
# Removes memory and ensures zero configuration

set -e

echo "🧹 Cleaning zero-config project context..."
echo ""

# Find the zero-config project directory
ZERO_CONFIG_CONTEXT="$HOME/.claude/projects/-Users-juanmartinstaricco-Desktop-ai-workshop-workshop-demo-zero-config"

if [ -d "$ZERO_CONFIG_CONTEXT" ]; then
  echo "📁 Found zero-config context: $ZERO_CONFIG_CONTEXT"

  # Count conversation files before
  JSONL_COUNT=$(find "$ZERO_CONFIG_CONTEXT" -name "*.jsonl" -type f 2>/dev/null | wc -l | tr -d ' ')

  # Remove memory
  if [ -d "$ZERO_CONFIG_CONTEXT/memory" ]; then
    echo "  🗑️  Removing memory..."
    rm -rf "$ZERO_CONFIG_CONTEXT/memory"
    echo "  ✅ Memory cleared"
  fi

  # Remove conversation history files (.jsonl)
  if [ "$JSONL_COUNT" -gt 0 ]; then
    echo "  🗑️  Removing $JSONL_COUNT conversation history files..."
    find "$ZERO_CONFIG_CONTEXT" -name "*.jsonl" -type f -delete
    echo "  ✅ Conversation history cleared"
  fi

  # Remove any subdirectories (conversation-specific folders)
  SUBDIRS=$(find "$ZERO_CONFIG_CONTEXT" -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
  if [ "$SUBDIRS" -gt 0 ]; then
    echo "  🗑️  Removing $SUBDIRS conversation folders..."
    find "$ZERO_CONFIG_CONTEXT" -mindepth 1 -maxdepth 1 -type d -exec rm -rf {} +
    echo "  ✅ Conversation folders cleared"
  fi

  # Remove cache
  if [ -d "$ZERO_CONFIG_CONTEXT/.cache" ]; then
    echo "  🗑️  Removing cache..."
    rm -rf "$ZERO_CONFIG_CONTEXT/.cache"
    echo "  ✅ Cache cleared"
  fi

  echo ""
  echo "✨ Zero-config context completely cleaned!"
  echo "   All conversation history and cache removed"
else
  echo "ℹ️  Zero-config context not found (will be created on first use)"
fi

echo ""
echo "✅ Zero-config is completely clean (cache reads = 0)"
echo "ℹ️  Full-stack context preserved (shows efficient caching)"
echo ""
echo "🎯 Next: Run ./setup-workshop-simple.sh to create fresh environments"
