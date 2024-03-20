import React from "react"
import CompE from "./CompE";




function CompD({data}) {
 

    return (
      <>
       <section id ="compD">
       <h1>&lt; Componente D &#47;&gt;</h1>
       <CompE data={data}/>
       </section>
      </>
    )
  }
  
  export default CompD;