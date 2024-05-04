import {  useParams } from "react-router-dom"
import { useEffect } from "react"
function User() {
  useEffect(()=>{
    document.title = "User"
  })
    const {userid} = useParams()
  return (
    <div className="bg-gray-700 py-2 text-center text-2xl text-white font-bold shadow shadow-black rounded mt-4">
      User:{userid}
    </div>
  )
}

export default User
