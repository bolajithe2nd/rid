import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "@/components/ui/button";

const RefundCards = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[20rem_auto_auto]">
      {/* Item 1 */}
      <Card className="border border-zinc-200 rounded-md shadow-md h-fit">
        <CardHeader>
          <CardTitle>Refunds</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="bg-blue-600 text-white hover:bg-blue-800 w-fit uppercase">
            Make a new refund
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RefundCards;
