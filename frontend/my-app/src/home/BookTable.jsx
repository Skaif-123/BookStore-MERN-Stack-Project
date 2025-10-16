import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const BookTable = ({books}) => {
  return (
    <>
      <table className="w-full  border-separate border-spacing-2 px-30">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md p-2">
                  Number
                </th>
                <th className="border border-slate-600 rounded-md p-2">
                  Title
                </th>
                <th className="border border-slate-600 rounded-md p-2 max-md:hidden">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md p-2 max-md:hidden">
                  PublishYear
                </th>
                <th className="border border-slate-600 rounded-md p-2">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="h-8">
                  <td className="border border-slate-600 rounded-md p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-600 rounded-md p-2 text-center">
                    {book.title}
                  </td>
                  <td className="border border-slate-600 rounded-md p-2 text-center max-md:hidden">
                    {book.author}
                  </td>
                  <td className="border border-slate-600 rounded-md p-2 text-center max-md:hidden">
                    {book.publishYear}
                  </td>
                  <td className="border border-slate-600 rounded-md p-2 text-center">
                    <div className="grouper flex flex-row gap-2 items-center justify-center">
                      <Link to={`/books/info/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-400"/>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-blue-400"/>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-80w0"/>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </>
  )
}

export default BookTable

