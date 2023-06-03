import { useContext } from "react"
import { userContext } from "../context/createContext"

function Admin() {
  const {state} = useContext(userContext)
  return (
    <div>Admin {state}</div>
  )
}

export default Admin