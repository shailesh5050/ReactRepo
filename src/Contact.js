import React,{useEffect,useState} from 'react';

function Contact(){
    
    const [name,setName]= useState("Shailesh")
    return(
        <div>
            <h1>Hello From Contact</h1>
            <h2>{name}</h2>
            <button onClick={()=>setName("Shailesh Kumar")}>Update name</button>
        </div>
    )
}
export default Contact;