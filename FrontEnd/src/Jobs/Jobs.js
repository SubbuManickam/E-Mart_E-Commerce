import React from "react"
import Card from "./jobscomp"
import {data} from "./values3"

function Jobs(){
    return(
    
            <div style={{background:"#54CAC2"}}>
                <div style={{textAlign:"right"}}>
                <a href="./Home.js">Back to home page</a>
                </div>
            <h1>Welcome to our Jobs Portal!</h1>
            {
            data.map((item)=>{
                return(
                <Card {...item}></Card>
                )
            })
            }
            </div>
                )
}

export default Jobs