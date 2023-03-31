import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader";

const subPages = [
  { href: "timer", title: "Timer" },
  { href: "counter", title: "Counter" },
  { href: "re-render", title: "Re-render" },
  // { href: "/articles", title: "Articles" },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map((item) => (
          <li key={item.href} className="nav-item">
            <NavLink className="nav-link" to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
