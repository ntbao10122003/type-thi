import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getProductById, updateProduct   } from "../../api/product";
import { useParams, useNavigate } from "react-router-dom";
import { updateForm, updateSchema } from "../../models";


const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })
  
    const onSubmit = async (data: updateForm) => {
      try {
          if (id) {
              const response = await updateProduct(id, data)
              console.log(response);
              navigate('/admin')
          }
      }catch(err) {
          console.log(err);
      }
  }

  const fetchProductById = async (id: string) => {
    const {data} = await getProductById(id)
    return data
    
}
    return (
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>ADD PRODUCT</h1>
            <input 
            {...register("name")}
            className="name" type="text" placeholder="name" />
            <label>tên sp </label><br></br>
            <p className="text-xs text-red-500">
            {errors.name && errors.name.message}
            </p>



            <input
            {...register("brand")}
            className="thuonghieu" type="text" placeholder="thuong hiệu" />
            <label>tên thương hiệu </label><br></br>
            <p className="text-xs text-red-500">
            {errors.brand && errors.brand.message}
            </p>

            
        
            <textarea
            {...register("description")}
            className="mota" type="text" placeholder="mô tả" />
            <label>mô tả </label><br></br>
            <p className="text-xs text-red-500">
            {errors.description && errors.description.message}
            </p>
            

            
            <input
            {...register("price")}
            className="giá khuyến mãi" type="text" placeholder="giá khuyến mãi" />
            <label>giá khuyến mãi</label><br></br>
            <p className="text-xs text-red-500">
            {errors.price && errors.price.message}
            </p>

            
            <select name="" id="" >
                <option value="">vietnam</option>
                <option value="">trung quoc</option>
                <option value="">phap</option>

            </select>

            <button className="update">update</button>
       </form>

    )

 
}


export default Update