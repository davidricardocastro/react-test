import React from 'react';
import ReactDOM from 'react-dom';
import Product from './ProductComponent.js'

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nr_of_products: 6
        }        
    }

    setNrOfProducts(nr) {
            this.setState({
                nr_of_products: nr
            });
        }

    render() {
        let data = [
            { src: 'propulsion-gel.jpg', name: 'Propulsion gel' },
            { src: 'weight-cube.jpg', name: 'Weight cub' },
            { src: 'friendly-cube.jpg', name: 'A friend' },
            { src: 'portal-gun.jpg', name: 'Portal gun' },
            { src: 'defense-robot.jpg', name: 'Home-defense robot' },
            { src: 'cake.jpg', name: 'Cake (not a lie)' }
        ];

        this.products = [];

        for (let i in data) {

            let product = <Product key={data[i].src} imageSrc={data[i].src} name={data[i].name} />;

            this.products[i] = product;

            if(this.products.length >= this.state.nr_of_products) {break;}

        }

        return (
            <div className="product-list">

                <div className="counter">{this.state.nr_of_products} items were found</div>

                <div className="controls">
                    <button onClick={() => { this.setNrOfProducts(4) }}>Display 4 items</button>
                </div>

                <div className="controls">
                    <button onClick={() => { this.setNrOfProducts(6) }}>Display 6 items</button>
                </div>

                <div className="list">
                    {this.products}
                </div>
            </div>
        );
    }
}
