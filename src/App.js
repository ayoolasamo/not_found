import './App.css';
import Maincontent from './components/maincontent';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Maincontent/>
      <Footer/>
    </div>
  );
}

export default App;
