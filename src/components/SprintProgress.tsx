import { Target, CheckSquare } from 'lucide-react'
import type { SprintInfo } from '../types/dashboard'

interface SprintProgressProps {
  sprint: SprintInfo
}

export function SprintProgress({ sprint }: SprintProgressProps) {
  const pointsPercent = Math.round((sprint.completedPoints / sprint.totalPoints) * 100)
  const tasksPercent = Math.round((sprint.completedTasks / sprint.totalTasks) * 100)

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">{sprint.name}</h2>
      <p className="text-sm text-gray-400 mb-5">
        {sprint.startDate} → {sprint.endDate}
      </p>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Target className="w-4 h-4" />
              <span>Story Points</span>
            </div>
            <span className="text-sm font-mono font-medium text-gray-900">
              {sprint.completedPoints}/{sprint.totalPoints}
            </span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${pointsPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckSquare className="w-4 h-4" />
              <span>Tasks</span>
            </div>
            <span className="text-sm font-mono font-medium text-gray-900">
              {sprint.completedTasks}/{sprint.totalTasks}
            </span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${tasksPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
