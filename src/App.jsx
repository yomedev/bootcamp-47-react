import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import { ExercisesPage } from "./pages/ExercisesPage/ExercisesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { TimerPage } from "./pages/ExercisesPage/TimerPage/TimerPage";
import { RerenderPage } from "./pages/ExercisesPage/RerenderPage/RerenderPage";
import { SinglearticlePage } from "./pages/SingleArticlePage/SingleArticlePage";
import { NewestArticlesPage } from "./pages/NewestArticlesPage/NewestArticlesPage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/ExercisesPage/UsersPage";
import { NewArticlePage } from "./pages/NewArticlePage/NewArticlePage";
import { MiddlewarePage } from "./pages/ExercisesPage/MiddlewarePage/MiddlewarePage";
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
            <Route path="new-article" element={<NewArticlePage />} />
            <Route path="articles/:articleId" element={<SinglearticlePage />}>
              <Route path="newest" element={<NewestArticlesPage />} />
            </Route>
            <Route path="exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="counter" />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="re-render" element={<RerenderPage />} />
              <Route path="middleware" element={<MiddlewarePage />} />
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
