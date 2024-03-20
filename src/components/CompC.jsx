import React from "react"
import CompD from "./CompD";

function CompC({data}) {
 

    return (
      <>
       <section id ="compC">
       <h1>&lt; Componente C &#47;&gt;</h1>
       <CompD data={data}/>
       </section>
      </>
    )
  }
  
  export default CompC;
  