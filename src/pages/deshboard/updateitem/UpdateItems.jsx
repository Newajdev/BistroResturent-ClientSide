import { FaUtensils } from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


const API_KEY = import.meta.env.VITE_Image_Hosting_API
const Image_UPLOAD_API = `https://api.imgbb.com/1/upload?key=${API_KEY}`

const UpdateItems = () => {
    const {_id,name, recipe,image, category, price } = useLoaderData()
    
    
    const AxiosPublic = useAxiosPublic()
    const AxiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()
    
    const onSubmit = async (data) => {
        
        setLoading(true)

        const ImageFile = { image: data.image[0] }
        const name = data.name;
        const category = data.category;
        const price = parseFloat(data.price);
        const recipe = data.recipe


        const res = await AxiosPublic.post(Image_UPLOAD_API, ImageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


        if (res.data.success) {
            const image = res.data.data.display_url;
            const menuItem = {
                name, recipe, image, category, price
            }
           const menuRes = await AxiosSecure.patch(`/menu/update/${_id}`, menuItem)
           console.log(menuRes.data);
           
                    if (menuRes.data.matchedCount) {
                        setLoading(false)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Food is Updated Successfully`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        reset()
                        navigate('/deshboard/manageitems')
                    }
        }

    };
    return (
        <>

            <SectionHeader subTitle={"Want to?"} Title={"UPDATE ITEM"}></SectionHeader>
            <div className="bg-gray-100 rounded-2xl p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-full">

                    <div className="my-6">
                        <label className="fieldset-label">Recipe name*</label>
                        <input {...register("name", { required: true })} type="name" defaultValue={name} className="input w-full" placeholder="Type here" />
                        {errors?.name?.type === 'required' && <p className="text-red-600">Recipe name is required</p>}
                    </div>

                    <div className="flex gap-6 w-full my-6">
                        <div className="w-2/4">
                            <label className="fieldset-label">Category*</label>
                            <select id="category"  {...register("category", { required: "Select your Food Category" })} className="select w-full">
                                <option defaultValue={category}>{category}</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desert">Desert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {errors.category && <p className="text-red-600">{errors.category.message}</p>}
                        </div>
                        <div className="w-2/4">
                            <label className="fieldset-label">price</label>
                            <input {...register("price", { required: true })} defaultValue={price} name="price" type="text" className="input w-full" placeholder="Type here" />
                            {errors?.price?.type === 'required' && <p className="text-red-600">Recipe price is required</p>}

                        </div>
                    </div>
                    <div className="my-6">
                        <fieldset className="fieldset ">
                            <label className="fieldset-label text-base">Recipe Details*</label>
                            <textarea {...register("recipe", { required: true })} defaultValue={recipe} name="recipe" className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
                            {errors?.recipe?.type === 'required' && <p className="text-red-600 text-base">Please entr you recipe details so customer can no what it is</p>}
                        </fieldset>
                    </div>
                    <div className="my-6">
                        <p className="text-blue-700 mb-4"><a href={image} target="_blank">See Previus Image</a></p>
                        <input {...register("image",{ required: true })} name="image" type="file" className="file-input file-input-ghost" />
                        {errors?.image?.type === 'required' && <p className="text-red-600 text-base">Upload A new picture of your Food</p>}
                    </div>



                    <button className="btn bg-linear-to-l to-[#835D23] from-[#B58130] text-white">
                        {
                            loading ? <><span className="loading loading-bars loading-md"></span></>: <><input type="submit" value="update Items" />
                        <FaUtensils></FaUtensils></>
                        }
                        
                    </button>
                </form>
            </div>
        </>
    );
};

export default UpdateItems;