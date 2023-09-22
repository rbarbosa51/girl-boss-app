import { Button } from "@/components/ui/button";
import { Card} from "@/components/ui/card";
import {BsLightbulb} from 'react-icons/bs';
import { Outlet, NavLink} from "react-router-dom";
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu"


export default function Layout() {
    const htmlElement = document.querySelector('html')
    return (
        <>
        <div className="h-screen bg-lightPattern dark:bg-darkPattern p-4 opacity-80" >
            <Card className="backdrop-blur-lg bg-white/60 dark:bg-black/40 drop-shadow-xl mx-8">
              <div className="flex justify-between align-middle p-2">
                {/* <div className=""> */}
                  <h1 className="font-Baskervville text-5xl text-pinkPrimary drop-shadow-sm dark:text-pinkPrimary">Girl Boss App</h1>
                  <Button className="rounded-md backdrop-blur-sm text-slate-900 bg-white/60 hover:bg-slate-300/60 dark:bg-white/40 drop-shadow-xl self-center" onClick={() => htmlElement?.classList.toggle('dark')}><BsLightbulb /></Button>
                {/* </div> */}
              </div>
            </Card>
            
            <NavigationMenu className="flex justify-center mt-4 gap-4 mx-8">
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/'}>
                        <NavigationMenuLink>
                            Home
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/kanban'}>
                        <NavigationMenuLink>
                            Task Board
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/scheduler'}>
                        <NavigationMenuLink>
                            Scheduler
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <NavLink to={'/resources'}>
                        <NavigationMenuLink>
                            Resources
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