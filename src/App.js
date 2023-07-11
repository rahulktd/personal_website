import './App.css';
import About from './components/About';
import Connect from './components/Connect';
import Content from './components/Content';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (<>
    <Header/>
    <Content/>
    <br/>
    <About/>
    <br />
    <Education/>
    <br />
    <Projects/>
    <br />
    <Connect/>
    <br/>
    <Footer/>
    </>
  );
}

export default App;
