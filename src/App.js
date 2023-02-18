import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './compoments/firebase-log/Signin'
import Signup from './compoments/firebase-log/Signup'
import HomePage from './compoments/pages/HomePage/Homepage.js'
import { AuthContextProvider } from './compoments/context/AuthContext';
// import ProtectedRoute from './compoments/ProtectedRoute';

function App() {
  return (
    <div className="App">
     
        <AuthContextProvider>
      <Routes>
        {/* <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route> */}
        {/* <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>}></Route> */}
        <Route path='/' element={<HomePage/>}></Route>

      </Routes>
      </AuthContextProvider>
   
    </div>
  );
}

export default App;
