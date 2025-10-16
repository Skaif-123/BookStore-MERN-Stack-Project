import book from "../models/Book.js";
const uploadBook = async (req, res) => {
  try {
    // get data for uploading
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        success: false,
        message: "send all required fields,............",
      });
    }

    const { title, author, publishYear } = req.body;

    const newlyCreatedBook = await book.create({
      title,
      author,
      publishYear,
    });

    console.log("add book content");

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "new book created congratulations for your new",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Not able to create a new book,look for more errors",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "some internal error found",
    });
  }
};

const getAllBooks = async (req, res) => {
  const allBooks = await book.find({});
  if (allBooks) {
    return res.status(201).json({
      count: allBooks.length,
      data: allBooks,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "books not found,invalid Request call !!!!",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const getBookByIdSpecific = await book.findById(id);

    if (getBookByIdSpecific) {
      return res.status(201).json({
        success: true,
        message: "we found the book with specific Id",
        data: getBookByIdSpecific,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "book not found with specific Id,invalid Request call !!!!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "some internal error found",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    // get data for uploading
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        success: false,
        message: "send all required fields,............",
      });
    }

    const { title, author, publishYear } = req.body;

    const id = req.params.id;
    const updatedBook = await book.findByIdAndUpdate(id, {
      title,
      author,
      publishYear,
    });

    if(!updatedBook){
      return res.status(404).json({
        success:false,
        message:"Book not found"
      })

    }
    else{
      return res.status(201).json({
        success:true,
        message:"Book updated....."
      })
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteBookById=async (req,res) => {
  try {
    const id=req.params.id;
    const deletedBook=await book.findByIdAndDelete(id);
    if(deletedBook){
      return res.status(200).json({
        message:`book with title ${deletedBook.title} is deleted`,
      })
    }
  else{
    return res.status(404).json({
      message:"Book not found for deleting.",
    })
  }



  } catch (error) {
    res.status(500).json({
      message:"internal server error",
    })
  }
  
}
export { deleteBookById, getAllBooks, getBookById, updateBook, uploadBook };

