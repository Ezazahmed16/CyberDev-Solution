import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';

async function getData() {
    const res = await fetch(process.env.BASE_URL + '/api/TestimonialList');
    if (!res.ok) {
        throw new Error('Could not fetch data');
    }
    return res.json();
}

const TestimonialList = async () => {
    const data = await getData();
    return (
        <div>
            <div style={{ backgroundColor: '#F8F9FC' }} className="">
                <div className="p-20 max-w-7xl mx-auto ">
                    <h1 className="text-5xl">Testimonial List</h1>
                    <div className="flex items-center mt-5">
                        <p> Home </p> <FaAngleRight /> <p style={{ color: '#20B15A' }}>Testimonial List</p>
                    </div>
                </div>
            </div>
            <section className="max-w-7xl mx-auto min-h-screen">
                <div className="md:w-2/5 px-10 pt-10 pb-5">
                    <h3 style={{ color: '#20B15A' }} className='text-2xl mb-5'>Testimonial List</h3>
                    <h1 className='text-4xl'>Better Agency/SEO Solution At Your Fingertips</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {data.map((testimonial, index) => (
                        <div key={index} className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
                            <Image 
                                src={testimonial.image} 
                                alt={`Image of ${testimonial.name}`} 
                                width={128} 
                                height={128} 
                                className="mx-auto rounded-full aspect-square" 
                            />
                            <p className="text-center my-3">{testimonial.msg}</p>
                            <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{testimonial.name}</h2>
                                    <p className="px-5 text-xs sm:text-base dark:text-gray-400">{testimonial.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TestimonialList;
