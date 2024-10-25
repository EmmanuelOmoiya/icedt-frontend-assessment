import Link from 'next/link';
import Image from 'next/image';
import { Interests } from '@/lib/constants';

const Hero = () => {
    return (
        <div className="font-mulish max-w-[90%] lg:max-w-4xl xl:max-w-5xl mx-auto py-16 md:py-20 text-sm">
            <h1 className="font-didotBold mb-6 lg:mb-10 text-[2.8rem] leading-[3rem] md:text-5xl lg:text-7xl font-bold text-black">Find An <br className="hidden lg:block"/> Experience</h1>
            <p className="text-[#4A4A4A] my-4 lg:w-1/2">To find you the best experiences, we will ask you a few questions and show you experiences based on your preferences. </p>
            <div className="text-[#4A4A4A] my-8 mt-6 lg:mt-10">
                <p className="mb-3">How much time do you have?</p>
                <div className=" grid grid-cols-3 md:flex gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" />
                        <p>A weekend</p>
                    </div>
                    <div className="flex items-center text-center gap-x-2">
                        <input type="checkbox" />
                        <p>A week</p>
                    </div>
                    <div className="flex items-center text-center gap-x-2">
                        <input type="checkbox" />
                        <p>A month</p>
                    </div>
                    <div className="col-span-3 mt-3 md:mt-0 flex gap-x-2">
                        <input type="checkbox" />
                        <p>A few days, specify.</p>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <p className='mb-6 text-[#4A4A4A]'>What are your interests?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        Interests.map((interest: { name: string, type: number })=>(
                            <div className={`${interest.type === 2 ? 'md:col-span-2 col-span-1' : 'col-span-1'} transition-all relative group h-[10rem] md:h-[12rem] lg:h-[16rem]`}>
                                <Image src={`https://icedt-frontend-assessment.vercel.app/_static/images/${interest.name.split(' ').join('_')}.svg`} width={100} height={100} alt={interest.name} className="z-1 object-cover h-full w-full absolute" />
                                <div className="w-full h-full z-3 transition-all relative text-8 group-hover:bg-[#FF5200]/60 bg-[#000]/60 flex flex-col items-center justify-center text-center font-didot text-white" style={{ zIndex: 9 }}>
                                    <Image src="/_static/icons/chevron-down.svg" width={50} height={50} className="w-3 mb-4 invisible group-hover:visible transition-all" alt="Check" />
                                    <p className="text-[1.5rem] xl:text-[2rem]">{interest.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="text-white border-none py-2 px-16  mt-10 bg-[#FF5200] rounded-md">Set</button>
            </div>
        </div>
    )
};
export default Hero;