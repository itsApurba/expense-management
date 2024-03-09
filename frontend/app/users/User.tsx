import React from 'react'

const User = ({ user }: { user: any }) => {
  console.log(user)
  return (
    <div>{user.name}</div>
  )
}

export default User