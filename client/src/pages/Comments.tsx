import {Card} from '@/components/ui/card';
export default function Comments() {
    return (
        <Card className='p-4 bg-red-200/40 rounded-lg shadow-md'>
            <h1 className="text-3xl text-center drop-shadow-md">Positive Comments</h1>
            <p className='text-center indent-4 mb-2 mx-4'>
              Write a positive comment for others to see.
            </p>
            
        </Card>
    )
}