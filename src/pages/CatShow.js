import React from 'react';
import cats from "../cats";
import App from '../App.js';


const CatShow = (props) => {
        const cardWidth = {"max-width": "400px"}
        const { id } = props.match.params
        const cat = cats.find((cat) => cat.id === parseInt(id))
        return (
            <div className="col d-flex justify-content-center">

                <div class="card border-primary mb-3 text-center" style={cardWidth} >
                    <div class="card-header text-left">Age: {cat.age}, {cat.city}</div>
                        <div class="card-body">
                        <img src={cat.photo} width="300px" />
                            <h4 class="card-title"> {cat.name}</h4>
                            <p class="card-text text-left">{cat.bio}</p>
                        </div>
                </div>

            </div>
        )


}

export default CatShow;
