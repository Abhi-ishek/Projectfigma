import React from 'react'

export default function Horizontal() {
  return (
    <div className="w-full pt-6 border-t border-gray-200 flex justify-end gap-3">
      <button className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200">
        Cancel
      </button>

      <button className="px-6 py-2.5 bg-[#EF4444] text-white rounded-md text-sm font-medium cursor-pointer hover:bg-[#DC2626] transition-colors duration-200">
        Save Details
      </button>
    </div>
  )
}
