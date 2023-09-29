import './Kanban.css';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import {data} from '@/data/kanbanData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Kanban() {


  return (
    
    <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
      <h1 className="text-3xl font-Baskervville text-center drop-shadow-md">Task Board</h1>
      <p className='text-center indent-4 mb-4 mx-4'>
        Drag and drop tasks from column to columns. Double Click a task to edit them. Click the "Add a Task" button to add a new tasks.
      </p>
      <KanbanComponent id='kanban' keyField='Status' dataSource={data} cardSettings={{contentField: "Summary", headerField: "Id"}}>
        <ColumnsDirective>
          <ColumnDirective headerText='To do' keyField='Open' />
          <ColumnDirective headerText='In Progress' keyField='InProgress' />
          <ColumnDirective headerText='Testing' keyField='Testing' />
          <ColumnDirective headerText='Close' keyField='Close' />
        </ColumnsDirective>
      </KanbanComponent>
      <div className='flex justify-center mt-4'>
      <Button className='mx-auto'>Add a task</Button>

      </div>
    </Card>
  )
}

export default Kanban
