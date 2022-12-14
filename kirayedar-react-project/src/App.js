import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from "./components/header.components";
import Dashboard from './components/pages/dashboardPage.components';
import LoginPage from './components/pages/loginPage.components';
import SignUpPage from './components/pages/signupPage.components';
import TransactionPage from './components/pages/transactionPage.components';



function App() {
  let [ FlatDetails, addFlat ] = useState([{
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
  ])
  const addFlatFromForm=(Flat)=>{
    addFlat([...FlatDetails,Flat])
  }
  const Entries = [{
    flname: "Flora enclave",
    Address:"GangaPuram,Ghaziabad",
    contact: 8956743928,
    Rent: "10000",
    RentDue: 5000,
    Electricity_consume: 115,
    security: 10000,
    shift:"17-02-2022"
  },
    {
      flname:"Flora Enclave",
      Electricity_consume: 100,
    Rent:10000
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
    }]
  
  return (
    <>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='SignUp' element={<SignUpPage />}></Route>
          <Route path='dashboard' element={<Dashboard addFlatToTable={ addFlatFromForm } FlatDetails={FlatDetails} />}></Route>
          <Route path='transactions/:FlatId' element={<TransactionPage Payments={ payments} Entries={ Entries} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
