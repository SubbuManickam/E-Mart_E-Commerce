import React from "react";

        class Card extends React.Component {
            render() {
             console.log(this.props);
                return (
                    <div class="card">
                    <div class="card-header" style={{marginTop:"8%",background:"#54CAC2"}}>
                      {this.props.title}
                    </div>
                    <div class="card-body">
                      <p class="card-text">{this.props.infor}</p>
                      <a href="#" class="btn btn-primary">{this.props.apply}</a>
                    </div>
                  </div>
                );
            }
        }
export default Card
        
