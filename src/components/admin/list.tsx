
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { dlPro, getPro } from "../../api/product";
const List = () => {
    const [product , setProduct]= useState([]);

    const show = async() => {
        try {
            const {data} = await getPro()
            setProduct(data)
        } catch (error) {
           console.log(error);
        }
    }


    useEffect(() => {
        show()
    },[])



    return (
     <>
                                  <h1>list</h1>
      <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            brand
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            price
                           
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                             desc
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            thao tác
                           
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  
                    {product.map((product) => {
                        return (
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name} </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.brand} </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price} </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.desc}  </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> <button onClick={()=>{if(window.confirm("ban co muon xoa khong")) 
                                                                                        {dlPro(product.id); 
                                                                                        window.location.reload()
                                                                                        }}}>Xoa</button></td>
                            
                           
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> <Link to={`/admin/update/${product.id}`}>edit</Link></td> 
                        </tr>
                        )
                    })}

                    <Link to={"add"}>ADD</Link>
                </tbody>
            </table>
        </div>
    </>
    )
    
}

export default List