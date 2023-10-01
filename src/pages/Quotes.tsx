import {quotes} from '@/data/quotesData'
import {Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

export default function Quotes() {
    return (
        <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
            <h1 className='text-3xl text-center drop-shadow-md'>Inspirational Quotes</h1>
            <p className='text-center indent-4 mb-2 mx-4'>Below are inspirational quotes.</p>
            <Table>
                <TableCaption>Quotes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Author</TableHead>
                        <TableHead>Quotes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {quotes.map((quote, i) => (
                        <TableRow key={i}>
                            <TableCell>{quote.author}</TableCell>
                            <TableCell>{quote.quote}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </Card>
    )
}