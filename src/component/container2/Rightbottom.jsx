import React, { useState } from 'react'

export default function Rightbottom() {
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20')

  return (
    <div className="w-full p-5 rounded-[10px] border border-gray-200 bg-white flex flex-col gap-4">
      {/* Wallet Balance Card */}
      <div className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f9fafb] flex items-center justify-between">
        {/* Left — Icon + Text */}
        <div className="flex items-center gap-3">
          {/* Wallet Icon */}
          <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
              <path d="M16 14h2" />
              <path d="M6 2h12l2 4H4l2-4z" />
            </svg>
          </div>

          {/* Wallet Text */}
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-[#111827]">
              Wallet Balance
            </span>
            <span className="text-[13px] text-gray-500">
              ₹500.00 available
            </span>
          </div>
        </div>

        {/* Apply Button */}
        <button className="px-5 py-1.5 rounded-md border border-[#1977F2] text-[#1977F2] text-[13px] font-semibold bg-white cursor-pointer hover:bg-[#f0f6ff] transition-colors duration-200">
          Apply
        </button>
      </div>

      {/* Apply Coupon Section */}
      <div className="w-full px-4 py-4 rounded-lg border border-gray-200 bg-white flex flex-col gap-4">
        {/* Coupon Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            <span className="text-[15px] font-semibold text-[#111827]">Apply Coupon</span>
          </div>

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>

        {/* Coupon Input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 px-4 py-2.5 rounded-md border border-gray-300 text-[13px] text-[#111827] placeholder-gray-400 outline-none focus:border-[#1977F2] transition-colors duration-200"
          />
          <button className="px-5 py-2.5 rounded-md border border-gray-300 text-[14px] font-semibold text-[#111827] bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            Apply
          </button>
        </div>

        {/* Coupon Option — WELCOME20 */}
        <label
          className={`w-full px-4 py-3 rounded-lg border-2 flex items-center justify-between cursor-pointer transition-colors duration-200 ${
            selectedCoupon === 'WELCOME20'
              ? 'border-[#1977F2] bg-[#f7faff]'
              : 'border-gray-200 bg-white'
          }`}
          onClick={() => setSelectedCoupon('WELCOME20')}
        >
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-[#111827]">WELCOME20</span>
            <span className="text-[12px] text-gray-500">20% off on your first month</span>
          </div>

          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedCoupon === 'WELCOME20'
                ? 'border-[#1977F2]'
                : 'border-gray-300'
            }`}
          >
            {selectedCoupon === 'WELCOME20' && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#1977F2]"></div>
            )}
          </div>
        </label>

        {/* Coupon Option — ANNUAL50 */}
        <label
          className={`w-full px-4 py-3 rounded-lg border-2 flex items-center justify-between cursor-pointer transition-colors duration-200 ${
            selectedCoupon === 'ANNUAL50'
              ? 'border-[#1977F2] bg-[#f7faff]'
              : 'border-gray-200 bg-white'
          }`}
          onClick={() => setSelectedCoupon('ANNUAL50')}
        >
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-[#111827]">ANNUAL50</span>
            <span className="text-[12px] text-gray-500">50% off on annual plans</span>
          </div>

          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedCoupon === 'ANNUAL50'
                ? 'border-[#1977F2]'
                : 'border-gray-300'
            }`}
          >
            {selectedCoupon === 'ANNUAL50' && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#1977F2]"></div>
            )}
          </div>
        </label>
      </div>

      {/* Price Breakdown */}
      <div className="w-full flex flex-col gap-2 px-1">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-[14px] text-gray-500">Subtotal</span>
          <span className="text-[14px] font-medium text-[#111827]">₹14,999.00</span>
        </div>

        {/* Tax */}
        <div className="flex items-center justify-between">
          <span className="text-[14px] text-gray-500">Tax (18% GST)</span>
          <span className="text-[14px] font-medium text-[#111827]">₹1,079.64</span>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 my-1" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-[16px] font-bold text-[#111827]">Total due today</span>
          <span className="text-[22px] font-bold text-[#1977F2]">16,078.64</span>
        </div>
      </div>

      {/* Proceed Button */}
      <button className="w-full py-3.5 rounded-lg bg-[#1977F2] text-white text-[15px] font-semibold cursor-pointer hover:bg-[#1565d8] transition-colors duration-200 shadow-[0_2px_8px_rgba(25,119,242,0.3)]">
        Proceed to Payment
      </button>
    </div>
  )
}
