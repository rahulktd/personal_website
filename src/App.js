import './App.css';
import About from './components/About';
import Connect from './components/Connect';
import Content from './components/Content';
import Education from './components/Education';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (<>
    <Header/>
    <Content/>
    <About/>
    <Education/>
    <Projects/>
    <Connect/>
    </>
  );
}

export default App;
