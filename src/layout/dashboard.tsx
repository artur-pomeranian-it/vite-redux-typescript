import { NavLink, Outlet } from 'react-router-dom';

export function Dashboard() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/agenda">agenda</NavLink>
          </li>
          <li>
            <NavLink to="/settings">settings</NavLink>
          </li>
          <li>
            <NavLink to="/cards">cards</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <div className="wrapper">
          <h1>Additional TypeScript class</h1>
        </div>
        <Outlet />
      </main>
    </>
  );
}
