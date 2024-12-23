import React from "react";
import './App.css';
import ReactPlayer from 'react-player';
import soundNumb from './assets/sounds/Linkin Park – Numb.mp3';
import soundEye from './assets/sounds/Survivor – Eye of the Tiger.mp3';

function App(){
  const sound1 = new Audio(soundNumb);
  const sound2 = new Audio(soundEye);

  function toggle1(){
    if(sound1.paused){
      sound1.play();
    } else {
      sound1.pause()
    }
  }

  function toggle2(){
    if(sound2.paused){
      sound2.play();
    } else {
      sound2.pause()
    }
  }

  return(
    <div>
      <button onClick={toggle1}>Sound 1</button>
      <button onClick={toggle2}>Sound 2</button>
    </div>
  )
}
export default App;
