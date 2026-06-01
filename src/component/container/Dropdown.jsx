import React from 'react'

export default function Dropdown({ value = 'Select state' }) {
  return (
    <div className="w-full h-11 px-4 rounded-lg border border-[#E5E7EB] bg-slate-50 flex items-center justify-between cursor-pointer">
      <span className="text-sm text-gray-400">
        {value}
      </span>

      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  )
}
