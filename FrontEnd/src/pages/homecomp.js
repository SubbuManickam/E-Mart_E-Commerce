import React from "react";

        class Card extends React.Component {
            render() {
             console.log(this.props);
                return (
                    <div class="card">
  <h5 class="card-header"  style={{marginTop:"8%",background:" #EA738DFF"}}>{this.props.side}</h5>
  <div class="card-body">
    
    <p class="card-text">{this.props.info}</p>
    <a href="#" class="btn btn-primary">{this.props.where}</a>
    
  </div>
</div>
                );
            }
        }
export default Card
        
