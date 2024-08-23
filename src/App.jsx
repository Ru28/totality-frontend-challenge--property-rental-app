import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import { CartProvider } from './utils/CartContext';


function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Browse/>
    }
  ])
  return (
    <CartProvider>
      <RouterProvider router={appRouter}/>
    </CartProvider>
  )
}

export default App
