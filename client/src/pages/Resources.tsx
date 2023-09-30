import type {ResourceType} from '@/data/resourcesData'
import {resourceData} from '@/data/resourcesData'
import {Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

export default function Resources() {
    return (
        <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
            <h1 className='text-3xl text-center drop-shadow-md'>Resources</h1>
            <p className='text-center indent-4 mb-2 mx-4'>Below are a list of resource sites that can help.</p>
            <Table>
                <TableCaption>Resources</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Organization</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>URL</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {resourceData.map((resource, i) => (
                        <TableRow key={i}>
                            <TableCell>{resource.org}</TableCell>
                            <TableCell>{resource.description}</TableCell>
                            <TableCell><a href={resource.url} target='_blank'>{resource.url}</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </Card>
    )
}