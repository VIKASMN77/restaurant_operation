import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Add from "./components/addrestuarant/Add";
import Restaurant from "./components/getrestuarant/Restuarant";
import EditRestaurant from "./components/updaterestuarant/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  const route=createBrowserRouter([
    {
      path:"/",
      element: <Restaurant/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <EditRestaurant/>,
    },
    
  ])
  
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>

    </div>
  )
}
export default App;