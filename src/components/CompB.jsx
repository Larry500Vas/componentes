import React, { useContext } from "react"
import CompC from "./CompC"
import { DataContext } from "../context/dataContex";


function CompB( {data}) {
  const {contextData} = useContext(DataContext)

    return (
      <>
       <section id ="compB">
       <h1>&lt; Componente B &#47;&gt;</h1>
       <CompC data={data}/>
       </section>
      </>
    )
  }
  
  export default CompB;
  