import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from "./components/header.components";
import Dashboard from './components/pages/dashboardPage.components';
import LoginPage from './components/pages/loginPage.components';
import SignUpPage from './components/pages/signupPage.components';



function App() {
  return (
    <>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='SignUp' element={<SignUpPage />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
