import React from 'react';
import ReactDOM from 'react-dom';





export default class Product extends React.Component{


    constructor(props){
        super(props); //call the constructor of React.Component
        
    }

    render(){

        let image_path = `https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/`;
        let src = image_path + this.props.imageSrc;

        return (
            <div className="product">
                <img src={ src } alt="" />
                <div className="name">{this.props.name}</div>
            </div>
        );
    }
} 