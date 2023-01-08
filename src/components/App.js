import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  //code here 
  const [active, setActive] = useState(true)
  
  function handleClick() {
    setActive(!active)
  }

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {/* assign value for button 1 */}
        {active ? 'OFF' : 'ON'}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {active ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}


export default App;
