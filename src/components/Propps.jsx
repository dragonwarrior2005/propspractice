import React from 'react'

function Propps(props){
    let input = document.getElementById("input")
   
    function click(){
        console.log("hello");
        
        
    }

    
    return(


        <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </>
      

    )

}

export default Propps