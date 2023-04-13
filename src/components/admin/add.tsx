import React from "react";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {updateForm, updateSchema} from "../../models"
import { Navigate } from "react-router-dom";

const Add = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema)
    })


    const onSubmit = (data) => {
        console.log(data);
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

        <button className="add">add</button>
       </form>

    )
}


export default Add