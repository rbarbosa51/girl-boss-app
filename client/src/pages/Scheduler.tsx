import './Scheduler.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, ViewsDirective, ViewDirective, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useRef } from 'react';
import {useStorageState} from 'react-use-storage-state';
import {AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';

export default function Scheduler() {
    const initData = [
      {
        Id: 1,
        Subject: 'My first task',
        StartTime: new Date(2023,10,15,10,0),
        EndTime: new Date(2023,10,15,12, 30)
      },
    ];
    const [data, setData] = useStorageState('Data', initData)
    const scheduleObj = useRef<ScheduleComponent>(null)
    const saveData = () => {
      scheduleObj.current?.refresh()
      //console.log(initData);
      //console.log(data);
      setData([...data])
    }
    
    return (
        <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
            <h1 className="text-3xl text-center drop-shadow-md">Scheduler</h1>
            <p className='text-center indent-4 mb-2 mx-4'>
              Use this scheduler to organize your tasks. 
            </p>
            <Separator className='w-[90%] mx-auto mt-2 mb-4 bg-slate-400' />
            <ul className='w-[50%] mx-auto list-disc my-2 text-center'>
                <li><strong>Click</strong> on a timeframe (Day, Week, Month). Then <strong>Click</strong> on a time block</li>
                <li>On the new dialog box, choose <strong>More Details</strong></li>
                <li>On the menu, fill out the corresponding fields</li>
                <li>Finally, save your data by clicking the <b>Save</b> button</li>
            </ul>
            <ScheduleComponent ref={scheduleObj} eventSettings={{dataSource: data}}>
                <ViewsDirective>
                  <ViewDirective option='Day' startHour='09:00' endHour='17:00'/>
                  <ViewDirective option='WorkWeek' startHour='09:00' endHour='17:00'/>
                  <ViewDirective option='Week' startHour='09:00' endHour='17:00'/>
                  <ViewDirective option='Month' showWeekend={false}/>
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
            <div className='flex justify-center mt-4'>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant={"outline"} onClick={() => saveData()}>Save Data</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Saved!</AlertDialogTitle>
                    <AlertDialogDescription>Your schedule has been saved</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>OK</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            
        </Card>
    )
}