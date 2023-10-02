import { Card } from "@/components/ui/card";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import DarkMode from "@/components/DarkMode";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-lightPink dark:bg-darkPink opacity-80 px-4 py-2">
      <Card className="flex flex-col backdrop-blur-sm bg-white/20 dark:bg-black/40 drop-shadow-xl mx-8">
        <div className="flex justify-between align-middle p-2">
          <h1 className="text-center text-5xl text-[#ebadad] drop-shadow-md dark:text-[#f5e4e4]">
            Girl Boss App
          </h1>
          <DarkMode />
        </div>
      </Card>

      <Separator className="w-[90%] mx-auto mt-2 mb-4 bg-slate-400" />
      <Tabs defaultValue="home" className="ml-8 ">
        <TabsList className=" backdrop-blur-sm bg-white/40 dark:bg-black/40 drop-shadow-xl">
          <TabsTrigger
            className="m-2"
            value="home"
            onClick={() => navigate("/")}
          >
            Home
          </TabsTrigger>
          <TabsTrigger
            className="m-2"
            value="kanban"
            onClick={() => navigate("/kanban")}
          >
            Task Board
          </TabsTrigger>
          <TabsTrigger
            className="m-2"
            value="scheduler"
            onClick={() => navigate("/scheduler")}
          >
            Scheduler
          </TabsTrigger>
          <TabsTrigger
            className="m-2"
            value="quotes"
            onClick={() => navigate("/quotes")}
          >
            Quotes
          </TabsTrigger>
          <TabsTrigger
            className="m-2"
            value="resources"
            onClick={() => navigate("/resources")}
          >
            Resources
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Separator className="w-[90%] mx-auto my-4 bg-slate-400" />

      <Card className="flex flex-col backdrop-blur-sm bg-white/20 dark:bg-black/40 drop-shadow-xl mx-8 mt-4">
        <Outlet />
      </Card>
    </div>
  );
}
