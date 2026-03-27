#!/bin/bash

# Quick reset script for during presentation
# Run this in any v1/v2/v3/v4 directory to reset to clean state

set -e

echo "🔄 Resetting demo to clean state..."

# Check if we're in a git repo
if [[ ! -d ".git" ]]; then
  echo "❌ Error: Not in a git repository"
  exit 1
fi

# Reset all changes
git checkout . 2>/dev/null || true
git clean -fd 2>/dev/null || true

# Check if clean
if [[ -z $(git status --porcelain) ]]; then
  echo "✅ Demo reset complete - working tree clean"
else
  echo "⚠️  Warning: Some files remain"
  git status --short
fi

echo ""
echo "🎬 Ready for next demo!"
