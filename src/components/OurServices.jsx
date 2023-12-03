async function getData() {
    const res = await fetch(process.env.BASE_URL + "/api/AllService");
    if (!res.ok) {
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}


const OurServices = async () => {
    const data = await getData();
    return (
        <div>
            <section className="max-w-7xl mx-auto min-h-screen">
                <div className="md:w-2/5 px-10 pt-10 pb-5">
                    <h3 style={{ color: '#20B15A' }} className='text-2xl mb-5'>Our All Services</h3>
                    <h1 className='text-4xl'>We Provide BestWeb design services</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">


                    <div className="shadow-2xl p-10">
                        <div className="p-3">
                            <h1 className="text-3xl mb-5">{data[0].title}</h1>
                            <p style={{ color: '#9D9D9D' }} className="text-sm mb-5">{data[0].des}</p>
                        </div>
                        <div className="w-full">
                            <div className="mb-4 flex flex-wrap items-end">
                                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[0].image1} />
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[0].image2} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start">
                                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[0].image3} alt="" />
                                </div>
                                <div className="w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[0].image4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl p-10">
                        <div className="p-3">
                            <h1 className="text-3xl mb-5">{data[1].title}</h1>
                            <p style={{ color: '#9D9D9D' }} className="text-sm mb-5">{data[1].des}</p>
                        </div>
                        <div className="w-full">
                            <div className="mb-4 flex flex-wrap items-end">
                                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[1].image1} />
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[1].image2} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start">
                                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[1].image3} alt="" />
                                </div>
                                <div className="w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[1].image4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl p-10">
                        <div className="p-3">
                            <h1 className="text-3xl mb-5">{data[2].title}</h1>
                            <p style={{ color: '#9D9D9D' }} className="text-sm mb-5">{data[2].des}</p>
                        </div>
                        <div className="w-full">
                            <div className="mb-4 flex flex-wrap items-end">
                                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[2].image1} />
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[2].image2} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start">
                                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[2].image3} alt="" />
                                </div>
                                <div className="w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[2].image4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl p-10">
                        <div className="p-3">
                            <h1 className="text-3xl mb-5">{data[3].title}</h1>
                            <p style={{ color: '#9D9D9D' }} className="text-sm mb-5">{data[3].des}</p>
                        </div>
                        <div className="w-full">
                            <div className="mb-4 flex flex-wrap items-end">
                                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[3].image1} />
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[3].image2} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start">
                                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                    <img className="w-full h-32 object-cover rounded" src={data[3].image3} alt="" />
                                </div>
                                <div className="w-full lg:w-2/3 px-3">
                                    <img className="w-full h-32 lg:h-48 object-cover rounded" src={data[3].image4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OurServices