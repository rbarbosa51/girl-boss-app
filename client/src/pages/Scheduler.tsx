import './Scheduler.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, ViewsDirective, ViewDirective, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useRef } from 'react';
import {useStorageState} from 'react-use-storage-state';

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
    const doSomething = () => {
      //initData[0].Subject = "New Task Name  HOOOWOWO!!!"
      scheduleObj.current?.refresh()
      // scheduleObj.current?.exportToExcel();
      console.log(initData);
      console.log(data);
      setData([...data])
    }
    
    

//     const onActionBegin = (args: any) => {
//       if (args.requestType === 'toolbarItemRendering') {
//           let exportItem = {
//               align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
//               text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
//           };
//           args.items.push(exportItem);
//       }
//   }
//   const onExportClick = () => {
//     let exportValues = {
//       fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'Location']
//   };
//     scheduleObj.current?.exportToExcel(exportValues);
// }


    return (
        <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
            <h1 className="text-3xl font-Baskervville text-center drop-shadow-md">Scheduler</h1>
            <p className='text-center indent-4 mb-2 mx-4'>
              Use this scheduler to organize your tasks. 
              
            </p>
            <Separator className='w-[90%] mx-auto mt-2 mb-4 bg-slate-400' />
            <ul className='w-[50%] mx-auto list-disc my-2 text-center'>
                <li><strong>Click</strong> on a timeframe (Day, Week, Month)</li>
                <li><strong>Click</strong> on a time block</li>
                <li>On the new dialog box, choose <strong>More Details</strong></li>
                <li>On the menu, fill out the corresponding fields</li>
            </ul>

            {/* eventSettings={{dataSource: data,}} */}
            <ScheduleComponent ref={scheduleObj} eventSettings={{dataSource: data}}>
                <ViewsDirective>
                  <ViewDirective option='Day' startHour='09:00' endHour='17:00'/>
                  <ViewDirective option='WorkWeek' startHour='09:00' endHour='17:00'/>
                  <ViewDirective option='Week' startHour='09:00' endHour='17:00'/>
                  <ViewDirective option='Month' showWeekend={false}/>
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
            <button onClick={() => doSomething()}>CLick me</button>
        </Card>
    )
}