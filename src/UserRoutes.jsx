import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MyBooksPage = lazy(() => import("./pages/ExchangePage/MyBooksPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/converter" element={<MyBooksPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
