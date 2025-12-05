import React from 'react'

const name ='John';
const x=20;
const y=10;
const names=['vite','react','tailwindcss'];
const App = () => {
  const loggendIn = false;
  return (
    <>
    <div className='text-5xl'>App</div>
    <p style={{color : 'red'}}>HEllo {name}</p>
    <p> the sum of {x} and {y} is {x+y}</p>
    <ul>
      {names.map((name,index)=>(
        <li key={index}>{name}</li>
      ))}
    </ul>
    {/* /* use ternary operators for if statements or use &&*/}
    { loggendIn ? <p>Welcome back user</p> : <p>Please log in</p> }
    </>
  )
}

export default App;