import './Kanban.css';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import {data} from '@/data/kanbanData';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {useStorageState} from 'react-use-storage-state';
import type {dataType} from '@/data/kanbanData'
import { Button } from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

function Kanban() {
  const [saved, setSaved] = useStorageState('Kanban', data)
  const saveData = () => {
    setSaved([...saved])
  }
  const addData = () => {
    const selected = document.getElementById('select') as HTMLSelectElement;
    const selectedSummary = document.getElementById('summary') as HTMLInputElement;
    const selectedStatus = selected.value;
    const textSummary = selectedSummary.value;
    if (textSummary === '') {
      alert("Write a task text")
      return;
    }
    const newData:dataType = {Id: saved.length + 1, Status: selectedStatus, Summary: textSummary}
    setSaved(aData => [...aData,newData])
    selectedSummary.value = '';
  }
  return (
    
    <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
      <h1 className="text-3xl text-center drop-shadow-md">Task Board</h1>
      <p className='text-center indent-4 mb-2 mx-4'>
        This Task Board (Kanban) board will help you organize your tasks based on completion status. This can be extremely useful in organizing your ideas and relieve stress.
      </p>
      <Separator className='w-[90%] mx-auto mt-2 mb-4 bg-slate-400' />
      <ul className='w-[50%] mx-auto list-disc my-2 text-center'>
        <li><strong>Drag and drop</strong> tasks from column to columns.</li>
        <li><strong>Double click</strong> a task to edit it.</li>
        <li>On the dialog box, write your task under summary and then click <strong>save</strong>.</li>
      </ul>
      <KanbanComponent id='kanban' keyField='Status' dataSource={saved} cardSettings={{contentField: "Summary", headerField: "Id"}}>
        <ColumnsDirective>
          <ColumnDirective headerText='To do' keyField='ToDo' />
          <ColumnDirective headerText='Started' keyField='Started' />
          <ColumnDirective headerText='In Progress' keyField='InProgress' />
          <ColumnDirective headerText='Done' keyField='Done' />
        </ColumnsDirective>
      </KanbanComponent>
      <div className="my-4 flex flex-col gap-2">
        <div className='flex items-center justify-center gap-4'>
        <Label htmlFor="summary" className="">
            Summary
        </Label>
        <Input id="summary"  placeholder='Write task here' className="w-[30%]" />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Label htmlFor="status" className="">Status</Label>
          <div>
            <select id='select' name='select' className='dark:text-slate-600'>
              <optgroup label='Task Status'>
                <option value={'ToDo'}>To Do</option>
                <option value="Started">Started</option>
                <option value="InProgress">In Progress</option>
                <option value="Done">Done</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Button variant={"outline"} className='mx-auto' onClick={() => {addData()}}>Add Task</Button>
          <Separator className='w-[90%] mx-auto mt-1 bg-slate-400' />
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Button variant={'outline'} className='mx-auto' onClick={() => {saveData()}}>Save Data</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
                <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                  <AlertDialog.Description className='text-center mb-4 text-slate-400'>Data has been saved!</AlertDialog.Description>
                  <div className="flex justify-center gap-[25px]">
                  <AlertDialog.Cancel asChild>
                    <button className="inline-flex h-[35px] text-slate-600 items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">OK</button>
                  </AlertDialog.Cancel>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Portal>
          </AlertDialog.Root>
          
        </div>
      </div>

    </Card>
  )
}

export default Kanban

