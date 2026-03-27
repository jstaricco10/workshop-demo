import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type { WeeklyActivity } from '../types/dashboard'

interface ActivityChartProps {
  data: WeeklyActivity[]
}

export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 13 }} />
          <YAxis tick={{ fill: '#64748b', fontSize: 13 }} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
            }}
          />
          <Legend />
          <Bar dataKey="commits" name="Commits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="prs" name="PRs" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="reviews" name="Reviews" fill="#06b6d4" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
