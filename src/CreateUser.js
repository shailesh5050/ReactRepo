import React,{useState} from 'react';
function CreateUser(){
    const [name,setName] =useState("");
    const [age,setAge] =useState("");
    const [Address,setAddress] =useState("");
    let data ={name,age,Address}
    function makeUser(){
        console.log(data);
    }
    return(
        <div>
            <h1>From</h1>
            <input name="username" value={name}
             onChange={(e)=>(setName(e.target.value))} 
             />
            <br /><br />
            <input name="age" value={age}
            onChange={(e)=>(setAge(e.target.value))} 
            />
            <br /><br />
            <input name="address" value={Address} 
            onChange={(e)=>(setAddress(e.target.value))}
            />
            <br /><br />
            <button onClick={makeUser}>Click</button>
        </div>
    )
}
export default CreateUser;