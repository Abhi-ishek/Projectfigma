import React from 'react'
import Container1 from './Container1.jsx'

export default function Margina() {
  return (
    <div className="w-full pt-4 grid grid-cols-2 gap-5 border-t border-gray-200">
      <Container1 text="First Name" value="Abhishek" />
      <Container1 text="Last Name" value="Prajapati" />

      <div className="col-span-2 flex items-center justify-end gap-3">
        <button className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          Cancel
        </button>

        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors duration-200">
          Save Details
        </button>
      </div>
    </div>
  )
}
