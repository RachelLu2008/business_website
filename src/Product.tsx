// import { useState } from 'react'
// import reactLogo from './react.svg'
// import viteLogo from '/vite.svg'
import './Product.css'
import logo from '/product1.png'
import logo1 from '/product2.png'
// import {useState} from "react";

function Product(){
    function getProducts() {
        if(localStorage.getItem("product") != null){
            return JSON.parse(localStorage.getItem('product') as string) as string[]
        } else {
            return [];
        }
    }
    function addToCart(item: string) {
        const arr = getProducts();
        arr.push(item);
        localStorage.setItem("product", JSON.stringify(arr));
    }
    return (
        <>
            <div id={"productTitle"}><h1>Products</h1></div>
            <div id={"words"}><h2>StellarHorizon allows for space exploration to be accessible and affordable. We
                believe astronomy shouldn’t just be limited to prestigious physicists, but also to amateurs in their own
                backyard. We combine our physical products with augmented reality to make our products and your
                experience truly unique and exciting.</h2></div>

            <div id={"products"}>
                <div id={"product1"}>
                    <img id="ExploreKitImage" src={logo} height="350" width="250" alt={"Kit"}></img>
                    <p>StellarHorizon Orbit+ Companion</p>
                    <p>$59.99</p>
                        <button className={"add"} onClick={()=>addToCart("StellarHorizon Orbit+Companion")}>Add To Cart</button>
                </div>

                <div id={"product2"}>
                    <img id="OrbitImage" src={logo1} height="350" width="250" alt={"orbit"}></img>
                    <p>StellarHorizon Explorer Kit</p>
                    <p>$59.99</p>
                        <button className={"add"} onClick={()=>addToCart("StellarHorizon Explorer Kit")}>Add To Cart</button>
                </div>
            </div>

        </>
    )
}

export default Product
