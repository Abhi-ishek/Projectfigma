import React from 'react'

export default function Container1({ text, value, type = 'text' }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-900">
        {text}
      </label>

      {type === 'select' ? (
        <div className="w-full h-11 px-4 py-3 rounded-lg border border-[#E5E7EB] bg-slate-50 text-gray-400 text-sm flex items-center justify-between cursor-pointer">
          <span>{value}</span>
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
      ) : (
        <div className="w-full h-11 px-4 py-3 rounded-lg border border-[#E5E7EB] bg-slate-50 text-gray-400 text-sm flex items-center">
          {value}
        </div>
      )}
    </div>
  )
}
