import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './ProductListComponent.js'

import Filter from './FilterComponent.js'




export default class App extends React.Component{
    
        render(){
            return(
                <div id="page">
                
                        <header>
                            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo" />
                
                            <div className="user">
                                <span>chell@aperture.sc</span>
                                <br />
                                <a href="#">logout</a>
                            </div>
                
                            <nav>
                                <a href="#">Home</a>
                                <a href="#" className="current">Products</a>
                                <a href="#">Stores</a>
                                <a href="#">Customers</a>
                            </nav>
                        </header>
                
                        <div id="main">
                            
                                <Filter />
                            
                
                            <div className="content">
                                <h1>Products</h1>
                
                                <ProductList />
                
                            </div>
                
                        </div>
                
                        <footer>
                            &copy; 2027 Aperture Laboratories
                        </footer>
                
                    </div>
            )
        }
    }