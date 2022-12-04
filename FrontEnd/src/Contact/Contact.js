import React from "react"
import Card from "./contactcomp"
import {data} from "./value"

function Contact(){
    return(
<div style={{background:"#8A307F"}}>
<div style={{textAlign:"right"}}>
    <a href="./Home.js" >Back to home page</a>
    </div>
<h1 >Contact Us:</h1>
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

export default Contact