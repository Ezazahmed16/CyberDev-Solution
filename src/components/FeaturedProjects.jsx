async function getData() {
    const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject")
    if (!res.ok) {
        throw new Error("StatList Calling Fail");
    }
    return res.json();
}

const FeaturedProjects = async () => {
    const data = await getData();
    return (
        <div className="bg-base-200">
            <section className="max-w-7xl mx-auto min-h-screen">
                <div className="md:w-2/5 px-10 pt-10 pb-5">
                    <h3 style={{ color: '#20B15A' }} className='text-2xl mb-5'>Featured Project</h3>
                    <h1 className='text-4xl'>We provide the Perfect Solution to your business growth</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">

                    <div className="p-6 rounded-md shadow-md h-full">
                        <img src={data[0].image}
                            alt="" className="object-cover object-center w-full rounded-md h-screen" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracki uppercase ">App Design - {data[0].created_at}</span>
                            <h2 className="text-xl font-semibold tracki">
                                {data[0].title}
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="p-6 rounded-md shadow-md">
                            <img src={data[1].image}
                                alt="" className="object-cover object-center w-full rounded-md" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracki uppercase ">App Design - {data[1].created_at}</span>
                                <h2 className="text-xl font-semibold tracki">
                                    {data[1].title}
                                </h2>
                            </div>
                        </div>
                        <div className="p-6 rounded-md shadow-md">
                            <img src={data[2].image}
                                alt="" className="object-cover object-center w-full rounded-md" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracki uppercase ">App Design - {data[2].created_at}</span>
                                <h2 className="text-xl font-semibold tracki">
                                    {data[2].title}
                                </h2>
                            </div>
                        </div>
                        <div className="p-6 rounded-md shadow-md">
                            <img src={data[3].image}
                                alt="" className="object-cover object-center w-full rounded-md" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracki uppercase ">App Design - {data[3].created_at}</span>
                                <h2 className="text-xl font-semibold tracki">
                                    {data[3].title}
                                </h2>
                            </div>
                        </div>
                        <div className="p-6 rounded-md shadow-md">
                            <img src={data[4].image}
                                alt="" className="object-cover object-center w-full rounded-md" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracki uppercase ">App Design - {data[4].created_at}</span>
                                <h2 className="text-xl font-semibold tracki">
                                    {data[4].title}
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedProjects