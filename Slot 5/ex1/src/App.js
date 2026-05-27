import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPerson';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaList from './components/PizzaList';
import MyCarousel from './components/MyCarousel'; // thêm dòng này

function App() {
  return (
    <div>
      {/* <Hello />
      <ListPerson /> */}

      <MyCarousel />  {/* thêm dòng này */}
      <PizzaList />

      <Footer
        id="DE190405"
        name="ThangDX"
        email="doxuanthangqb2005@gmail.com"
        githubLink="https://github.com/doxuanthangqb2005-bot/FER202_SU26_ThangDX"
      />
    </div>
  );
}

export default App;