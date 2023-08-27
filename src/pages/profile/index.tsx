import { useSession } from 'next-auth/react'
import React from 'react'

const ProfilePage = () => {
    const {data}:any = useSession()
  return (
    <div>
        <p className='text-2xl'>Full name : {data?.user.fullname}</p>
    </div>
  )
}

export default ProfilePage