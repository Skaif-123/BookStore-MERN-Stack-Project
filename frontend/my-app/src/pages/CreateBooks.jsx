import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import {useSnackbar} from 'notistack'
import Spinner from "../components/Spinner";

function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{enqueueSnackbar}=useSnackbar();

  const postData = async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_RENDER_URL}/book/api/upload/`, data);
      setLoading(false);
      enqueueSnackbar('Book created successfully',{variant:'success'})
      navigate("/");
    } catch (error) {
      console.log("some internal error");
    }
  };

  // putting logic for creating new book details
  const saveNewBook = (e) => {
    e.preventDefault(); // Prevents page refresh
    const data = {
      title,
      author,
      publishYear,
    };
    console.log(data);
    setLoading(true);
    postData(data);

    // using async await for working
  };

  return (
    <>
      <div className="main-container">
        <div className="p-4">
          <BackButton />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <form className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto w-[600px]">
            <h1 className="text-sky-500 my-2 text-3xl font-bold p-4">
              CREATE NEW BOOK
            </h1>
            <div className="my-4">
              <label htmlFor="title" className="text-xl mr-4 text-gray-500">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="border-2 border-gray-500 px-4 py-2 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label htmlFor="author" className="text-xl mr-4 text-gray-500">
                Author
              </label>
              <input
                type="text"
                name="author"
                className="border-2 border-gray-500 px-4 py-2 w-full"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="publishYear"
                className="text-xl mr-4 text-gray-500"
              >
                Publish Year
              </label>
              <input
                type="text"
                className="border-2 border-gray-500 px-4 py-2 w-full text-xl"
                name="publishYear"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
              />
            </div>

            <button
              type="submit"
              onClick={saveNewBook}
              className="rounded-xl p-2 text-2xl font-bold hover:bg-red-600 hover:text-yellow-400 bg-sky-300 m-8"
            >
              Save
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default CreateBooks;
