import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon, FileDown, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterExportProps {
  status: string;
  amount: string;
  date: Date | undefined;
  setStatus: Dispatch<SetStateAction<string>>;
  setAmount: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  resetAll: () => void;
}

export const FilterExport: React.FC<FilterExportProps> = ({
  status,
  amount,
  date,
  setStatus,
  setAmount,
  setDate,
  resetAll,
}) => {
  return (
    <div className="flex items-center gap-x-1 justify-end relative">
      {/*====== Export ======*/}
      <Button variant="outline" className="rounded-lg cursor-pointer py-1 px-3">
        <FileDown className="w-4 h-4 mr-1" />
        <span className="text-xs">Export</span>
      </Button>

      {/*====== Filter ======*/}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="rounded-lg cursor-pointer py-1 px-3"
          >
            <Filter className="w-4 h-4 mr-1" />
            <span className="text-xs">Filter</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="grid gap-y-6 p-2">
            {/* Status */}
            <div className="grid gap-y-2">
              <Label>Status</Label>
              <Select
                onValueChange={(newStatus) => setStatus(newStatus)}
                value={status}
              >
                <SelectTrigger className="w-full focus:ring-blue-600">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amount */}
            <div className="grid gap-y-2">
              <Label>Amount</Label>
              <Input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Type amount"
                className="focus-visible:ring-blue-600"
              />
            </div>

            {/* Date Picker */}
            <div className="grid gap-y-2">
              <Label>Date Period</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>All time</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Save as Default Filter */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="data-[state=checked]:bg-blue-600"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none"
              >
                Save as default filter
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 items-center justify-between">
              <Button variant="ghost" onClick={resetAll}>
                Reset
              </Button>
              <Button>Filter</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
