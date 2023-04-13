import { useState, useEffect } from "react";
import React from "react";
import { getProducts } from "../../api/product";
import { IProduct } from "../../models";



const Product = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchProducts();
    }, []);



    return (
        <div className="box-product">
            <div className="main">
                {products.map((product) => {
                    return(
                        <div className="Product">
                            <img src="" alt="" />
                            <h1>{product.name}</h1>
                            <p>{product.brand}</p>
                            <textarea name="" id="" cols="30" rows="10">mo ta </textarea> <br></br>
                            <s>giá khuyến mãi : {product.price}</s>
                            <div className="suatxu">
                                <select name="" id="">
                                    <option value="">vietnam</option>
                                    <option value="">trungquoc</option>
                                    <option value="">pháp</option>
                                </select>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
}

export default Product ;