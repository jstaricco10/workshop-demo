import type { DevMetric, WeeklyActivity, TeamMember, SprintInfo } from '../types/dashboard'

export const metrics: DevMetric[] = [
  { label: 'Commits This Week', value: 147, unit: 'commits', change: 12.5, icon: 'git-commit' },
  { label: 'PRs Merged', value: 23, unit: 'PRs', change: -3.2, icon: 'git-merge' },
  { label: 'Code Reviews', value: 38, unit: 'reviews', change: 8.1, icon: 'eye' },
  { label: 'Build Success Rate', value: 96.4, unit: '%', change: 1.2, icon: 'check-circle' },
]

export const weeklyActivity: WeeklyActivity[] = [
  { day: 'Mon', commits: 24, prs: 5, reviews: 8 },
  { day: 'Tue', commits: 31, prs: 3, reviews: 6 },
  { day: 'Wed', commits: 18, prs: 7, reviews: 12 },
  { day: 'Thu', commits: 42, prs: 4, reviews: 5 },
  { day: 'Fri', commits: 32, prs: 4, reviews: 7 },
]

export const team: TeamMember[] = [
  { name: 'Ana García', role: 'Frontend Lead', avatar: 'AG', commits: 42, prsOpen: 2, prsMerged: 8, reviewsDone: 15 },
  { name: 'Lucas Méndez', role: 'Backend Dev', avatar: 'LM', commits: 38, prsOpen: 1, prsMerged: 6, reviewsDone: 9 },
  { name: 'Sofía Torres', role: 'Full Stack', avatar: 'ST', commits: 35, prsOpen: 3, prsMerged: 5, reviewsDone: 8 },
  { name: 'Mateo Ruiz', role: 'DevOps', avatar: 'MR', commits: 22, prsOpen: 1, prsMerged: 3, reviewsDone: 4 },
  { name: 'Valentina Díaz', role: 'Frontend Dev', avatar: 'VD', commits: 10, prsOpen: 0, prsMerged: 1, reviewsDone: 2 },
]

export const sprint: SprintInfo = {
  name: 'Sprint 14 — Q1 Polish',
  startDate: '2026-03-16',
  endDate: '2026-03-27',
  totalPoints: 55,
  completedPoints: 41,
  totalTasks: 18,
  completedTasks: 13,
}
