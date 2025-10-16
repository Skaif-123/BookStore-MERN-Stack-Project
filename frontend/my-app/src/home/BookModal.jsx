import { AiOutlineClose } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black/50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[500px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <AiOutlineClose
          className="absolute right-4 top-3 text-3xl text-red-600 hover:text-black cursor-pointer"
          onClick={onClose}
        />

        <h2 className="bg-red-300 w-fit rounded-lg px-4 py-2 right-2">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>

        <div className="flex justify-start gap-x-2 items-center mt-3">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start gap-x-2 items-center mt-3">
          <BsInfoCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to know</p>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          perferendis distinctio soluta ad ipsum explicabo expedita, iusto
          voluptate tempore eos accusamus rem minus nisi enim quisquam veritatis
          culpa deleniti accusantium eligendi! Amet consequuntur reprehenderit
          voluptate suscipit iste quas esse fuga, dolores modi recusandae cum
          voluptates.
        </p>
      </div>
    </div>
  );
};

export default BookModal;