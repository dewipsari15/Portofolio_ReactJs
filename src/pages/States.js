import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function States() {
    const [Hitung, setHitung] = useState(0);
    const [Movie, setMovie] = useState("inang")
 const addHitung=() => {
    setHitung(Hitung +1);
 };

 const minHitung= () =>{
    setHitung(Hitung -1);
 };
 const changeMovie =() =>{
    setMovie("pengabdi setan");                                                                                                                          
 };
  return (
    <div>
        <h1>states :{Hitung} </h1>
        <Button onClick={addHitung} variant="primary">add</Button>
        <Button onClick={minHitung} variant="danger">min</Button>
        <br />
        <h1>Film :{Movie} </h1>
        <Button onClick={changeMovie} variant="success">change</Button>
    </div>
  )
};

export default States