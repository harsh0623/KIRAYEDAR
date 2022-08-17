import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from "./components/header.components";
import LoginPage from './components/pages/loginPage.components';
import SignUpPage from './components/pages/signupPage.components';



function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginPage />}></Route>
          <Route path='SignUp' element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
