import { useState, useEffect } from "react";
import './Product.scss';
import ProductItem from "./ProductItem";

export default function Product() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products') 
            .then(res => res.json())
            .then(data => {
                setProductData(data);
            })
    }, []);

    return (
        <>
            <div className="product__list">
                {productData.length > 0 && productData.map((item) =>
                    <>
                        <ProductItem item={item} />
                    </>
                )}
            </div>
        </>
    )
}