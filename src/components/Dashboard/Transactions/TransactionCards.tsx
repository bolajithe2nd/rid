import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "@/components/ui/button";

const TransactionCards = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[20rem_auto_auto]">
      {/* Item 1 */}
      <Card className="border border-zinc-200 rounded-md shadow-md h-fit">
        <CardHeader>
          <CardTitle>Your Transactions</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our server.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="bg-blue-600 text-white hover:bg-blue-800 w-fit">
            New Transaction
          </Button>
        </CardContent>
      </Card>

      {/* Item 2 */}
      <Card className="border border-zinc-200 rounded-md shadow-md h-fit">
        <CardHeader>
          <CardTitle>This week</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-blue-600 text-5xl font-bold">$2,751</h1>
          <p className="text-sm text-muted-foreground">
            50% compared to last week
          </p>
          <div className="bg-blue-200 w-full md:w-36 h-3 rounded-full overflow-hidden mt-2 ">
            <div className="bg-blue-600 rounded-full h-[100%] w-[70%]"></div>
          </div>
        </CardContent>
      </Card>

      {/* Item 3 */}
      <Card className="border border-zinc-200 rounded-md shadow-md h-fit">
        <CardHeader>
          <CardTitle>This month</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-blue-600 text-5xl font-bold">$9,547</h1>
          <p className="text-sm text-muted-foreground">
            80% compared to last week
          </p>
          <div className="bg-blue-200 w-full md:w-36 h-3 rounded-full overflow-hidden mt-2">
            <div className="bg-blue-600 rounded-full h-[100%] w-[70%]"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionCards;
