
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import InfoBook from "./pages/InfoBook";
import ShowBooks from "./pages/ShowBooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBooks />} />
            <Route path="/books/details/" element={<ShowBooks />} />
            <Route path="/books/info/:id" element={<InfoBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBooks />} />
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
