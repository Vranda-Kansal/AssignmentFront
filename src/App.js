import Header from "./components/Header";
import BookContainer from "./components/BookContainer";
import Specialists from "./components/Specialists";
import Testimonials from "./components/Testimonials";
import { Suspense, lazy, useState } from "react";

function App() {
  const [toggleMode, setToggleMode] = useState(false);
  const [toggleBookForm, setToggleBookForm] = useState(false);

  const BookForm = lazy(() => import("./components/BookForm.js"));
  return (
    <div className={`${toggleMode && "dark"}`}>
      <div className="sticky top-0 z-50 bg-white dark:bg-neutral-900">
        <Header
          setToggleBookForm={setToggleBookForm}
          setToggleMode={setToggleMode}
          toggleMode={toggleMode}
        />
      </div>
      <div className="bg-pink-100 justify-center items-center h-[570px] dark:bg-neutral-900">
        {!toggleBookForm && (
          <BookContainer setToggleBookForm={setToggleBookForm} />
        )}
        {toggleBookForm && (
          <Suspense fallback={<h1>Loading...</h1>}>
            <BookForm setToggleBookForm={setToggleBookForm} />
          </Suspense>
        )}
      </div>
      <div className=" dark:bg-neutral-900">
        <Specialists />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
