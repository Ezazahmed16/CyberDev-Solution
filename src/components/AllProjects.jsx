async function getData() {
    const res = await fetch(process.env.BASE_URL + '/api/AllProject')
    if (!res.ok) {
        throw new Error('Could not load projects from server');
    }
    return res.json();
}

const AllProjects = async () => {
    const data = await getData();
    console.log(data)
    return (
        <div>
            <section className="max-w-7xl mx-auto min-h-screen">
                <div className="md:w-2/5 px-10 pt-10 pb-5">
                    <h3 style={{ color: '#20B15A' }} className='text-2xl mb-5'>All Project</h3>
                    <h1 className='text-4xl'>Better Agency/SEO Solution At Your Fingertips</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-6 rounded-md shadow-md">
                        <img src={data[0].image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracki text-center">
                                {data[0].title}
                            </h2>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md">
                        <img src={data[1].image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracki text-center">
                                {data[1].title}
                            </h2>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md">
                        <img src={data[2].image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracki text-center">
                                {data[2].title}
                            </h2>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md">
                        <img src={data[3].image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracki text-center">
                                {data[3].title}
                            </h2>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md">
                        <img src={data[4].image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracki text-center">
                                {data[4].title}
                            </h2>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md">
                        <img src={data[5].image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracki text-center">
                                {data[5].title}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllProjects