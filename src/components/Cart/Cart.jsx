import { useSelector } from "react-redux";

function Cart(){
    let cart = useSelector((state)=>{
        return state.items;
    })
    console.log(cart);
    return (
        <div>
        <ul>
            {Object.values(cart).map((item) => {
                return (
                    <li key={item.id}>
                        {item.title} - {item.quantity}
                    </li>
                );
            })    
            }
        </ul>
    </div>
    )
}
export default Cart;  
   