import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import BookCard from "../home/BookCard";
import BookTable from "../home/BookTable";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/book/api/getBooks/"
        );
        if (response) {
          setBooks(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []); //mount only once

  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <div className="p-4">
        <div className="switcherTab flex flex-row  gap-x-4 ">
          <button
            className="bg-sky-300 hover:bg-sky-600 p-2 hover:text-white rounded-lg text-xl"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 p-2 hover:text-white rounded-lg text-xl"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-row justify-between items-center px-32">
        <h1 className="text-4xl font-bold my-8 ">Books List</h1>
        <Link to="books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
     
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BookTable books={books} />
        ) : (
          <BookCard books={books} />
        )}
      
    </div>
  );
}

export default Home;
