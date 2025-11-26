import Cont from "./comp/Body";
import NavBar from "./comp/Navbar";
import Footer from "./comp/Footer";
import './App.css'

function App() {
  return (
    <div className="layout">
    <NavBar/>
    
    <main className="content">
     <Cont/>
    </main>
 
      <Footer/>
    </div>
    
  );
}

export default App;
