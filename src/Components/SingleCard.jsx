import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
    // get the data
    const { id, name, price, image, productLink, paragraph } = data;
    // console.log(data);
    return (
        <Link
            className="grid grid-cols-12 py-4 border border-1"
            to={productLink}>
            <div
                className="text-center flex items-center justify-center text-base">
                {id}
            </div>
            <Link
                to={image}
                className="flex items-center justify-center overflow-hidden">
                <img
                    className="hover:scale-110 transition duration-500 cursor-pointer"
                    src={image}
                    alt="" />
            </Link>
            <div
                className="col-span-6 text-xl flex mx-8 my-3">
                <div>
                    {name}
                    <br />
                    <span
                        className="text-xs text-gray-600">
                        {paragraph}
                    </span>
                </div>
            </div>
            <div
                className="text-2xl items-center mx-auto text-orange-500 pt-5">
                {price}
            </div>
            <Link
                className="col-span-3"
                to={productLink}>
                <p
                    className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white font-medium text-center w-fit mx-auto mt-3 py-2 rounded-lg px-4 duration-300">
                    More Info & Link
                </p>
            </Link>
        </Link >
    );
};

export default SingleCard;