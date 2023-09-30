import './Kanban.css';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import {data} from '@/data/kanbanData';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import {useState} from 'react';
import type {dataType} from '@/data/kanbanData'
import { Button } from '@/components/ui/button';

function Kanban() {
  const [sData, setSData] = useState<dataType[]>(data);
  const addData = (text:string) => {
    const newData:dataType = {Id: sData.length + 1, Status: 'InProgress', Summary: text}
    setSData(aData => [...aData,newData])
    console.log(sData);
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
      <KanbanComponent id='kanban' keyField='Status' dataSource={sData} cardSettings={{contentField: "Summary", headerField: "Id"}}>
        <ColumnsDirective>
          <ColumnDirective headerText='To do' keyField='ToDo' />
          <ColumnDirective headerText='Started' keyField='Started' />
          <ColumnDirective headerText='In Progress' keyField='InProgress' />
          <ColumnDirective headerText='Done' keyField='Done' />
        </ColumnsDirective>
      </KanbanComponent>
      <Button onClick={() => addData('Test Success')}>Add Task</Button>
    </Card>
  )
}

export default Kanban
