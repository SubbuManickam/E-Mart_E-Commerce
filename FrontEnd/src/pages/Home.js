import React from "react"
import Card from "./homecomp"
import {data} from"./values2"

function Home(){
    return(
<div style={{background:" #EA738DFF"}}>
    <div  style={{textAlign:"right",background:" #EA738DFF"}}>
<a href="./Contact.js">Contact Us|</a>
<a href="./About.js">About|</a>
<a href="./Jobs.js">Jobs</a>
</div>
<h1>Home Page!</h1>
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

export default Home