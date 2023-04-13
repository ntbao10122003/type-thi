import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SigninForm, signinSchema } from "../../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import { signin } from "../../../api/auth";
import { useLocalStorage } from "../../../hook";


const Signin = () => {
    const {register,handleSubmit,formState: { errors },} = useForm<SigninForm>({
        resolver: yupResolver(signinSchema),
      });
    
      const [user, setUser] = useLocalStorage("user", null);
    
      const navigate = useNavigate();
    
      const onSubmit = async (data: SigninForm) => {
        try {
          const {
            data: { accessToken, user },
          } = await signin(data);
          setUser({
            accessToken,
            ...user,
          });
          if(user.role ){
            console.log(data);
            navigate("/admin");
          }else{
            navigate("/home")
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
    <form action="" className="form"  onSubmit={handleSubmit(onSubmit)}>

        <input 
        {...register("email")}
        className="email" type="text" placeholder="email" />
        <label>email</label><br></br>
        <p className="text-xs text-red-500">
              {errors.email && errors.email.message}
        </p>

       
        <input
        {...register("password")}
        className="password" type="password" placeholder="password" />
        <label>password</label><br></br>
        <p className="text-xs text-red-500">
              {errors.password && errors.password.message}
        </p>
        

        <button className="dangky">đăng nhập</button>
       </form>

    )
}

export default Signin