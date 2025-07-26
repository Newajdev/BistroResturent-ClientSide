import { Link, useNavigate } from "react-router-dom";
import Container from "../../layout/Container";
import loginimag from "../../assets/others/authentication.gif"
import img from "../../assets/others/authentication.png"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Register = () => {
    const navigate = useNavigate()
    const AxiosSecure = useAxiosSecure()
    const { createUser, logOutUser, UpdateUser } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        reset()
        const Email = data.email;
        const Password = data.password
        const Name = data.name
        const ImageURL = data.photourl
        const userPosition = null

        const userDetalis = {Name, Email, userPosition, ImageURL}

        createUser(Email, Password)
            .then(() => {
                UpdateUser(Name, ImageURL)
                    .then(() => {
                        Swal.fire({
                            title: "Your Successfully Singup now login to continue",
                            showClass: {
                                popup: `
                                          animate__animated
                                          animate__fadeInUp
                                          animate__faster`
                            },
                            hideClass: {
                                popup: `
                                          animate__animated
                                          animate__fadeOutDown
                                          animate__faster`
                            }
                            });
                        
                        
                        AxiosSecure.post('/user', userDetalis)
                        .then((res)=>{
                            console.log(res.data);
                            
                            
                    
                        })
                        logOutUser()
                        navigate('/login')

                    })
                    .catch(error => {

                        if (error.message) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: `This ${error.message} is already used Try with another`,
                            });
                        }

                    })

            })
            .catch(error => {

                if (error.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `This ${Email} is already used Try with another`,
                    });
                }

            })



    }

    return (
        <div style={{ backgroundImage: `url("${img}")` }} className="hero min-h-screen">
            <Container>
                <div className="hero-content flex w-full lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        <img src={loginimag} alt="" />

                    </div>
                    <div className="card w-2/4">
                        <div className="card-body">
                            <h3 className="text-4xl font-bold text-center">Register</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                                <label className="label">Name</label>
                                <input {...register("name", { required: true, maxLength: 20 })} type="text" className="input w-full" placeholder="Email" />
                                {errors.name?.type === 'required' && <span className="text-red-500 -mt-5">Name is Required</span>}
                                {errors.name?.type === 'maxLength' && <span className="text-red-500 -mt-5">Plase white a shot from of your name we accept only 20 Charector for name</span>}

                                <label className="label">Photo Url</label>
                                <input {...register("photourl", { required: true })} type="url" className="input w-full" placeholder="Your Profile  Photo here" />
                                {errors.name?.type === 'required' && <span className="text-red-500 -mt-5">Photo URL is Required</span>}



                                <label className="label">Email</label>
                                <input {...register("email", { required: true, pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i })} type="email" className="input w-full" placeholder="Email" />
                                {errors.email?.type === 'required' && <span className="text-red-500 -mt-5">Email is Required</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-500 -mt-5">Please Enter A valid Email Address</span>}


                                <label className="label">Password</label>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/i })} type="password" className="input w-full" placeholder="Password" />
                                {errors.password?.type === 'required' && <span className="text-red-500 -mt-5">Enter your Password</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500 -mt-5">Your Password must have 6 Charecter</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500 -mt-5">Your Password will not more then 20 Charecter</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500 -mt-5">your password must follow the reqirment like one uppecase letter(A), one lowcase letter(a), on digit(1), one special character($)</span>}
                                <button className="btn bg-[#D1A054] mt-4 text-xl font-bold text-white">Login</button>
                            </form>
                            <p className="text-[#D1A054]  text-center">Already have an Account? <Link className="font-semibold" to={'/login'}>login</Link></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;