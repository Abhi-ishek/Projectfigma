import React from 'react'

export default function Righttop() {
  return (
    <div className="w-full p-5 rounded-[10px] border border-gray-200 bg-white flex flex-col gap-4">
      {/* Section Title */}
      <h3 className="text-[22px] font-bold leading-8 text-[#111827]">
        Order Summary
      </h3>

      {/* Plan Details Card */}
      <div className="relative w-full px-6 py-5 rounded-lg border border-[rgba(67,136,255,0.3)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        {/* Price & Plan Row */}
        <div className="flex flex-row items-center gap-7">
          {/* Price */}
          <div className="flex flex-col pb-1">
            <p className="text-[28px] font-bold text-[#111827] leading-tight">
              ₹4,999
              <span className="text-[16px] text-gray-500 font-normal">/month</span>
            </p>
          </div>

          {/* Plan Label */}
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-bold leading-4 tracking-[1.2px] uppercase text-[#1977F2]">
              Selected Plan
            </p>
            <p className="text-[18px] font-semibold text-[#111827] leading-5">
              Startup
            </p>
          </div>
        </div>

        {/* Credits Info */}
        <div className="mt-2">
          <p className="text-[13px] text-gray-500 leading-5">
            Includes 5,000 credits/mo.
          </p>
        </div>
      </div>

      {/* Upgrade Button */}
      <button className="w-full py-3 rounded-lg border border-[#1977F2] bg-white flex items-center justify-center gap-2 cursor-pointer hover:bg-[#f0f6ff] transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1977F2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="16 12 12 8 8 12" />
          <line x1="12" y1="16" x2="12" y2="8" />
        </svg>

        <span className="text-[14px] font-semibold text-[#1977F2]">
          Upgrade to Growth Plan
        </span>
      </button>
    </div>
  )
}
