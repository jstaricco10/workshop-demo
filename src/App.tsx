import { Activity } from 'lucide-react'
import { MetricCard } from './components/MetricCard'
import { ActivityChart } from './components/ActivityChart'
import { TeamTable } from './components/TeamTable'
import { SprintProgress } from './components/SprintProgress'
import { metrics, weeklyActivity, team, sprint } from './data/mockData'

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Dev Dashboard</h1>
            <p className="text-sm text-gray-400">Team engineering metrics</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Chart + Sprint */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActivityChart data={weeklyActivity} />
          </div>
          <div>
            <SprintProgress sprint={sprint} />
          </div>
        </div>

        {/* Team Table */}
        <TeamTable members={team} />
      </main>
    </div>
  )
}
