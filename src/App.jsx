import React from 'react'
import Frame from './component/container/Frame.jsx'
import Right from './component/container2/Right.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] py-6 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left — Billing Form */}
        <div className="lg:col-span-7">
          <Frame />
        </div>

        {/* Right — Order Summary */}
        <div className="lg:col-span-5">
          <Right />
        </div>
      </div>
    </div>
  )
}
