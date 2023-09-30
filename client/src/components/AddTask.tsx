import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddTask() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>Add Task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        Add a task to the board.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="summary" className="text-right">
                            Summary
                        </Label>
                        <Input id="summary" defaultValue="Write here" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">Status</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a Task Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ToDo">To Do</SelectItem>
                                <SelectItem value="Started">Started</SelectItem>
                                <SelectItem value="InProgress">In Progress</SelectItem>
                                <SelectItem value="Done">Done</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button>Add a task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


/*
<Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant='outline'>Add Task</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    Add a task to the board.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="summary" className="text-right">
                        Summary
                    </Label>
                    <Input id="summary" defaultValue="Write here" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">Status</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a Task Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ToDo">To Do</SelectItem>
                            <SelectItem value="Started">Started</SelectItem>
                            <SelectItem value="InProgress">In Progress</SelectItem>
                            <SelectItem value="Done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DialogFooter>
                <Button type='submit' onSubmit={() => setOpen(false)}>Add a task</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>




*/
