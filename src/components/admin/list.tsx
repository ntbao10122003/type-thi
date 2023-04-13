import { Link, useParams} from "react-router-dom";
import { getProducts } from "../../api/product";
import { useEffect, useState } from "react";
import { IProduct } from "../../models"
const List = (props) => {

    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    const removeProduct = (id: IProduct) => {
      setProducts(products.filter((item) => item.id !== id));
        props.onRemove(id);
      };

    useEffect(() => {
        fetchProducts();
      }, []);
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>tên sản phẩm</th>
                        <th>thuơgn hiệu</th>
                        <th>mô tả</th>
                        <th>giá khuyến mãi</th>
                        <th>xuất sứ</th>
                        <th>thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.origin}</td>
                            <td>
                            <div className="List">
                                <button onClick={() => {if(window.confirm("thầy có muốn ra đề khó không")) {removeProduct(product.id)}}} >xóa</button> <br /> <br></br>
                                
                                <Link to={`/admin/product/${product.id}`}>
                                <button>edit</button>
                                </Link>
                            </div>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <button >add</button>

            
           
        </div>
    )
    
}

export default List