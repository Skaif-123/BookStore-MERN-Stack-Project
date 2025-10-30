import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
function InfoBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `process.env.RENDER_URL/book/api/getBooks/${id}`
      );
      try {
        if (response) {
          console.log(response);

          setBooks(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="main-container flex flex-col justify-center items-center h-screen p-4">
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        
        <div className="mt-4 flex flex-col border-2 border-sky-400 rounded-xl  w-fit p-4">
          <div className="my-4">
            <span className="text-4xl mr-4 text-gray-500">ID:</span>
            <span>{books._id}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 text-gray-500">Title:</span>
            <span>{books.title}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 text-gray-500">Author:</span>
            <span>{books.author}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 text-gray-500">Publish Year:</span>
            <span>{books.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 text-gray-500">Created Time:</span>
            <span>{new Date(books.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 text-gray-500">Last Updated Time:</span>
            <span>{new Date(books.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoBook;
