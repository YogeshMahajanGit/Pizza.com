import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=" flex items-center justify-between bg-yellow-400 border-b uppercase px-4 py-3 border-stone-200 sm:px-6 ">
      <Link to="/" className="-tracking-[-0.2em]">
        Pizz.com
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
