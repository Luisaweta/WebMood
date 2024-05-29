import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import KontaktPage from "./pages/KontaktPage.jsx"
import OnasPage from "./pages/OnasPage.jsx"
import UslugiPage from "./pages/UslugiPage.jsx"
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([{
    path: "/",
    element: <App/>
},
{
    path: "/KontaktPage",
    element: <KontaktPage/>
},
{
    path: "/OnasPage",
    element: <OnasPage/>
},
{
    path: "/UslugiPage",
    element: <UslugiPage/>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
    
        <RouterProvider router={router} />
    
);
