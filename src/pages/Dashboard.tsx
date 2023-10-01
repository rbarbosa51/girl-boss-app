import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
    
    return (
        <div className="grid grid-cols-6 grid-rows-6 gap-4 justify-between">
            <Card className="bg-red-200/40 col-span-4 row-span-1 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-2xl underline">Dashboard</h2>
                <p className="text-justify indent-4 mt-4">
                    Welcome! I sicerely hope that you can find this app useful. The sole purpose is to help you organize yourself. It is composed of a Task Board, a Scheduler, famous positive quotes, and Resource links to 
                    some great organizations. Ultimately, the main purpose is to make you feel like a <em>Girl Boss !!!</em>
                </p>
            </Card>
            <Calendar className="col-span-2 row-span-2 justify-center" />
            <Card className="col-span-4 row-span-1 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-2xl underline">Task Board</h2>
                <p className="text-justify indent-4 mt-4">
                    The Task Board is a KanBan board. It is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency. It offers a systematic approach to identifying opportunities for improving efficiency by tracking and managing work in a visual way
                </p>
            </Card>
            <Card className="col-span-4 row-span-1 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-2xl underline">Scheduler</h2>
                <p className="text-justify indent-4 mt-4">
                    Keeping a schedule establishes a predictable routine that reduces stress and improves efficiency. It makes decision-making easier, eliminates uncertainties, and builds healthy habits to manage your time and energy better. It can be a part of productivity planning and goal management.
                </p>
            </Card>
            <Card className="col-span-2 row-span-2 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-2xl underline text-center mb-2">Like my Work ?</h2>
                <p className="text-justify indent-4 mt-4">Like my work? Are you looking for a <em>Great Worker!</em> Someone who will place the mission above everything. Then feel free to contact me:</p>
                <div className="mt-4 flex justify-start"><div className="w-[50%]">Contact Me</div><div className="underline"><a target="_blank" href="https://www.linkedin.com/in/rafaelbarbosa51/">LinkedIn</a></div></div>
                <div className="mt-4 flex justify-start"><div className="w-[50%]">View my work</div><div className="underline"><a target="_blank" href="https://github.com/rbarbosa51">GitHub</a></div></div>
                <div className="mt-4 flex justify-start"><div className="w-[50%]">Email</div><div className="underline"><a target="_blank" href="mailto:rafael.barbosa51@gmail.com">Email</a></div></div>
            </Card>
            <Card className="col-span-4 row-span-1 bg-red-200/40 rounded-lg shadow-md p-4">
                <h2 className="font-bold text-2xl underline">Quotes and Resources</h2>
                <p className="text-justify indent-4 mt-4">
                    The quotes section has some quotes by inspirational women from all over the world. Read a few to improve your mood. The resource section has a lot of resources that can help you in your decision making process.
                </p>
            </Card>
            

        </div>
    )
}