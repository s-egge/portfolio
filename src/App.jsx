import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import './index.css'

function App() {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300"></link>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <div className="footer">
          <svg onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            {/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/>
          </svg>
        </div>
      </main>
    </>
  );
}

export default App;
