import { yupResolver } from "@hookform/resolvers/yup";
import { SignupForm, signupSchema } from "../../../models";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../api/auth";



const Signup = () => {
    const {register , handleSubmit , formState: {errors}} = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })

    const navigate = useNavigate();

    const onSubmit = async(data : SignupForm) => {
        try {
            const response = await signup(data)
            console.log(response);
            
            navigate('/signin')
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <>
                              <h1>signup</h1>
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            
                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            

                            <h1
                                className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                            >
                               Đăng Kí
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                                nam dolorum aliquam, quibusdam aperiam voluptatum.
                            </p>
                        </div>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>

                                <input
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    {...register('firstName')}
                                />
                                  <p className='text-red-600 text-[10px]'>
                                    {errors.firstName && errors.firstName.message}
                                </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>

                                <input
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    {...register('lastName')}
                                
                                />
                                  <p className='text-red-600 text-[10px]'>
                                    {errors.lastName && errors.lastName.message}
                                </p>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    {...register('email')}
                                />
                                  <p className='text-red-600 text-[10px]'>
                                    {errors.email && errors.email.message}
                                </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    {...register('password')}
                                />
                                  <p className='text-red-600 text-[10px]'>
                                    {errors.password && errors.password.message}
                                </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    {...register('confirmPassword')}
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </p>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and
                                        company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline">
                                        terms and conditions
                                    </a>
                                    and
                                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <a href="#" className="text-gray-700 underline">Log in</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
        </>
    )
}

export default Signup;