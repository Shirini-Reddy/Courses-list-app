import React from 'react';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Coursedata from './Components/Coursedata';
import EnquiryForm from './Components/EnquiryForm';
import Userinfo from './Components/userinfo';
function App() {
  return (
   
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Coursedata/>}/>
      <Route path='/enquire' element={<EnquiryForm/>}/>
       <Route path='/usersinfo' element={<Userinfo/>}/>
    </Routes>   
    </BrowserRouter>
  );
}

export default App;
