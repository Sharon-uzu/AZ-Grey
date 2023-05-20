import { useContext } from "react"
import { AppContext } from "../Context/AppContext"




const Basket = () => {
    
    const {
        cart,
        isCart,
        setIsCart,
        getTotalCartItems,
        removeItems,
        addItems,
        cartItems,
    } = useContext(AppContext)
    
   


    const closeCart = () => {
        return setIsCart(!isCart)
    }

console.log(cart)
    const totalAmount = getTotalCartItems()
    return (
        <>
            <div className="w-full h-full  fixed right-0  flex justify-end z-50" style={{ backgroundColor: "hsl(0, 0%, 0%, .4)", zIndex: "4" }}>
                <   div className="bg-white w-2/5 pb-32 overflow-y-auto ">
                    <div className="w-11/12 m-auto ">
                        <button className="sticky top-0 -m-5 border-solid border-2 border-slate-300 px-1 h-6 " onClick={closeCart}>X</button>

                        {cart.length === 0 ?
                         (<div>You have not added any items</div>): (

                            <>
                            {cart.map((item) => {
                                const cartItemsId = cartItems[item.id]
                                
                                return(                              
                                < div key={item.id}>
                                    <div className="flex h-1/4 items-center justify-between mt-8 px-4 border-2 rounded-lg p-4 border-solid border-gray-300">
                                        <div className="w-4/12 h-full">
                                            <img src={item.img} alt="" />
                                            <h2 className="">{item.title}</h2>
                                        </div>
                                        <div className="w-2/12 h-2/4 flex justify-between">
                                            <button className="cursor-pointer" onClick={() => removeItems(item.id)} >-</button>
                                            <input type="text"
                                             value={Number(cartItemsId > 0 ? cartItemsId : "1")} 
                                             className="w-4 outline-none m-2"
                                             />
                                            <button className="cursor-pointer" onClick={() => addItems(item.id)}>+</button>
                                        </div>
                                        <p className="w-4/12 text-center">&#x20A6;{cartItemsId === 0 ? item.price : cartItemsId * item.price}</p>
                                    </div>
                                </div>
                            )})}
                            <h2>&#x20A6;{totalAmount > 0 && totalAmount}</h2>
                            
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket