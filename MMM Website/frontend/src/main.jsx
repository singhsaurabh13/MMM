import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './component/Client/Register.jsx'
import Login from './component/Client/Login.jsx'
import Hero from './component/Client/Hero.jsx'
import Plans from './component/Client/Plans.jsx'
import Rules from './component/Client/Rules.jsx'
import ContactUs from './component/Client/ContactUs.jsx'
import Mmmglobal from './component/Client/Mmmglobal.jsx'
import Ideology from './component/Client/Ideology.jsx'
import News from './component/Client/News.jsx'
import Promotional from './component/Client/Promotional.jsx'
import Contactleader from './component/Client/Contactleader.jsx'
import Testimonial from './component/Client/Testimonial.jsx'
import Dashboard from './component/Client/Dashboard.jsx'
import Pouprequest from './component/Client/Popuprequest.jsx'
import Popupdeposite from './component/Client/Popupdeposite.jsx'
import Popup2 from './component/Client/Popup2.jsx'
import Gethelp from './component/Client/Gethelp.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Hero/>}/>
      <Route path='/plans' element={<Plans/>}/>
      <Route path='/rule' element={<Rules/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/mmmglobal' element={<Mmmglobal/>}/>
      <Route path='/ideology' element={<Ideology/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/promotion' element={<Promotional/>}/>
      <Route path='/contactleader' element={<Contactleader/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/popuprequest' element={<Pouprequest/>}/>
      <Route path='/popupdeposite' element={<Popupdeposite/>}/>
      <Route path='/popup2' element={<Popup2/>}/>
      <Route path='/gethelp' element={<Gethelp/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
