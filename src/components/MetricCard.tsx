import { GitCommitHorizontal, GitMerge, Eye, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react'
import type { DevMetric } from '../types/dashboard'

const iconMap: Record<string, React.ElementType> = {
  'git-commit': GitCommitHorizontal,
  'git-merge': GitMerge,
  'eye': Eye,
  'check-circle': CheckCircle,
}

interface MetricCardProps {
  metric: DevMetric
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = iconMap[metric.icon] ?? CheckCircle
  const isPositive = metric.change >= 0
  const TrendIcon = isPositive ? TrendingUp : TrendingDown

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
          <TrendIcon className="w-3.5 h-3.5" />
          <span>{Math.abs(metric.change)}%</span>
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{metric.value}{metric.unit === '%' ? '%' : ''}</p>
      <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
    </div>
  )
}
