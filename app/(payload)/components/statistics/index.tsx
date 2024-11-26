// import ContributionHeatmap from './heatmap';

// 示例数据
const contributionData = [
  { date: '2024-01-01', value: 5 },
  { date: '2024-01-02', value: 2 },
  { date: '2024-01-03', value: 15 },
  { date: '2024-01-04', value: 8 },
  // ... 更多数据
];
export default function AdminStatistics() {
  return (
    <main>
      <h2 className="text-2xl font-bold mb-4">Activity</h2>
      {/* <ContributionHeatmap data={contributionData} /> */}
    </main>
  )
}