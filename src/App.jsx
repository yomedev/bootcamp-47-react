import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ArticlesListPage } from "./pages/ArticlesListPage/ArticlesListPage";
import { ExercisesPage } from "./pages/ExercisesPage/ExercisesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { CounterPage } from "./pages/ExercisesPage/CounterPage/CounterPage";
import { TimerPage } from "./pages/ExercisesPage/TimerPage/TimerPage";
import { RerenderPage } from "./pages/ExercisesPage/RerenderPage/RerenderPage";
import { SinglearticlePage } from "./pages/SingleArticlePage/SingleArticlePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articles" element={<ArticlesListPage />} />
          <Route path="articles/:articleId" element={<SinglearticlePage />} />
          <Route path="exercises" element={<ExercisesPage />}>
            {" "}
            {/* / + exercises = /exercieses*/}
            <Route index element={<Navigate to="timer" />} />
            <Route path="timer" element={<TimerPage />} />{" "}
            {/* /exercises + timer  = "/exercises/timer"*/}
            <Route path="counter" element={<CounterPage />} />
            <Route path="re-render" element={<RerenderPage />} />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
