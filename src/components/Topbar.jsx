export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Buyer Meeting List View</h2>
        <p className="text-gray-500 text-sm mt-0.5">Buyer Meeting ➤ Buyer Meeting List View</p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-1 bg-purple-600 text-white rounded text-sm">Export</button>
        <button className="px-4 py-1 bg-purple-600 text-white rounded text-sm">+ Create New Meeting</button>
      </div>
    </div>
  );
}
