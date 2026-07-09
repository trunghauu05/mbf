import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./HomePage/homePage";
import { Header } from "./Layout/Header/header";
import { Login } from "./Auth/login";
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/login" ? null : <Header></Header>}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}
export default App;
