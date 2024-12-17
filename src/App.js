import './App.css';
import Heading from './Heading'

// function Heading(){
//   return <h1>This is h1 heading</h1>
// }
function App() {
  return (
    <div className = 'App'>
      <Heading firstName = 'Bob' />
      <Heading firstName = 'Betty' />
    </div>
  )
}

export default App;
