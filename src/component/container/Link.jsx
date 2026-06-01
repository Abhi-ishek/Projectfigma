import React from 'react'
import { ArrowLeft } from 'lucide-react'

export default function Link() {
  return (
    <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] py-4 cursor-pointer transition-colors duration-200">
      <ArrowLeft size={16} />
      <span className="text-sm font-medium">
        Back to plans
      </span>
    </button>
  )
}
