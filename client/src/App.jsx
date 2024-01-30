import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header'
import Signin from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

