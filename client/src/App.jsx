import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header'
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import {PrivateRoute,GetUserData} from "./components/privateRoute";
import CreateUserData from "./pages/createUserData";
import UserProducts from './pages/userProducts'
import Home from './pages/Home'


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path= '/create' element={< CreateUserData/>}/>
        </Route>
        <Route element={< GetUserData/>}>
          <Route path= '/userData' element={< UserProducts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

