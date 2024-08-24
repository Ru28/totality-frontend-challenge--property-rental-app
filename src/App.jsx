import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Browse from './components/Browse';
import Body from './components/Body';
import PropertyListForm from './components/PropertyListForm';
import { CartProvider } from './utils/CartContext';

function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element: <Body/>,
      children:[
        {
          path: "/",
          element: <Browse/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/propertyListForm",
          element: <PropertyListForm/>
        }
      ]
    }
  ])
  return (
    <CartProvider>
      <RouterProvider router={appRouter}/>
    </CartProvider>
  )
}

export default App
