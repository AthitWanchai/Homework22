import { useState } from 'react'
import React, { CSSProperties } from 'react';
import './App.css'

function App() {
  const [Weight, setWeight] = useState<number>(0);
  const [Water, setWater] = useState<number>(0);

  function myDarkmode(){
    let mode = document.body;
    mode.classList.toggle("darkmode");
  }


  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
    console.log(Weight)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const miliValue = Weight * 2.2 * 30 / 2;
    setWater(miliValue);
  }



  return (
    <>
      <form onSubmit={onSubmit} id='form'>
        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <h2>{Water} มล.</h2>
        <input type="number" id='weight' name='weight' onChange={onChangeWeight} placeholder='น้ำหนักของคุณ (กิโลกรัม)' />
        <div>
          <button type="submit" id='submit' >คำนวน</button>
        </div>
        <div>
          <button onClick={myDarkmode}>Dark</button>
        </div>
      </form>
    </>
  )
}

export default App
