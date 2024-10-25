import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <nav className="w-full flex justify-between border-b border-[#ccc] items-center text-center py-5 px-4 md:py-7 md:pl-8 md:pr-4 lg:pr-24 xl:pr-32 font-mulish">
            <h1 className="font-mulish text-[#4A4A4A] font-bold">Travelsy</h1>
            <div className="sm:hidden w-[1.5rem] flex flex-col gap-y-1">
                <span className="h-[3px] w-full bg-[#FF5200] block rounded-lg" />
                <span className="h-[3px] w-full bg-[#FF5200] block rounded-lg" />
                <span className="h-[3px] w-full bg-[#FF5200] block rounded-lg" />
            </div>
            <div className=" hidden md:flex gap-x-10">
                <div className="flex gap-x-6 text-sm items-center text-center text-[#4A4A4A]">
                    <Link href="#"><p>Campus Locations</p></Link>
                    <Link href="#"><p>Activities</p></Link>
                    <Link href="#"><p>Equipment</p></Link>
                    <Link href="#"><p>Blogs</p></Link>
                </div>
                <div className="flex gap-x-4 items-center text-center">
                    <button className="bg-[#FF5200] flex gap-x-2 text-sm px-4 text-3 rounded-[20px] justify-center items-center text-center py-2">
                        <Image src={"/_static/icons/reservation.svg"} width={100} height={100} alt="Reservation safe spaces" className="w-3" />
                        Reservations
                    </button>
                    <Image src={"/_static/icons/search.svg"} width={100} height={100} alt="Search" className="w-5" />
                    <div className="relative">
                        <div className="rounded-full h-2 w-2 bg-[#FF0000] border border-white absolute right-[4%] top-[10%]"></div>
                        <Image src={"/_static/images/profile.svg"} width={100} height={100} alt="Search" className="w-9 rounded-full" />
                    </div>
                    <Image src={"/_static/icons/chevron-down.svg"} width={100} height={100} alt="Search" className="w-3" />
                </div>
            </div>
        </nav>
    )
};
export default Header;