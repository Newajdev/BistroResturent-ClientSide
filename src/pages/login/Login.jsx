import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../layout/Container";
import loginimag from "../../assets/others/authentication.gif"
import img from "../../assets/others/authentication.png"
import { useContext, useEffect,  useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";




const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)

    const from = location.state?.from?.pathname || "/"

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        reset()

        const Email = data.email;
        const Password = data.password
        loginUser(Email, Password)
            .then(() => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are successfully logedin",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, {replace: true})
            })
            .catch(error => {

                if (error.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `invalid Email and Password`,
                    });
                }

            })




    }


    useEffect(() => {

        loadCaptchaEnginge(4);
    }, [])

    const ChapthaVaildate = (e) => {
        if (validateCaptcha(e.target.value)) {
            setDisabled(false)
            loadCaptchaEnginge(1);
        }
    }

    return (
        <div style={{ backgroundImage: `url("${img}")` }} className="hero min-h-screen">
            <Container>
                <div className="hero-content flex w-full">
                    <div className="text-center lg:text-left ">
                        <img src={loginimag} alt="" />

                    </div>
                    <div className="card w-2/4">
                        <div className="card-body">
                            <h3 className="text-4xl font-bold text-center">Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                                <label className="label">Email</label>
                                <input {...register("email", { pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i })} type="email" className="input w-full" placeholder="Email" />
                                {errors.email && <span className="text-red-500 -mt-5">Please Enter A valid Email Address</span>}


                                <label className="label">Password</label>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/i })} type="password" className="input w-full" placeholder="Password" />
                                {errors.password?.type === 'required' && <span className="text-red-500 -mt-5">Enter your Password</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500 -mt-5">Your Password must have 6 Charecter</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500 -mt-5">Your Password will not more then 20 Charecter</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500 -mt-5">your password must follow the reqirment like one uppecase letter(A), one lowcase letter(a), on digit(1), one special character($)</span>}


                                <div>
                                    <div className="bg-none">
                                        <LoadCanvasTemplate />
                                    </div>
                                    <input type="text" onBlur={ChapthaVaildate} name="captha" className="input w-full" placeholder="Fill The upper Chaptha to Proved you are not a bot" />
                                </div>
                                <button disabled={disabled} className="btn bg-[#D1A054] disabled mt-4 text-xl font-bold text-white">Login</button>
                            </form>
                            <p className="text-[#D1A054]  text-center">New here? <Link className="font-semibold" to={'/register'}>Create a New Account</Link></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;