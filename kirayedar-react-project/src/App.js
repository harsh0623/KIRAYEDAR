import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddFlat from './components/AddFlat.components';
import HeaderComponent from "./components/header.components";
import Dashboard from './components/pages/dashboardPage.components';
import LoginPage from './components/pages/loginPage.components';
import SignUpPage from './components/pages/signupPage.components';
import TransactionPage from './components/pages/transactionPage.components';



function App() {
  const FlatDetails = [{
    flname:"Flora Enclave",
    RentDue: 5000
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
  const Entries = [{
    flname: "Flora enclave",
    Address:"GangaPuram,Ghaziabad",
    contact: 8956743928,
    Rent: "10000",
    RentDue: 5000,
    Electricity_consume: 115,
    security: 10000,
    shift:"17-02-2022"
  }]
  const payments = [{
    date: "15-04-2022",
    name: "Harsh",
    amountPaid:7000
  },
    {
    date: "17-03-2022",
    name: "Harsh",
    amountPaid: 8000
  } ]
  return (
    <>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='SignUp' element={<SignUpPage />}></Route>
          <Route path='dashboard' element={<Dashboard FlatDetails={FlatDetails} />}></Route>
          <Route path='addflat' element={<AddFlat />}></Route>
          <Route path='transactions' element={<TransactionPage Payments={ payments} Entries={ Entries} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
