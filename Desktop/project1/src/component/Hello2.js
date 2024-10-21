import { useState } from "react";


export default function Hello2(){
    const [name, setName] = useState("Mike"); 
    function changeName(){
      //  const newName = name ==="Mike" ? "Jane" : "Mike";

    }

    return(
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={()=>{
                setName(name ==="Mike" ? "Jane" : "Mike")
            }}>change</button>
            
        </div>
    );
}