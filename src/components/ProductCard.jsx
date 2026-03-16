import { HiTrash } from "react-icons/hi2";

function ProductCard({ details, removeProduct }) {
  return (
    <div className="p-1 bg-white rounded-2xl h-fit border border-gray-100 shadow hover:-translate-y-1 transition-all duration-200 ease-out flex flex-col items-center">
      <div className="w-100 h-[400px] overflow-hidden bg-gray-100 rounded-2xl flex item-center justify-center">
        <img className="object-contain " src={details.image} alt="product image" />
      </div>
      <div className="flex items-center justify-between my-5 mx-2 h-20">
        <div className="w-70">
          <h2 className="text-xl font-semibold text-gray-900">{details.title.slice(0, 35)}...</h2>
          <p className="text-2xl font-semibold text-green-600">${details.price}</p>
        </div>
        <div
          onClick={() => removeProduct(details.id)}
          className="rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center p-5 cursor-pointer"
        >
          <HiTrash className="text-4xl text-red-600 " />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
