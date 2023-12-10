import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import  Home from './Components/Home/Home';

function App() {

  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        }
        ]
    }
  ])

  return (
    <div >
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
