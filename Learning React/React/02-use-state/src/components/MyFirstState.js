import React, {useState} from 'react';

export const MyFirstState = () => {
  
  const [ name, setName ] = useState("Juan");

  const changeName = (e, namePermanent) => {
    setName(namePermanent);
  }

  return (
    <div className='my-first-state'>
        <h3>MyFirstState</h3>
        <strong className='label'>
          {name}
        </strong>
        &nbsp;
        <button onClick={ e => changeName(e, "Jose") }>Change</button>
        &nbsp;
        <input type='text' placeholder='Put name' onKeyUp={e => changeName(e, e.target.value)}/>
    </div>
  )
}
