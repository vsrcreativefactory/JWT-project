import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "containers/HomePage";
import Dashboard from "containers/Dashboard";
import LoginPage from "containers/LoginPage";
import RegisterPage from "containers/RegisterPage";

import { store } from "store";

const App = () => (
  <Provider store = {store}>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />}  />
      <Route path='/dashboard' element={<Dashboard />}  />
      <Route path='/login' element={<LoginPage />}  />
      <Route path='/register' element={<RegisterPage />}  />
    </Routes>
  </Router>
  </Provider>
)

export default App;
