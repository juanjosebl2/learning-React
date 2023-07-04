import React, { useState } from 'react'
import '../App.css';

export const FormComponents = () => {

  const [user, setUser] = useState({});
  
  const getDatasForm = (e) => {
    e.preventDefault();

    const data = e.target;
    let user = {
      name: data.name.value,
      lastName: data['last-name'].value,
      genre: data.genre.value || '',
      bibliography: data.bibliography.value
    };
    console.log(user.genre);

    setUser(user);
  };

  const changeData = (e) => {
    let name_input = e.target.name;
    //let user_modify = user;

    //user_modify[name_input] = e.target.value;
    
    //... for keep datas before, change instant
    setUser(e_prev =>({
        ...e_prev,
        [name_input]: e.target.value
      })
    );

    
  };
  
  return (
    <div >
        <h1>Form Components</h1>
        <form onSubmit={getDatasForm}>
          <input name='name' type='text' placeholder='Name' onChange={changeData}/>
          <input name='last-name' type='text' placeholder='Last Name' />
          <select name='genre'>
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <textarea name='bibliography' placeholder='Bibliography' />
          <input type='submit' placeholder='Send' />
        </form>
        {
          user.name &&
          (
            <p>{JSON.stringify(user)}</p>
          )
        }
        
    </div>
  )
}
