import SectionHeader from "../../../components/SectionHeader";
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <>

            <SectionHeader subTitle={"What's new?"} Title={"ADD AN ITEM"}></SectionHeader>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex">
                    
                        <label className="fieldset-label">What is your name?</label>
                        <input type="text" className="input" placeholder="Type here" />

                    <input {...register("name")} />
                    <select {...register("catagorie")} defaultValue="Pick a color" className="select">
                        <option disabled>Categorie</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="desert">Desert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddItem;