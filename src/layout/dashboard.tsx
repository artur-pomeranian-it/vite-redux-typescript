import { NavLink, Outlet, useLocation } from 'react-router-dom';

export function Dashboard() {
  // https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/#usesearchparamsstate-hook
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={`/agenda${location.search}`}>agenda</NavLink>
          </li>
          <li>
            <NavLink to={`/todos${location.search}`}>todos</NavLink>
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
