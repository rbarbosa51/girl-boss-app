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
import {AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog"

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
      <h1 className="text-3xl font-Baskervville text-center drop-shadow-md">Task Board</h1>
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={'outline'} className='mx-auto' onClick={() => {saveData()}}>Save Data</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Saved!</AlertDialogTitle>
                <AlertDialogDescription>Your tasks have been saved</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>OK</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

    </Card>
  )
}

export default Kanban

