

const AboutUs = async () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto min-h-screen">
                <di v className="grid grid-cols-1 md:grid-cols-2 items-center py-32 gap-5 md:gap-10 px-3">
                    <div className="">
                        <h1 style={{ color: '#8C2E47' }} className="text-3xl font-bold">About Us</h1>
                        <p className="text-black text-xm text-justify mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus voluptatum repellat voluptas saepe veniam ducimus veritatis debitis dolorum ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus voluptatum repellat voluptas saepe veniam ducimus veritatis debitis dolorum ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus voluptatum repellat voluptas saepe veniam ducimus veritatis debitis dolorum ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus voluptatum repellat voluptas saepe veniam ducimus veritatis debitis dolorum ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus voluptatum repellat voluptas saepe veniam ducimus veritatis debitis dolorum ab.</p>
                    </div>
                    <div className="">
                        <div className="block justify-center items-center m-auto">
                            <video width="600" height="340" controls preload>
                                <source src="/Video/Elevate Your Business with CyberdevBD _  2024-06-06.mp4" type="video/mp4" />
                                <track
                                    src="/Video/Elevate Your Business with CyberdevBD _  2024-06-06.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </di>
            </div>
        </section>
    )
}

export default AboutUs