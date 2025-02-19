import {useNavigate} from 'react-router-dom'
import './App.css'

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div>
        
      <h1>Welcome to My Page</h1>
      <button onClick={() => navigate("/users")}>Users</button>
      
      </div>
    </>
  )
}

export default App
