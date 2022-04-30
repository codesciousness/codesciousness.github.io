import './App.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App__main">
        <Header />
        <Main />
        <Footer />
      </main>
    </div>
  );
}