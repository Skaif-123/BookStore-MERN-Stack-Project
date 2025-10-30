import axios from "axios";
import { useSnackbar } from 'notistack';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
function EditBook() {
  // defining variables
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
const{enqueueSnackbar}=useSnackbar();
  //using useEffect() for defining side function
  useEffect(() => {
    setLoading(true);
    const fetchBook = async () => {
      try {
        const res = await axios(
          `${import.meta.env.VITE_RENDER_URL}/book/api/getBooks/${id}`
        );
        if (res) {
          console.log(res.data.data);
          setLoading(false);
          const data = res.data.data;
          setTitle(data.title);
          setAuthor(data.author);
          setPublishYear(data.publishYear);
        }
      } catch (error) {
        setLoading(false);
        console.log("message: ", error);
      }
    };
    fetchBook();
  }, []);

  const saveNewBook = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { title, author, publishYear };
    try {
      await axios.put(`${import.meta.env.VITE_RENDER_URL}/book/api/updateBook/${id}`, data);
      setLoading(false);
       enqueueSnackbar('Book Edited successfully',{variant:'success'})
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log("message", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="p-4">
          <BackButton />
        </div>
        <h1 className="text-3xl text-sky-600 px-4">Edit Book Content</h1>
        {/* writing logic for form upload */}
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={saveNewBook}
            className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto w-[600px]"
          >
            <div className="my-4">
              <label htmlFor="title" className="text-xl mr-4 text-gray-500">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="border-2 border-gray-500 px-4 py-2 w-full text-xl"
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
                className="border-2 border-gray-500 px-4 py-2 w-full text-xl"
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

export default EditBook;
