import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { addPro, getProId, udPro } from "../../api/product";
import { useForm } from "react-hook-form";
import { IProduct, addpro, updataform, updateSchema } from "../../models";
import {yupResolver} from "@hookform/resolvers/yup"


const Update = () => {
        const {register , handleSubmit , formState: {errors}} = useForm<updataform>({
            resolver: yupResolver(updateSchema)
        })
        const navigate = useNavigate();
        const add = async(data : addpro) => {
            try {
                const test : IProduct = {
                    name :data.name,
                    brand : data.brand,
                    desc : data.desc,
                    price : data.price
                }
                addPro(test)
                navigate('/admin')
            } catch (error) {
                console.log(error);
                
            }
        }
    return (
        <>
                                                    <h1>update</h1>
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4" onSubmit={handleSubmit(add)}>
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="brand">thuong_hieu</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="brand"
                                        type="text"
                                        id="brand"
                                        {...register("brand")}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="price">sale</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="price"
                                        type="number"
                                        id="price"
                                        {...register("price")}
                                    />
                                </div>
                            </div>



                            <div>
                                <label className="sr-only" htmlFor="origin">mo_ta</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="origin"
                                    id="desc"
                                    {...register("desc")}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                  add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}


export default Update