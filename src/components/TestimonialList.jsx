import { FaAngleRight } from "react-icons/fa";

async function getData() {
    const res = await fetch(process.env.BASE_URL + '/api/TestimonialList')
    if (!res.ok) {
        throw new Error('Could not fetch data');
    }
    return res.json()
}

const TestimonialList = async () => {
    const data = await getData();
    return (
        <div>
            <div style={{ backgroundColor: '#D7F5DC' }} className="">
                <div className="p-20 max-w-7xl mx-auto ">
                    <h1 className="text-5xl" >Testimonial List</h1>
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

                    <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
                        <img src={data[0].image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                        <p className="text-center my-3"> {data[0].msg} </p>
                        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{data[0].name}</h2>
                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">{data[0].designation}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
                        <img src={data[1].image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                        <p className="text-center my-3"> {data[1].msg} </p>
                        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{data[1].name}</h2>
                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">{data[1].designation}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
                        <img src={data[2].image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                        <p className="text-center my-3"> {data[2].msg} </p>
                        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{data[2].name}</h2>
                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">{data[2].designation}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
                        <img src={data[4].image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                        <p className="text-center my-3"> {data[4].msg} </p>
                        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{data[4].name}</h2>
                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">{data[4].designation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TestimonialList