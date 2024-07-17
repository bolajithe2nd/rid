import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, User } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white w-screen py-4 shadow sticky top-0 z-10">
      <div className="container px-6 flex items-center justify-between bg-white">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold">
          <span className="text-blue-700">Logo</span>
          <span className="text-cyan-400">ipsum</span>
        </Link>

        <div className="flex items-center gap-x-4">
          {/* Avatar */}
          <Link to="profile">
            <Avatar className="h-[35px] w-[35px]">
              {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
              <AvatarFallback className="grid place-items-center w-[35px] h-[35px] rounded-full bg-muted">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </Link>

          {/* Nav Toggle */}
          <div
            className="grid place-items-center w-[35px] h-[35px] rounded-full bg-muted lg:hidden"
            onClick={() => toggleSidebar()}
          >
            <Menu className="w-5 h-5" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
