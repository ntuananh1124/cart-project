import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import './Cart.scss'
import { Remove, RemoveAll, Update } from "../../actions/cart";
// import { TabTitle } from "../../untils/TabTitle";

export default function Cart() {
    const navigate = useNavigate();
    let cart = useSelector(state => state.CartReducer);
    const inputRef = useRef();
    const dispatch = useDispatch();

    // Change Tab Title:
    // setInterval(() => {
    //     if (document.title === "Shop Online") {
    //         TabTitle(`Cart (${cart.length}) - Shop Online`);
    //     }
    //     else TabTitle("Shop Online");
    // }, 2000)

    const total = cart.reduce((sum, item) => {
        const finalPrice = item.quantity * item.price;
        return sum + finalPrice;
    }, 0)

    const handleBack = () => {
        navigate(-1);
    }

    const handleRemoveAll = () => {
        dispatch(RemoveAll());
    }

    const handleRemove = (id) => {
        dispatch(Remove(id));
    }

    return (
        <>
            <button className="navigate-btn" onClick={handleBack}>Trở lại</button>
            <div className="cart__top">
                <h2>Giỏ Hàng</h2>
                {cart.length > 0 && (
                    <button onClick={() => {
                        handleRemoveAll()
                    }}>Xóa tất cả</button>
                )}
            </div>
            <div className="cart__list"> 
                {cart.length > 0 ? (cart.map((item, index) => (
                <>
                    <div className="cart__list__item" key={index}>
                        <div className="cart__list__item__left">
                            <div className="cart__list__item__img">
                                <img src={item.thumbnail} alt="" />
                            </div>
                            <h3 className="cart__list__item__name">{item.title}</h3>
                        </div>
                        <div className="cart__list__item__right">
                            <div className="cart__list__item__quantity">
                                <span>Số lượng:</span>
                                <input type="number" id="quantity" name="quantity" min="1" ref={inputRef} onChange={(e) => {
                                    dispatch(Update(item.id,parseInt(e.target.value)))
                                }} defaultValue={item.quantity}/>
                            </div>
                            <span className="cart__list__item__price">Thành tiền: {item.price * item.quantity}$</span>
                            <button onClick={() => {
                                handleRemove(item.id)
                            }}>Xóa</button>
                        </div>
                    </div>
                </>))) : (
                    <>
                        <div>Chưa có sản phẩm nào trong giỏ</div>
                    </>
                )}
            </div>
            {cart.length > 0 && (
                <>
                    <div className="total">Tổng tiền: {total}$</div>
                </>
            )}
        </>
    )
}