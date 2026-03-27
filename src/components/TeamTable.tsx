import type { TeamMember } from '../types/dashboard'

interface TeamTableProps {
  members: TeamMember[]
}

export function TeamTable({ members }: TeamTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Overview</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-2 font-medium text-gray-500">Member</th>
              <th className="text-right py-3 px-2 font-medium text-gray-500">Commits</th>
              <th className="text-right py-3 px-2 font-medium text-gray-500">PRs Open</th>
              <th className="text-right py-3 px-2 font-medium text-gray-500">PRs Merged</th>
              <th className="text-right py-3 px-2 font-medium text-gray-500">Reviews</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-gray-400 text-xs">{member.role}</p>
                    </div>
                  </div>
                </td>
                <td className="text-right py-3 px-2 font-mono text-gray-700">{member.commits}</td>
                <td className="text-right py-3 px-2 font-mono text-gray-700">{member.prsOpen}</td>
                <td className="text-right py-3 px-2 font-mono text-gray-700">{member.prsMerged}</td>
                <td className="text-right py-3 px-2 font-mono text-gray-700">{member.reviewsDone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
