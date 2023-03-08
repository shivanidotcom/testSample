import React, { createContext, useReducer } from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/SignUp'
import Logout from './components/Logout'
import { initialState ,reducer} from './components/reducer/UserReducer';
import Quiz from './components/Quiz'

export const UserContext=createContext();
  const Routing=()=>{
    return (
      
      <Routes>  
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/quiz" element={<Quiz />} />
      </Routes>

    )
  }
const App= ()=> {
  const [state,dispatch]=useReducer(reducer,initialState)
   
  return (
   
    <>
     <UserContext.Provider value={{state,dispatch}}>
 
     <Navbar/>
      <Routing/>
     

     </UserContext.Provider>
     
        
  </>
  )
}

export default App;
