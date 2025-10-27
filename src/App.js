import React from 'react';
import './App.css';
import Header from './components/Header';
import ServerStatus from './components/ServerStatus';
import About from './components/About';
import Rules from './components/Rules';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Container>
          <h1 className="text-center my-4">Welcome to feathersmp</h1>
        </Container>
        <ServerStatus />
        <About />
        <Rules />
      </div>
      <Footer />
    </div>
  );
}

export default App;