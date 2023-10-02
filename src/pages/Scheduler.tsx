import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  ViewsDirective,
  ViewDirective,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import { useStorageState } from "react-use-storage-state";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/ui/button";

export default function Scheduler() {
  const initData = [
    {
      Id: 1,
      Subject: "My first task",
      StartTime: new Date(2023, 10, 15, 10, 0),
      EndTime: new Date(2023, 10, 15, 12, 30),
    },
  ];
  const [data, setData] = useStorageState("Data", initData);
  const scheduleObj = useRef<ScheduleComponent>(null);
  const saveData = () => {
    scheduleObj.current?.refresh();
    setData([...data]);
  };

  return (
    <Card className="p-4 bg-red-200/40 rounded-lg shadow-md">
      <h1 className="text-3xl text-center drop-shadow-md">Scheduler</h1>
      <p className="text-center indent-4 mb-2 mx-4">
        Use this scheduler to organize your tasks.
      </p>
      <Separator className="w-[90%] mx-auto mt-2 mb-4 bg-slate-400" />
      <ul className="w-[50%] mx-auto list-disc my-2 text-center">
        <li>
          <strong className="underline">Click</strong> on a timeframe (Day,
          Week, Month). Then <strong>Click</strong> on a time block
        </li>
        <li>
          On the new dialog box, choose{" "}
          <strong className="underline">More Details</strong>
        </li>
        <li>On the menu, fill out the corresponding fields</li>
        <li>
          Finally, save your data by clicking the{" "}
          <strong className="underline">Save Data</strong> button
        </li>
      </ul>
      <ScheduleComponent ref={scheduleObj} eventSettings={{ dataSource: data }}>
        <ViewsDirective>
          <ViewDirective option="Day" startHour="09:00" endHour="17:00" />
          <ViewDirective option="WorkWeek" startHour="09:00" endHour="17:00" />
          <ViewDirective option="Week" startHour="09:00" endHour="17:00" />
          <ViewDirective option="Month" showWeekend={false} />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      <div className="flex justify-center mt-4">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button variant={"outline"} onClick={() => saveData()}>
              Save Data
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
              <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <AlertDialog.Description className="text-center mb-4 text-slate-400">
                  Data has been saved!
                </AlertDialog.Description>
                <div className="flex justify-center gap-[25px]">
                  <AlertDialog.Cancel asChild>
                    <button className="inline-flex h-[35px] text-slate-600 items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                      OK
                    </button>
                  </AlertDialog.Cancel>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </Card>
  );
}
