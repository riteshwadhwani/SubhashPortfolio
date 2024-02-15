import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './hc_components_router/Home/Home.jsx'
import About from './hc_components_router/About/About.jsx'
import Contact from './hc_components_router/Contact/Contact.jsx'
import Github from './hc_components_router/Github/Github.jsx'

//  const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
//  ]
//  )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
