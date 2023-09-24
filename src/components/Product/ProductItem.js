import { useDispatch, useSelector } from "react-redux";
import { Add } from "../../actions/cart";

export default function ProductItem({item}) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.CartReducer);

    const handleAddToCart = (id) => {
        if (cart.some(itemCart => itemCart.id === id)) {
            const index = cart.findIndex(itemCart => itemCart.id === id);
            cart[index].quantity++;
            console.log("Quantity after updated:" ,cart[index].quantity);
        }
        else {
            dispatch(Add(id, item));
        }
    }

    return (
        <>
            <div className="product__item" key={item.id}>
                <div className="product__img">
                    <img src={item.thumbnail} alt={item.thumbnail}/>
                    <span className="product__discount">-{Math.floor(item.discountPercentage)}%</span>
                </div>
                <div className="product__info">
                    <h2 className="product__name" title={item.title}>{item.title}</h2>
                    <span className="product__des">{item.description}</span>
                    <h3 className="product__price">${item.price}</h3>
                </div>
                <div className='product__action'>
                    <button className="product__action__add-to-cart" title="Add to Cart" onClick={() => {
                        handleAddToCart(item.id)
                    }}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}