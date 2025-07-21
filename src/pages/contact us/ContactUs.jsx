import CoverImg from "../../components/CoverImg";
import Contactus from '../../assets/contact/banner.jpg'
import SectionHeader from '../../components/SectionHeader'
import Container from "../../layout/Container";

const ContactUs = () => {
    return (
        <div>
            <CoverImg img={Contactus} title={'Contact Us'}></CoverImg>

            <div className="my-24">
                <Container>
                    <SectionHeader Title={'OUR LOCATION'} subTitle={'Visit Us'}></SectionHeader>
                    <div className="flex justify-between gap-6 mb-20">
                        <div className="border-[#E8E8E8] border">
                            <div className="bg-[#D99904] text-center py-6">Phone</div>
                            <div className="text-center mx-8 mb-8 bg-[#F3F3F3] px-28 pb-20 pt-10">
                                <h3>PHONE</h3>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>

                        <div className="border-[#E8E8E8] border">
                            <div className="bg-[#D99904] text-center py-6">Phone</div>
                            <div className="text-center mx-8 mb-8 bg-[#F3F3F3] px-28 pb-20 pt-10">
                                <h3>PHONE</h3>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>

                        <div className="border-[#E8E8E8] border">
                            <div className="bg-[#D99904] text-center py-6">Phone</div>
                            <div className="text-center mx-8 mb-8 bg-[#F3F3F3] px-28 pb-20 pt-10">
                                <h3>PHONE</h3>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>                
                        
                    </div>
                    <SectionHeader Title={'Contact form'} subTitle={'Send us a Message'}></SectionHeader>
                    <div className="bg-[#F4F3F0] flex flex-col justify-center items-center p-28">
                        {/* FORM START */}
                        <form className="w-full ">
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
                                    <textarea rows="50" cols="50" name="message" type="text" placeholder="Enter photo URL" className="focus:border-none border-none mt-3  input w-full" />
                                </div>

                            </div>
                            <input type="submit" value="Send Message" className="btn border-2 border-[#331A15] bg-[#D2B48C] rounded-xl pt-2 pb-3  w-full mt-6 font-semibold" />
                        </form>
                        {/* FORM End */}

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ContactUs;