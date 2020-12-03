import logo from './logo.png';
import './App.css';
import Footer from "./Footer";
import PostList from "./PostList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Code Instagram Clone
        </p>
      </header>
      <PostList/>
      <Footer/>
    </div>
  );
}

export default App;
