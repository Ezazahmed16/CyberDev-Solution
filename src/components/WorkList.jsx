import { BiMessageAltAdd } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BsHandbagFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

async function getData() {
    const res = await fetch(process.env.BASE_URL + '/api/WorkList')
    if (!res.ok) {
        throw new Error("StatList Calling Fail");
    }
    return res.json()
}

const WorkList = async () => {
    const data = await getData();
    return (
        <section className='max-w-7xl mx-auto min-h-screen'>
            <div className="md:w-2/5 p-10">
                <h3 style={{ color: '#20B15A' }} className='text-2xl mb-5'>Work List</h3>
                <h1 className='text-4xl'>We provide the Perfect Solution to your business growth</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="rounded-md shadow-md">
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <BiMessageAltAdd className="h-24 w-24 bg-base-200 p-5 rounded-md" />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">{data[0].title}</h2>
                            <p className="text-lg">{data[0].des}</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md">Learn More <FaLongArrowAltRight className="ms-5" /> </button>
                    </div>
                </div>
                <div className="rounded-md shadow-md">
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <FaHandHoldingHeart className="h-24 w-24 bg-base-200 p-5 rounded-md" />

                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">{data[1].title}</h2>
                            <p className="text-lg">{data[1].des}</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md">Learn More <FaLongArrowAltRight className="ms-5" /> </button>
                    </div>
                </div>
                <div className="rounded-md shadow-md">

                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <BsHandbagFill className="h-24 w-24 bg-base-200 p-5 rounded-md" />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">{data[2].title}</h2>
                            <p className="text-lg">{data[2].des}</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md">Learn More <FaLongArrowAltRight className="ms-5" /> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkList