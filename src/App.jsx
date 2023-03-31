import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
// import HomePage from "./pages/HomePage";
// import ArticlesListPage from "./pages/ArticlesListPage";
import { ExercisesPage } from "./pages/ExercisesPage/ExercisesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { TimerPage } from "./pages/ExercisesPage/TimerPage/TimerPage";
import { RerenderPage } from "./pages/ExercisesPage/RerenderPage/RerenderPage";
import { SinglearticlePage } from "./pages/SingleArticlePage/SingleArticlePage";
import { NewestArticlesPage } from "./pages/NewestArticlesPage/NewestArticlesPage";
import RegisterPage from "./pages/RegisterPage";
import { Loader } from "./components/Loader";
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"))
const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlesListPage = lazy(() => import("./pages/ArticlesListPage"));

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="articles" element={<ArticlesListPage />} />
            <Route path="articles/:articleId" element={<SinglearticlePage />}>
              <Route path="newest" element={<NewestArticlesPage />} />
            </Route>
            <Route path="exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="timer" />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="re-render" element={<RerenderPage />} />
            </Route>

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};
