import './Kanban.css';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import {data} from '@/data/kanbanData';
import type {dataType} from '@/data/kanbanData'
import { Card } from '@/components/ui/card';


function Kanban() {
    
    const addContent = (newData: dataType) => {
        const size = data.length;
        data.push({Id: size, Status: newData.Status, Summary: newData.Summary})
    }

  return (
    
    <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
      <h1 className="text-3xl font-Baskervville text-center drop-shadow-md">Task Board</h1>
      <p className='text-center indent-4 mb-2 mx-4'>
        This Task Board (Kanban) board will help you organize your tasks based on completion status. This can be extremely useful in organizing your ideas and relieve stress.
        <strong>Drag and drop</strong> tasks from column to columns. <strong>Double click</strong> a task to edit it. On the dialog box, write your task under summary and then click <strong>save</strong>.
      </p>
      <KanbanComponent id='kanban' keyField='Status' dataSource={data} cardSettings={{contentField: "Summary", headerField: "Id"}}>
        <ColumnsDirective>
          <ColumnDirective headerText='To do' keyField='ToDo' />
          <ColumnDirective headerText='Started' keyField='Started' />
          <ColumnDirective headerText='In Progress' keyField='InProgress' />
          <ColumnDirective headerText='Done' keyField='Done' />
        </ColumnsDirective>
      </KanbanComponent>
      
    </Card>
  )
}

export default Kanban
