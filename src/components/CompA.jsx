import React from "react"
import CompB from "./CompB"


function CompA() {
 
  const dato = 28;
    return (
      <>
       <section id ="compA">
       <h1>&lt; Componente A &#47;&gt;</h1>
       
       <CompB data ={dato}/>
       </section>
      </>
    )
  }
  
  export default CompA;
  