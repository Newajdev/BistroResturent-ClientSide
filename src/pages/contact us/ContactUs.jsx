import CoverImg from "../../components/CoverImg";
import Contactus from '../../assets/contact/banner.jpg'
import SectionHeader from '../../components/SectionHeader'

const ContactUs = () => {
    return (
        <div>
            <CoverImg img={Contactus} title={'Contact Us'}></CoverImg>

            <div className="bg-[#F4F3F0] flex flex-col w-2/3 mx-auto justify-center items-center p-28">
                <SectionHeader Title={'Contact form'} subTitle={'Send us a Message'}></SectionHeader>

                {/* FORM START */}
                <form  className="w-full mt-8">
                    <div className="grid grid-cols-2 gap-6 justify-between">
                        <div className="">
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Name</h3>
                                <input name="name" type="text" placeholder="Enter coffee name" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Email</h3>
                                <input name="email" type="email" placeholder="Enter coffee supplier" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h3 className="text-[#1B1A1A] font-semibold text-xl">Phone</h3>
                            <input name="phone" type="text" placeholder="Your Phone number" className="focus:border-none border-none mt-3  input w-full" />
                        </div>
                        <div className="col-span-2">
                            <h3 className="text-[#1B1A1A] font-semibold text-xl">Message</h3>
                            <textarea name="message" type="text" placeholder="Enter photo URL" className="focus:border-none border-none mt-3  input w-full" />
                        </div>

                    </div>
                    <input type="submit" value="Send Message" className="btn border-2 border-[#331A15] bg-[#D2B48C] rounded-xl pt-2 pb-3  w-full mt-6 font-semibold" />
                </form>
                {/* FORM End */}

            </div>
        </div>
    );
};

export default ContactUs;