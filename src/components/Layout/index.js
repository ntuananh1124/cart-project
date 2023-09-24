// import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import './Layout.scss';
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const cart = useSelector(state => state.CartReducer);
    return (
        <>
            <div className="layout">
                <header className="layout__header">
                    <div className="layout__header__img">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="layout__header__cart">
                        <Link to="/cart">Giỏ Hàng ({cart.length})</Link>
                    </div>
                </header>
                <main className="layout__main">
                    <div className="layout__main__content">
                        <Outlet/>
                    </div>
                </main>
                <footer className="layout__footer">
                    <div>THIS IS FOOTER</div>
                </footer>
            </div>
        </>
    )
}