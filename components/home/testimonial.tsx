import Image from 'next/image';
import Link from 'next/link';

const Testimonial = () => {
    return(
        <div className='bg-[#F8F8F8] py-20 text-black'>
            <div className="max-w-[90%] flex flex-col md:flex-row justify-between gap-6 grid-cols-3 lg:max-w-4xl  xl:max-w-5xl mx-auto">
                <div className="flex mb-4 w-full md:w-1/3 col-span-3 lg:col-span-1 flex-col gap-y-10">
                    <p className='font-mulish text-[#9B9B9B]'>TESTIMONIALS</p>
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-didotBold">
                        What customers <span className="text-[#FF5200]">say about us.</span>
                    </h1>
                    <div className="bg-white px-4 py-3 w-fit flex items-center text-center">
                        <Image src="/_static/icons/chevron-left.svg" width={100} height={100} className="w-8 h-8 mr-2 rotate-180" alt="Chevron left" />
                        <p className="text-5xl text-[#4A4A4A]">/</p>
                        <Image src="/_static/icons/chevron-right.svg" width={100} height={100} className="w-8 h-8 ml-2" alt="Chevron right" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-6">
                    <Card title="Best User Experience" />
                    <Card title='Friendly Staff' />
                </div>
            </div>
        </div>
    )
};
export default Testimonial;

const Card = ({ title }:{ title: string }) => {
    return (
        <div className='flex justify-between  lg:col-span-1 flex-col bg-white p-6 hover:shadow-md transition-all'>
            <div className=''>
                <p className="font-didotBold text-2xl mb-6">{title}</p>
                <p className="mb-12">
                    Because the rock was laid down, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quas fugiat quos officiis dicta architecto placeat vitae eaque explicabo dolore.
                </p>
            </div>
            <div className="flex items-center text-center">
                <Image src="/_static/images/derek_dunn_1.svg" width={1000} height={1000} alt="Derek Dunn" className='w-12 h-12 rounded-full mr-2' />
                <p className="text-[#4A4A4A]">Derek Dunn</p>
            </div>
        </div>
    )
}