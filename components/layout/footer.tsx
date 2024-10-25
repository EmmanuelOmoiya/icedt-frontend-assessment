import Link from 'next/link';
import Image from 'next/image';
import { PaymentPartners } from '@/lib/constants';

const Footer = () => {
    return(
        <footer className='font-mulish text-[#4A4A4A]'>
            <div className="max-w-[90%] lg:max-w-4xl xl:max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-3 text-sm py-20">
                <div className="flex flex-col gap-y-8">
                    <div>
                        <h2 className="font-bold mb-3">Need Travelsy Help?</h2>
                        <div className="flex flex-col gap-y-2">
                            <p>Got Questions? Call us 24/7!</p>
                            <p>Call Us: +254 716909 815 </p>
                            <p>Email Us: info@travelsy.com </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold mb-3">Contact Info:</h2>
                        <div className="flex flex-col gap-y-2">
                            <p>2nd Floor, Fedha Plaza, Westlands, Nairobi, Kenya.</p>
                            <p>P.O Box 7231-00300</p>
                            <p>Nairobi, Kenya.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-3">Company</h2>
                    <div className="flex flex-col gap-y-2">
                        <Link href="#"><p>About Us</p></Link>
                        <Link href="#"><p>Careers</p></Link>
                        <Link href="#"><p>Terms of Use</p></Link>
                        <Link href="#"><p>Privacy Statement</p></Link>
                        <Link href="#"><p>Give Us Feedback</p></Link>
                        <Link href="#"><p>Partner With Us</p></Link>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-3">Other Services and Support</h2>
                    <div className="flex flex-col gap-y-2">
                        <Link href="#"><p>Rewards Program</p></Link>
                        <Link href="#"><p>Partners</p></Link>
                        <Link href="#"><p>Legal</p></Link>
                        <Link href="#"><p>Privacy Policy</p></Link>
                        <Link href="#"><p>Customer Service Help</p></Link>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-3">Quick Links</h2>
                    <div className="flex flex-col gap-y-2">
                        <Link href="#"><p>Your Account</p></Link>
                        <Link href="#"><p>Camping Locations</p></Link>
                        <Link href="#"><p>Activities</p></Link>
                        <Link href="#"><p>Hire Equipment</p></Link>
                        <Link href="#"><p>Blogs</p></Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-bold mb-3 ">Mailing List</h2>
                    <div className="flex flex-col gap-y-2">
                        <p>Sign Up for our mailing lists and get our latest offers and promotions straight in your inbox.</p>
                        <div className="flex h-[2.5rem]">
                            <input placeholder="Your Email" className="h-full w-fit lg:w-[50%] xl:w-full border border-[#ccc] bg-transparent placeholder:font-mulish pl-2"   />
                            <button className="border-none text-white w-fit lg:w-[50%] xl:w-full h-full bg-[#FF5200] px-5 lg:px-auto xl:px-5 text-center">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[#ccc] border-y">
                <div className=" max-w-[90%] lg:max-w-4xl xl:max-w-5xl py-4 md:py-7 mx-auto items-center text-center lg:flex block justify-between">
                    <h2 className="font-bold">Travelsy</h2>
                    <div className="block lg:flex gap-x-4 items-center text-center">
                        <div className="flex mt-5 md:mt-0 w-full justify-between md:justify-auto gap-x-4 md:gap-x-0 ">
                            {
                                PaymentPartners.map((paymentPartner: string, index: any)=>(
                                    <Image src={`/_static/images/${paymentPartner.toLowerCase()}.svg`} width={100} height={100} alt={paymentPartner} className="w-14 h-5" key={index} />
                                ))
                            }
                        </div>
                        <div className="flex mt-5 gap-x-4 mx-auto w-fit lg:gap-x-0 md:mt-0">
                            <div className="border flex border-[#ccc] p-3 px-5">
                                <Image src="/_static/images/usa.svg" alt="USA" width={50} height={100} className="w-4 rounded-full mr-3" />
                                <p>English (United States)</p>
                                <Image src="/_static/icons/chevron-down.svg" width={50} height={50} alt="Chevron down" className="pl-7 w-5" />
                            </div>
                            <div className="border border-[#ccc] px-3 flex py-1 h-full">
                                <p>KES</p>
                                <Image src="/_static/icons/chevron-down.svg" width={50} height={50} alt="Chevron down" className="pl-3 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[90%] lg:max-w-4xl xl:max-w-5xl text-sm mx-auto py-8 lg:py-11 items-center flex flex-col md:gap-y-auto gap-y-4 md:flex-row justify-between  text-[#4A4A4A]">
                <p className="text-center md:text-left">Copyright &copy;2019 Travelsy ltd. All rights reserved.</p>
                <p>Made in Kenya by Ralak</p>
            </div>
        </footer>
    )
};
export default Footer;