import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MyTabsList = () => (
  <TabsList className="grid w-full md:w-fit grid-cols-3">
    <TabsTrigger value="week">Week</TabsTrigger>
    <TabsTrigger value="month">Month</TabsTrigger>
    <TabsTrigger value="year">Year</TabsTrigger>
  </TabsList>
);
