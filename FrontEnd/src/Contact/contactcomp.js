import React from "react";

        class Card extends React.Component {
            render() {
             console.log(this.props);
                return (
                <div class="card" style={{ marginTop: "8%"}}>
  <div class="card-header" >
    {this.props.main}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{this.props.first}</li>
    <li class="list-group-item">{this.props.second}</li>
    <li class="list-group-item">{this.props.third}</li>
  </ul>
</div>
                );
            }
        }
export default Card
        
