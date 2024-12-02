import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import './App.css';
import Details, {loader as UserLoader } from './pages/Details';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import AllUsers, {loader as LoadUsers} from './pages/AllUsers';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element: <AllUsers/>, loader: LoadUsers},
      {path: 'create', element: <CreateUser/>},
      {
        path: 'details/:id', 
        element: <Details/>, 
        loader: UserLoader,
     },
     {path: 'details/:id/edit', element: <EditUser/>, loader: UserLoader},
      
    ]

  },
  
]
);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
