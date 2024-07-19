import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

function NotFound() {
  return (
    <div className="bg-white dark:bg-slate-800 flex items-center justify-center h-screen">
      <div className="grid gap-y-8 max-w-[400px]">
        <div className="grid gap-y-1">
          <h1 className="text-black text-3xl font-semibold dark:text-white">
            Page Not Found
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            The page you are requesting for could not be found. Click{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              here
            </Link>{" "}
            to return to home page.
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-800" asChild>
          <Link to="/">Return to home page</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
