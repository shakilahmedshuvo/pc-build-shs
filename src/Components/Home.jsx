import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import image from "../../public/image.png";

const Home = () => {
    const [data, setData] = useState([]);

    // load the data
    useEffect(() => {
        fetch('component.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    // 
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.png';
        link.click();
    }

    return (
        <div
            className="container mx-auto pt-10">
            <h2
                className='text-center text-2xl lg:text-4xl font-bold text-gray-700'>
                PC Build Of <span className='text-orange-500'>Abdullah Al Imran</span>
            </h2>
            {/* table */}
            <div>
                <h2
                    className='text-sm text-gray-500 text-center py-6 font-semibold'>
                    PC Component Chart
                </h2>

                {/* main table section start */}
                <div>
                    {/* table head start */}
                    <div
                        className='grid grid-cols-12 text-gray-700 font-semibold text-xs mb-6'>
                        <h2
                            className="flex items-center justify-center">
                            #
                        </h2>
                        <h2
                            className="flex items-center justify-center">
                            Image
                        </h2>
                        <h2
                            className="col-span-6 mx-8">
                            Product Name & Details
                        </h2>
                        <h2
                            className="col-span-1 mx-auto">
                            Price
                        </h2>
                        <h2
                            className="col-span-3 mx-auto">
                            Link
                        </h2>
                    </div>
                    {/* table head end */}


                    {/* map the data and grid section */}
                    <div
                        className='grid grid-row-12 font-semibold text-sm'>
                        {
                            data.map(data => <SingleCard
                                key={data.id}
                                data={data}
                            ></SingleCard>)
                        }
                        <div
                            className="grid grid-cols-12 my-6 mb-10">
                            <div
                                className="text-2xl col-span-8 text-center">
                                Total Cost:
                            </div>
                            {/* total  */}
                            <div
                                className="text-3xl text-orange-500">
                                $1386
                            </div>
                        </div>
                        <div
                            onClick={handleDownload}
                            className="flex items-center justify-center mb-4 cursor-pointer">
                            <div
                                className="text-xl text-white bg-orange-500 w-fit px-4 py-2 rounded-full">
                                Download The Image
                            </div>
                        </div>
                    </div>

                </div>
                {/* main table section end */}

            </div>
        </div>
    );
};

export default Home;