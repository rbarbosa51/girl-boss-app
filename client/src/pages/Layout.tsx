import { Button } from "@/components/ui/button";
import { Card} from "@/components/ui/card";
import {BsLightbulb} from 'react-icons/bs';
import { Outlet, NavLink} from "react-router-dom";
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu"
import DarkMode from "@/components/DarkMode";

export default function Layout() {
    //const htmlElement = document.querySelector('html')
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
            
            <NavigationMenu className="flex justify-center mt-4 gap-4 mx-8">
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/dashboard'}>
                        <NavigationMenuLink>
                            Home
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/dashboard/kanban'}>
                        <NavigationMenuLink>
                            Task Board
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/dashboard/scheduler'}>
                        <NavigationMenuLink>
                            Scheduler
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/dashboard/resources'}>
                        <NavigationMenuLink>
                            Resources
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                {/* Delete in future */}
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/'}>
                        <NavigationMenuLink>
                            Intro
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
            </NavigationMenu>
            
            <Card className="backdrop-blur-lg bg-white/60 dark:bg-black/40 drop-shadow-xl mx-8 mt-4">
                <Outlet />
            </Card>
        </div>
        </>
    )
}