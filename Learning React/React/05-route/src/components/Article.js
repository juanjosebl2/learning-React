import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Article = () => {

  /*const params = useParams();

  if(!params.lastname){
    params.lastname = "Barrera";
  }*/

  let {name, lastname = "Barrera"} = useParams();
  const browse = useNavigate();

  const send = (e) => {
    e.preventDefault();
    let newName = e.target.name.value;
    let url = `/article/${newName}`;

    

    if(name.length <= 0){
      url = `/article`;
      browse(url);
    } else {
      browse(url);
    }
  }

  return (
    <div>
        {
          !name && <h1>there is not any user</h1>
        }
        {
          name && <h1>Page article: {name} - {lastname} </h1>
        }

        <p>This is the page of article</p>
        <form onSubmit={send}>
          <input type='text' name='name' />
          <input type='submit' name='send' value='send' />
        </form>
        
    </div>
 )
}
