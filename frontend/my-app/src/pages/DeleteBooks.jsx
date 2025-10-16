import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import {useSnackbar} from 'notistack'

function DeleteBooks() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const{enqueueSnackbar}=useSnackbar();
  useEffect(() => {
    setLoading(true);
    const fetchBook = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/book/api/getBooks/${id}`
        );
        if (res) {
          console.log(res.data.data);
          setLoading(false);
          const data = res.data.data;
          setTitle(data.title);
        }
      } catch (error) {
        setLoading(false);
        console.log("message: ", error);
      }
    };
    fetchBook();
  }, []);
  const deleteThisBook = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/book/api/deleteBook/${id}`);
      setLoading(false);
       enqueueSnackbar('Book Deleted successfully',{variant:'success'})
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
        <h1 className="text-3xl text-sky-600 px-4">Delete Book </h1>
        {/* writing logic for deleting*/}
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-500 w-[600px] rounded-xl p-8 items-center mx-auto">
            <div className="text-2xl">
              Are you sure you want to delete <span className="text-sky-600 font-bold italic">{title}</span> book ?
            </div>
            <button
              className="p-4 bg-red-600 text-white mt-10 w-full cursor-pointer"
              onClick={deleteThisBook}
            >
              Yes, I am in
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default DeleteBooks;
