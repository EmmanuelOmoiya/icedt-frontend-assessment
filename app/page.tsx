import Image from "next/image";
import Hero from '@/components/home/hero';
import Testimonial from '@/components/home/testimonial';

export default function Home() {
  return (
    <div className="font-mulish">
      <Hero />
      <Testimonial />
    </div>
  );
}
