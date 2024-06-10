import React from 'react'
import Header from '@/Components/Header'
import { useSession, signIn, signOut } from "next-auth/react"



export default function Admin() {
  const {data: session } = useSession()

  if(session){
  return (
    <>
      <Header />
      <div className='text-white'>
       Signed in as {session.user.name}<br/>
       <button className='bg-white text-black rounded-md px-2 py-1' onClick={() => signOut()}>Sign out</button>
      </div>
      </>
  )
      }
      return(
        <>
        <Header />
      <div className='flex justify-center mt-36'>
        <button onClick={() => signIn('google')} className='bg-white rounded-md px-2 py-1'>Login with Googel</button>
      </div>
      </>
        

  )
}
