import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddFlat from './components/AddFlat.components';
import HeaderComponent from "./components/header.components";
import Dashboard from './components/pages/dashboardPage.components';
import LoginPage from './components/pages/loginPage.components';
import SignUpPage from './components/pages/signupPage.components';



function App() {
  const FlatDetails = [{
    flname:"Flora Enclave",
    RentDue: 2000
  },
    {
    flname:"Panchsheel",
    RentDue:4000
    },
    {
      flname:"Gaur Homes",
      RentDue:2000
  }
  ]
  return (
    <>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='SignUp' element={<SignUpPage />}></Route>
          <Route path='dashboard' element={<Dashboard FlatDetails={FlatDetails} />}></Route>
          <Route path='addflat' element={<AddFlat/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
