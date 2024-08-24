import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import Header from './components/Header';


function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Browse/>
    }
  ])
  return (
    <>
      <Header/>
      <RouterProvider router={appRouter}/>
    </>
    
  )
}

export default App
