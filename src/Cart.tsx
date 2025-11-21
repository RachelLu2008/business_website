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

    function Delete(index: number){
        const newItems = [];
        for(let i = 0; i < items.length; i++){
            if(i !== index){
                newItems.push(items[i]);
            }
        }
        setItems(newItems)
        localStorage.setItem("product", JSON.stringify(newItems));
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
            <div id ={"cartList"}>
                {items.map((item, index) =>
                    <div id={"list"} key={index}>
                            <span id ={"item"}>{item}</span>
                            <p>$59.99</p>
                            <div id={"deleteDiv"}>
                                <button className={"dandC"} id={"deleteBut"} onClick={() => Delete(index)}>Delete</button>
                            </div>
                    </div>
                )}
            </div>
            <div>
                <button className={"dandC"} id={"clear"} onClick={() => clear()}>Clear</button>
            </div>
            <div>
            <h1>
                    Total: ${getTotal()}
                </h1>
            </div>
        </>
    )
}

export default Cart;
