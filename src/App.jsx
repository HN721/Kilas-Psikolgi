import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Page/Home'
import Pendahuluan from './Page/Pendahuluan'
import Tokoh from './Page/Tokoh'
import Login from './Page/Login'
import tokohPsikologi from './api/tokoh.js'
import Detail from './Component/Detail.jsx'

const dataDummy=[{
  nama:'Hosea',
  email:'hosea1422@gmail.com',
  password:'12345',
  role:'student'
}]
export default function App() {
  const [isLogin ,setIsLogin] = useState(dataDummy[0].role)
  console.log(isLogin);
  return (
    <>
   {isLogin === 'student'? (<div className=' bg-primary w-full'>
   <Navbar/>
   <Home/>
   <Pendahuluan/>
   <Tokoh Tokoh={tokohPsikologi}/>
   </div> ) : isLogin === 'admin' ? (<Detail/>) : (console.log("login dulu")) }
    </>
  )
}
