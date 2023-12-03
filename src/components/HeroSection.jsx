async function getData() {
    const res = await fetch(process.env.BASE_URL + "/api/HeroList");
    if (!res.ok) {
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const HeroSection = async () => {
    const data = await getData();
    return (
        <div className="relative" style={{ backgroundColor: '#D7F5DC' }}>
            <section className="hero is-fullheight max-w-7xl mx-auto pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center p-5">
                    <div className="w-4/5">
                        <h1 className='text-5xl'>Increase Your Customers Loyalty and Satisfaction</h1>
                        <p className='text-2xl mt-5'>We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                        <button style={{ background: '#F55F1D', color: '#fff' }} className="btn mt-10">Subscribe</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 justify-center items-center">
                            <img className="h-full md:h-72 w-full md:w-full col-span-1 md:col-span-3" src={data['image1']} alt="" srcSet="" />
                            <img className="w-full md:w-56 h-full md:h-72 col-span-2" src={data['image2']} alt="" srcSet="" />
                            <img className="w-full md:h-56 h-full md:w-56 col-span-2" src={data['image3']} alt="" srcSet="" />
                            <img className="w-full md:w-96 h-full md:h-56 col-span-1 md:col-span-3" src={data['image4']} alt="" srcSet="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection