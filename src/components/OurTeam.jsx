import { FaAngleRight } from "react-icons/fa";
async function getData() {
    const response = await fetch(process.env.BASE_URL + '/api/TeamList');
    if (!response.ok) {
        throw new Error("OurTeam Calling Fail");
    }
    return await response.json();
}

const OurTeam = async () => {
    const data = await getData();
    return (
        <div className="">
            <div style={{ backgroundColor: '#D7F5DC' }} className="">
                <div className="p-20 max-w-7xl mx-auto ">
                    <h1 className="text-5xl" >Team</h1>
                    <div className="flex items-center mt-5">
                        <p> Home </p> <FaAngleRight /> <p style={{ color: '#20B15A' }}>Team</p>
                    </div>
                </div>
            </div>
            <section className="min-h-screen max-w-7xl mx-auto" >
                <div className="md:w-2/5 px-10 pt-10 pb-5">
                    <h3 style={{ color: '#20B15A' }} className='text-2xl mb-5'>Our Team Member</h3>
                    <h1 className='text-4xl'>Check our awesome team members</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">

                    <div className="flex flex-col max-w-md p-6">
                        <img src={data[0].image} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                        <div>
                            <h2 className="text-3xl font-semibold mt-5 text-center">
                                {data[0].name}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md p-6">
                        <img src={data[1].image} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                        <div>
                            <h2 className="text-3xl font-semibold mt-5 text-center">
                                {data[1].name}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md p-6">
                        <img src={data[2].image} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                        <div>
                            <h2 className="text-3xl font-semibold mt-5 text-center">
                                {data[2].name}
                            </h2>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OurTeam