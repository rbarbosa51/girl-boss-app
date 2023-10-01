import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
    
    return (
        <div className="grid grid-cols-6 grid-rows-6 gap-4 justify-between">
            <Card className="bg-red-200/40 col-span-4 row-span-1 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-xl">Dashboard 1</h2>
                <p className="text-justify indent-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eius architecto dicta aliquid soluta? Alias asperiores nihil maiores voluptatum nisi ex sapiente, necessitatibus id, maxime ducimus iusto. Quis numquam sint quae, nobis voluptatem tempora assumenda modi corrupti magni placeat maxime saepe, illo fuga cumque dignissimos rerum voluptatibus doloribus est repellat.</p>
            </Card>
            <Calendar className="col-span-2 row-span-2 justify-center" />
            <Card className="col-span-4 row-span-1 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-xl">Dashboard 2</h2>
                <p className="text-justify indent-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eius architecto dicta aliquid soluta? Alias asperiores nihil maiores voluptatum nisi ex sapiente, necessitatibus id, maxime ducimus iusto. Quis numquam sint quae, nobis voluptatem tempora assumenda modi corrupti magni placeat maxime saepe, illo fuga cumque dignissimos rerum voluptatibus doloribus est repellat.</p>
            </Card>
            <Card className="col-span-4 row-span-1 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-xl">Dashboard 3</h2>
                <p className="text-justify indent-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eius architecto dicta aliquid soluta? Alias asperiores nihil maiores voluptatum nisi ex sapiente, necessitatibus id, maxime ducimus iusto. Quis numquam sint quae, nobis voluptatem tempora assumenda modi corrupti magni placeat maxime saepe, illo fuga cumque dignissimos rerum voluptatibus doloribus est repellat.</p>
            </Card>
            <Card className="col-span-2 row-span-2 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-xl">Title</h2>
                <p className="text-justify indent-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia corporis ex quos sequi distinctio assumenda impedit earum, quaerat quae!</p>
            </Card>
            <Card className="col-span-4 row-span-1 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-xl">Dashboard 4</h2>
                <p className="text-justify indent-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eius architecto dicta aliquid soluta? Alias asperiores nihil maiores voluptatum nisi ex sapiente, necessitatibus id, maxime ducimus iusto. Quis numquam sint quae, nobis voluptatem tempora assumenda modi corrupti magni placeat maxime saepe, illo fuga cumque dignissimos rerum voluptatibus doloribus est repellat.</p>
            </Card>
            

        </div>
    )
}