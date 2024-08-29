import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "containers/HomePage";
import Dashboard from "containers/Dashboard";
import LoginPage from "containers/LoginPage";
import RegisterPage from "containers/RegisterPage";


const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />}  />
      <Route path='/dashboard' element={<Dashboard />}  />
      <Route path='/login' element={<LoginPage />}  />
      <Route path='/register' element={<RegisterPage />}  />
    </Routes>
  </Router>
)

export default App;
