import React from 'react'
import Maincontainer from './Maincontainer.jsx'
import Link from './Link.jsx'

export default function Frame() {
  return (
    <div className="w-full rounded-[10px] bg-white px-6 py-2 flex flex-col">
      <Link />
      <Maincontainer />
    </div>
  )
}
