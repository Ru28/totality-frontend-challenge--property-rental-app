import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Browse from './components/Browse';
import Body from './components/Body';
import PropertyListForm from './components/PropertyListForm';
import BookingCart from './components/BookingCart';
import { BookingProvider } from './utils/BookingContext';
import CheckoutForm from './components/CheckoutForm';

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
        },
        {
          path: "/cart",
          element: <BookingCart/>
        },
        {
          path: "/checkout",
          element: <CheckoutForm/>
        }
      ]
    }
  ])
  return (
    <BookingProvider>
        <RouterProvider router={appRouter}/>
    </BookingProvider>
  )
}

export default App
