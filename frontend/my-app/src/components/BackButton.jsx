import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = ({destination="/"}) => {
  return (
    <div className='flex'>
      <Link
      to={destination}
      className='bg-sky-800 text-white px-3 py-1 rounded-lg w-fit text-4xl mt-8 hover:bg-red-600 hover:text-yellow-400'
      >
        <BsArrowLeft/>
      </Link>
    </div>
  )
}

export default BackButton