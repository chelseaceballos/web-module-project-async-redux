
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Quote from './components/Quote';

// Step 1: create Redux store
function App() {
  return (
    <div >
      <NavBar/>
      <p>please view in iphone x mode</p>
      <Quote/>    
      <Footer/>
    </div>
  );
}

export default App;
