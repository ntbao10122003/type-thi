import UserLayout from "./components/user/userlayout"
import { BrowserRouter , Route , Router , Routes } from "react-router-dom"
import List from "./components/admin/list"
import Add from "./components/admin/add"
import Update from "./components/admin/update"
import Signin from "./components/admin/auth/signin"
import Signup from "./components/admin/auth/signup"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/" element={<UserLayout></UserLayout>}></Route>
          <Route path='/admin' element={<List></List>}></Route>
          <Route path='/admin/add' element={<Add></Add>}></Route>
          <Route path='/admin/update/:id' element={<Update></Update>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
