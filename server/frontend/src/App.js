import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Register from './components/Register/Register';
import Dealer from './components/Dealers/Dealer';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      {/* New dealers route*/}
      <Route path="/dealers" element={<Dealers />} />
      {/* New register route*/}
      <Route path="/register" element={<Register />} />
      {/* New Dealer review route*/}
      <Route path="/dealer/:id" element={<Dealer />} />
    </Routes>
  );
}
export default App;
