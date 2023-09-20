import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {BsLightbulb} from 'react-icons/bs';

export default function App() {
  const htmlElement = document.querySelector('html')

  return (
    <div className="h-screen bg-lightPattern dark:bg-darkPattern p-4 opacity-80" >
      <Card className="backdrop-blur-lg bg-white/60 dark:bg-black/40 drop-shadow-xl mx-8">
        <CardContent className="flex justify-between">
          {/* <div className=""> */}
            <h1 className="font-Baskervville text-5xl text-pinkPrimary drop-shadow-md dark:text-pinkPrimary/50">Girl Boss App</h1>
            <Button className=" backdrop-blur-sm text-slate-900 bg-white/60 hover:bg-slate-300/60 dark:bg-white/40 drop-shadow-xl" onClick={() => htmlElement?.classList.toggle('dark')}><BsLightbulb /></Button>
          {/* </div> */}
        </CardContent>
      </Card>
    </div>
  )
}


