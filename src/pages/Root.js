import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>Root</h1>
      <ul>
        <li>
          <NavLink to="" className={({isActive})=>isActive?'bg-black text-white': undefined} end>All Users</NavLink>
        </li>
        <li>
          <NavLink to="create" className={({isActive})=>isActive?'bg-black text-white':'text-blue-950'}>Create User</NavLink>
        </li>
      </ul>

      <br />
      <hr />
      <Outlet/>
    </>
  );
}