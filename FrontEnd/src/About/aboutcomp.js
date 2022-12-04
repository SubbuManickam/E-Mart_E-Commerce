import React from "react";

        class Card extends React.Component {
            render() {
             console.log(this.props);
                return (
                    <div class="card" style={{marginTop:"8%"}}>
  <div class="card-body">
    <h5 class="card-title">{this.props.title}</h5>
    
    <p class="card-text">{this.props.content}</p>
 
  </div>
</div>
                );
            }
        }
export default Card
        
