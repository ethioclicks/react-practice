import { useNavigate, useParams } from "react-router-dom"

export const Contact = () => {
    let navigate = useNavigate()
    let { id } = useParams()
  return (
    <div>
        <h1>Contact</h1>
        <button onClick={() => navigate('/about')}> go to About</button>
        <h2>Contact shown with an { id } </h2>
    </div>
  )
}
