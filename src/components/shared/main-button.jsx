import React from 'react'
import { Button } from '../ui/button'

function MainButton({className,children,type}) {
  return (
    <Button
    type={type}
    className={`bg-primary text-[#FBFBFB] w-full py-2 rounded-[6px] text-base font-medium text-center ${className}`}
    >
        {children}
    </Button>
  )
}

export default MainButton