import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
function App() {
  return (
    <div className="App">
      <header>
       <NavBar/>
      </header>
      <body>
        <Recipe/>
      </body>

      <footer><Footer/></footer>
    </div>
  );
}

export default App;
