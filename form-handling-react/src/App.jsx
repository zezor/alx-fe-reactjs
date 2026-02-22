import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold mb-4">User Registration</h1>
        <FormikForm />
      </div>
      
    </>
  )
}

export default App
