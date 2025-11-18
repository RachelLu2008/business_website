import {useState} from 'react'// import viteLogo from '/vite.svg'
import './Cart.css'
function Cart() {
    function getItems(key: string): string[] {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) as string[] : [];
    }

    function clear()
    {
        localStorage.clear();
        setItems([])
    }

    function Delete(key: string){

        localStorage.removeItem(key)
        setItems([key])
    }

    function getTotal(){
        let total = 0;
        const storedArray = localStorage.getItem('product');
        let myArray = [];
        if(storedArray){
            myArray = JSON.parse(storedArray);
        }
        const arrayLength = myArray.length;
        for(let i=0; i<arrayLength; i++){
            total += 59.99;
        }
        return total;
    }


    const[items, setItems] = useState(getItems("product"))
    return (
        <>
            <div id = "cartTitle"><h1>Cart</h1></div>
            <div>
                {items.map((item, index) =>
                    <div id={"list"} key={index}>
                        <span>{item}</span>
                        <p>$59.99</p>
                        <button onClick={()=>Delete()}>Delete</button>

                    </div>
                )}
            </div>
            <div><button onClick={()=>clear()}>Clear</button></div>
            <div>
                <h1>
                    Total: ${getTotal()}
                </h1>
            </div>
        </>
    )
}

export default Cart;
