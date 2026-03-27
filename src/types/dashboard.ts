export interface DevMetric {
  label: string
  value: number
  unit: string
  change: number // percentage vs previous period
  icon: string
}

export interface WeeklyActivity {
  day: string
  commits: number
  prs: number
  reviews: number
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
  commits: number
  prsOpen: number
  prsMerged: number
  reviewsDone: number
}

export interface SprintInfo {
  name: string
  startDate: string
  endDate: string
  totalPoints: number
  completedPoints: number
  totalTasks: number
  completedTasks: number
}
