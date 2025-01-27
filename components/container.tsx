import React from 'react'

interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='container w-11/12'>
      {children}
    </div>
  )
}

export default Container
