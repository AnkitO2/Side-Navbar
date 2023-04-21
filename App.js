import "./App.css";

import { NavLink } from "react-bootstrap";
import {
  Home,
  Star,
  Database,
  Users,
  UserCheck,
  Headphones,
  Calendar,
  Briefcase,
} from "feather-icons-react";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(true);

  return (
    <div className="App ">
      <>
        <nav className=" mainnav  h-100 mt-5 shadow-lg rounded-3 ">
          <NavLink
            className={
              active === 1
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Home
              onClick={() => setActive(!active + 1)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 2
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Star
              onClick={() => setActive(!active + 2)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 3
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Database
              onClick={() => setActive(!active + 3)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 4
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Users
              onClick={() => setActive(!active + 4)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 5
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <UserCheck
              onClick={() => setActive(!active + 5)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 6
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Headphones
              onClick={() => setActive(!active + 6)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 7
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Calendar
              onClick={() => setActive(!active + 7)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 8
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Briefcase
              onClick={() => setActive(!active + 8)}
              color="#81c14b"
              size="30"
            />
          </NavLink>

          <NavLink
            className={
              active === 9
                ? " d-flex align-items-center justify-content-center py-4 active"
                : " d-flex align-items-center justify-content-center py-4"
            }
          >
            <Calendar
              onClick={() => setActive(!active + 9)}
              color="#81c14b"
              size="30"
            />
          </NavLink>
        </nav>
      </>
    </div>
  );
}

export default App;
