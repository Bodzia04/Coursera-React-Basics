import {useState, useRef} from 'react';
import './App.css';

function App(){
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e){
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function mines(e){
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e){
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e){
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e){
    e.preventDefault();
    inputRef.current.value = 0;
  };
  
  function resetResult(e){
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return(
    <div className='App'>
      <div>
        <h1>Simple Working Calculator</h1> 
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input ref={inputRef} type='number' placeholder='Type a number'></input>
        <button onClick={plus}>plus</button>
        <button onClick={mines}>mines</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset resalt</button>
      </form>
    </div>
  )

}

export default App;
