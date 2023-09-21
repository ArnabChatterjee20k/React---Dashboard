import Avatar from "../components/Avatar";
import SearchBox from "../components/SearchBox";
import { BiBell } from "react-icons/bi";
export default function Navbar() {
  return (
    <nav className="flex w-full justify-between items-center">
      <h3 className="font-monteserat font-bold text-2xl">Dashboard</h3>
      <div className="flex items-center gap-2 md:gap-6">
        <SearchBox />
        <BiBell className="text-2xl" />
        <Avatar/>
      </div>
    </nav>
  );
}
