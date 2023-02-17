import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './compoments/firebase-log/Signin'
import Signup from './compoments/firebase-log/Signup'
import HomePage from './compoments/pages/HomePage/Homepage.js'
import { AuthContextProvider } from './compoments/context/AuthContext';

function App() {
  return (
    <div className="App">
     
        <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
      </Routes>
      </AuthContextProvider>
   
    </div>
  );
}

export default App;
