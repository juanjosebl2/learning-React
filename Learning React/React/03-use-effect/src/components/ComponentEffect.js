import React, { useEffect, useState } from 'react'
import { MessageComponent } from './MessageComponent';

export const ComponentEffect = () => {
  
  const [user, setUser] = useState("Juan");
  const [cont, setCont] = useState(0);

  const changeName = e => {
    setUser(e.target.value);
    if(e.target.value === ''){
      setUser("JUAN");
    }
    
  };

  //All change in events, use useEffect, with finish ", []);" only one execute
  //When use [user], use useEffect when change user,
  useEffect(() => {
    console.log('Name change');
    setCont((prevCont) => prevCont + 1);
  }, [user]);

  return (
    <div>
      <h1>component Effect</h1>
      <strong>Name: {user}</strong>
      <hr/>
      <p>
        <input onChange={changeName} type='text' placeholder='Enter name'/>
      </p>
      <hr/>
      <strong>Cont: {cont}</strong>
      { cont > 5 && <MessageComponent/> }
    </div>
  )
}
