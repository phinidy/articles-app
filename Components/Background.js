import React from 'react'
import Image from 'next/image'
import bgImage from '/public/bg pic.jpg'

export default function Background() {
  return (
    <Image
    src={bgImage}
    placeholder='blur'
    fill
    sizes='100vw'
    style={{
        objectFit: 'cover',
        zIndex: -1
    }}
     />
  )
}
