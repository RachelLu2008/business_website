import {useState} from 'react'// import viteLogo from '/vite.svg'
import './Cart.css'
function Cart() {
    function getItems(key: string): string[] {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) as string[] : [];
    }

    const[items] = useState(getItems("product"))
    return (
        <>
            <div id = "cartTitle"><h1>Cart</h1></div>
            <div>
                {items.map((item, index) =>
                    <div id={"list"} key={index}>
                        <span>{item}</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart;
