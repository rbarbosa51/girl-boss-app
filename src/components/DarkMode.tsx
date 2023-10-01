import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';

export default function DarkMode() {
    const htmlElement = document.querySelector('html')
    return (
        <div className='flex items-center gap-2'>
            <Switch id='dark-mode' className='dark:bg-[#f5e4e4] bg-[#f8f0f0]' onCheckedChange={() => htmlElement?.classList.toggle('dark')}/>
            <Label htmlFor='dark-mode' className='dark:text-[#f5e4e4] text-xl text-[#ebadad] drop-shadow-md '>Dark Mode</Label>
        </div>
    )
}
