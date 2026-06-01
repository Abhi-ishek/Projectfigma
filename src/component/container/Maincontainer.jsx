import React from 'react'
import Container1 from './Container1.jsx'
import Horizontal from './Horijontal.jsx'

export default function Maincontainer() {
  return (
    <div className="w-full flex flex-col gap-6 pt-2 pb-6">
      {/* Page Title */}
      <div className="pb-2">
        <h1 className="text-[32px] font-semibold leading-10 text-gray-900">
          Review your details
        </h1>
      </div>

      {/* Billing Information Section */}
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Billing Information
          </h2>
        </div>

        {/* Form Grid */}
        <div className="w-full grid grid-cols-2 gap-5">
          <Container1 text="Company Name" value="Abhishek" />
          <Container1 text="Email" value="worktoabhishek@gmail.com" />
          <Container1 text="GST Number (Optional)" value="GST Number" />
          <Container1 text="PAN Number (Optional)" value="PAN Number" />
          <Container1 text="Premise/House no." value="Premise/House no." />
          <Container1 text="Street" value="Street" />
          <Container1 text="State" value="Select state" type="select" />
          <Container1 text="City" value="Select city" type="select" />
          <Container1 text="Country" value="India" />
          <Container1 text="Pin Code" value="Pincode" />
        </div>

        {/* Divider + Action Buttons */}
        <Horizontal />
      </div>
    </div>
  )
}
