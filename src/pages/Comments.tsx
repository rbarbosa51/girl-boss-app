import {Card} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import {Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow} from '@/components/ui/table';
interface IMessage {
    id: number
    name: string
    message: string
}
export default function Comments() {
    const [messages, setMessages] = useState<IMessage[] | null>(null);
    useEffect(() => {
        (async () => {
            const data = await fetch('/mongo');
            const json = await data.json()
            setMessages(json)
        })()
    }, [])
    const sendData = async () => {
        const data = {
            name: "Rafael"
        }
        console.log(JSON.stringify(data));
        await fetch('/mongo', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: data as BodyInit
        })
    }
    return (
        <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
            <h1 className="text-3xl text-center drop-shadow-md">Positive Comments</h1>
            <p className='text-center indent-4 mb-2 mx-4'>
              Be Positive! Write a positive comment for others to see. Make your words a force for good!
            </p>
            <Separator className='w-[90%] mx-auto mt-2 mb-4 bg-slate-400'/>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center justify-center'>
                    <Label>Write a name or nickname:</Label>
                    <Input id='name' className='w-[50%]' placeholder='write a nickname' />
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <Label htmlFor='message'>Write a positive messsage:</Label>
                    <Input id='message' className='w-[50%]' placeholder='write a message' />
                </div>
                <Button onClick={() => {sendData()}} className='w-[20%] mx-auto'>Add Message</Button>
            </div>
            <Separator className='w-[90%] mx-auto mt-2 mb-4 bg-slate-400'/>
            <div>
                <Table>
                    <TableCaption>Positive Messages</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[30%]'>Name</TableHead>
                            <TableHead>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages && messages?.map((message, i) => (
                            <TableRow key={i} >
                                <TableCell className='w-[30%]'>{message.name}</TableCell>
                                <TableCell>{message.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </div>
        </Card>
    )
}