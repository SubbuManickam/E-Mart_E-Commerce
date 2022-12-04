import React from "react"
import Card from "./aboutcomp"
import {data} from "./values1"

function About(){
    return(
    
            <div style={{background:"#54CAC2"}}>
                <div style={{textAlign:"right"}}>
                <a href="./Home.js">Back to home page</a>
                </div>
            <h1>About Our Company:</h1>
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

export default About