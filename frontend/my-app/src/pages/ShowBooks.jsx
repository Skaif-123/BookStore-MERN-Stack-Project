import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
function ShowBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `http://localhost:3000/book/api/getBooks/${id}`
      );
      try {
        if (response) {
          setBooks(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  });
  return (
    <div className="main-conatiner">
      {loading? <Spinner/>:(
        <div className="content">I am Working Hi</div>
      )}
    </div>
  )
}

export default ShowBooks;
