import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { SignupForm, signupSchema } from "../../../models";
import { signup } from "../../../api/auth";


const Signup = () => {

    const {register,handleSubmit,formState: { errors },} = useForm<SignupForm>({
        resolver: yupResolver(signupSchema),
      });
    
      const navigate = useNavigate();
    
      const onSubmit = async (data: SignupForm) => {
        try {
          const response = await signup(data);
          console.log(response);
          navigate("/signin");
        } catch (error) {
          console.log(error);
        }
      };


    return (
       <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        
        <input
        {...register("name")}
        className="name" type="text" placeholder="name" />
        <label>name</label><br></br>
        <p className="text-xs text-red-500">
              {errors.name && errors.name.message}
        </p>


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

        <input
        {...register("confirmPassword")}
        className="confirm-password" type="password" placeholder="confirm-password" />
        <label>confirmPassword</label><br></br>
        <p className="text-xs text-red-500">
              {errors.confirmPassword && errors.confirmPassword.message}
        </p>

        <button className="dangky">đăng ký</button>
        <Link to={"/signin"}>
        <button className="dangky">đăng nhập</button>
        
        </Link>
       </form>

    )
}

export default Signup;