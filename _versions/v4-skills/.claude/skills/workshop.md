---
description: Run the complete workshop demo end-to-end
tags: [workshop, demo, automation]
---

# Workshop Demo Runner

Execute the complete workshop demonstration prompt end-to-end, showing the power of full AI configuration with skills.

## Instructions for Claude

When this skill is invoked, automatically execute the standard workshop prompt:

### The Workshop Prompt

Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase

### Execution Flow

**Run the `/feature` skill workflow automatically:**

#### Step 1: Types (Auto-execute)
Create `DeploymentHistory` and update `DevMetric` interfaces in `src/types/dashboard.ts`:

```typescript
export interface DeploymentHistory {
  id: string
  environment: 'prod' | 'staging'
  status: 'success' | 'failed' | 'rolled-back'
  deployer: string
  timestamp: string
  commitHash: string
}
```

#### Step 2: Mock Data (Auto-execute)
Add to `src/data/mockData.ts`:

```typescript
export const deployments: DeploymentHistory[] = [
  // Last 10 deployments with realistic data
  // Mix of success/failed/rolled-back
  // Recent timestamps
  // Real-looking commit hashes
]

// Add to existing metrics array
export const metrics: DevMetric[] = [
  // ... existing metrics
  {
    label: 'Deploy Frequency',
    value: 12,
    unit: '/day',
    change: 8,
    icon: 'rocket',
  },
]
```

#### Step 3: Components (Auto-execute)
Create `src/components/DeploymentHistory.tsx`:
- Timeline-style layout
- Status badges with appropriate colors (emerald-500 for success, red-500 for failed, gray-500 for rolled-back)
- Icons from lucide-react (Rocket, CheckCircle, XCircle, RotateCcw)
- Proper Tailwind styling (rounded-xl, shadow-sm, transitions)

#### Step 4: Integration (Auto-execute)
Update `src/App.tsx`:
- Import DeploymentHistory component and deployments data
- Add DeployFrequency to metrics (already in mock data)
- Add DeploymentHistory section below existing sections

#### Step 5: Auto-Review
Automatically run the `/review` skill on all modified files.

#### Step 6: Summary
Show the user:
```
✅ Workshop Demo Complete!

Files Created/Modified:
  📝 src/types/dashboard.ts - Added DeploymentHistory interface
  📝 src/data/mockData.ts - Added deployments data and deploy frequency metric
  📝 src/components/DeploymentHistory.tsx - New timeline component
  📝 src/App.tsx - Integrated new feature

Review Results:
  [Output from /review skill]

🚀 Ready to present! The deployment history feature has been added following all project conventions.
```

### Key Differentiator

This skill demonstrates the power of v4 (skills) vs previous versions:
- **v1 (no config)**: Unpredictable, inconsistent patterns
- **v2 (rules)**: Better consistency, but manual workflow
- **v3 (commands)**: Guided workflow, requires user confirmation at each step
- **v4 (skills)**: Fully automated, intelligent execution, built-in quality checks

The skill executes the entire feature addition autonomously while maintaining perfect adherence to project standards.

## Usage

Simply invoke `/workshop` and let it run. Perfect for live demonstrations where you want to show the complete power of AI configuration without manual intervention.
