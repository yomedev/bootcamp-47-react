import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader";

const subPages = [
  { href: "counter", title: "Counter" },
  { href: "users", title: "Users" },
  { href: "timer", title: "Timer" },
  { href: "re-render", title: "Re-render" },
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
