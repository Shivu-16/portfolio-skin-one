import './App.css';
import {gsap, Power3} from 'gsap';
import Main from './Components/Main';
import Magnet from './Components/Magnet'

function App() {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  return (
    <>
    <Main timeline = {tl} ease= {ease}/>
    <Magnet/>
    </>
  );
}

export default App;
