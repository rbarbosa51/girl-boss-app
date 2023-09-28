import { Card} from "@/components/ui/card";
import { Outlet, NavLink, useNavigate} from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import DarkMode from "@/components/DarkMode";

export default function Layout() {
    const navigate = useNavigate()
    return (
        <>
        <div className="h-screen bg-lightPattern dark:bg-darkPattern p-4 opacity-80" >
            {/* backdrop-blur-lg bg-white/60 dark:bg-black/40 drop-shadow-xl mx-8 */}
            <Card className="flex flex-col backdrop-blur-sm bg-white/20 dark:bg-black/40 drop-shadow-xl mx-8">
              <div className="flex justify-between align-middle p-2">
                {/* font-Baskervville text-5xl text-pinkPrimary drop-shadow-sm dark:text-pinkPrimary */}
                <h1 className="font-Baskervville text-center text-5xl text-[#ebadad] drop-shadow-md dark:text-[#f5e4e4]">Girl Boss App</h1>
                {/* <Button className="rounded-md backdrop-blur-sm text-slate-900 bg-white/60 hover:bg-slate-300/60 dark:bg-white/40 drop-shadow-xl self-center" onClick={() => htmlElement?.classList.toggle('dark')}><BsLightbulb /></Button>  */}
                <DarkMode />
              </div>
            </Card>
            <Separator className='w-[90%] mx-auto mt-2 mb-4 bg-slate-400'/>
            <Tabs defaultValue='home' className="ml-8">
                <TabsList className="backdrop-blur-sm bg-white/40 dark:bg-black/40 drop-shadow-xl">
                    <TabsTrigger className="m-2" value="home" onClick={() => navigate('/dashboard')}>Home</TabsTrigger>
                    <TabsTrigger className="m-2" value="kanban"  onClick={() => navigate('/dashboard/kanban')}>Task Board</TabsTrigger>
                    <TabsTrigger className="m-2" value="scheduler" onClick={() => navigate('/dashboard/scheduler')}>Scheduler</TabsTrigger>
                    <TabsTrigger className="m-2" value="resources" onClick={() => navigate('/dashboard/resources')}>Resources</TabsTrigger>
                    <TabsTrigger className="m-2" value="intro" onClick={() => navigate('/')}>Intro</TabsTrigger>
                </TabsList>
            </Tabs>
            
            <Separator className='w-[90%] mx-auto my-4 bg-slate-400'/>

            <Card className="flex flex-col backdrop-blur-sm bg-white/20 dark:bg-black/40 drop-shadow-xl mx-8 mt-4">
                <Outlet />
            </Card>
        </div>
        </>
    )
}