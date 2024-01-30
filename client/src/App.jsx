import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header'
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

