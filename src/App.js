import './App.css';
import { BrowserRouter,Navigate,Routes,Route } from 'react-router-dom';
import Homepage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/profile/:userId" element={<LoginPage/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
