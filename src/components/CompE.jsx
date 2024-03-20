import React, { useContext } from "react"
import { DataContext } from "../context/dataContex";



function CompE({}) {
  const {contextData, setContextData} = useContext(DataContext)

    return (
      <>
       <section id ="compE">
       <h1>&lt; Componente E &#47;&gt;</h1>
       <h3>Dato: {contextData}</h3>
       <button onClick={() => setContextData (contextData+1)}> Sumar  1 </button>
       </section>
      </>
    )
  }
  
  export default CompE;