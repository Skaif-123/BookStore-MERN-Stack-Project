import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";
const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-2 py-2 m-2  hover:shadow-xl"
    >
      <div className="flex flex-row-reverse justify-start gap-x-2 items-center">
        <h2 className="bg-red-300 rounded-lg  p-1 m-1">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
      </div>
      <div className="flex justify-start gap-x-2 items-center mt-3">
        <PiBookOpenTextLight className="text-red-300 text-2xl " />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start gap-x-2 items-center mt-3">
        <BsInfoCircle className="text-red-300 text-2xl " />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex flex-row gap-x-2 mt-4 p-4 items-center justify-between">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        <Link to={`/books/info/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-400 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdDeleteOutline className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={(e)=>setShowModal(false)}/>
      )}
    </div>
  );
};

export default BooksSingleCard;
