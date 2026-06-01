import React from 'react'
import Righttop from './Righttop.jsx'
import Rightbottom from './Rightbottom.jsx'

export default function Right() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Righttop />
      <Rightbottom />
    </div>
  )
}
