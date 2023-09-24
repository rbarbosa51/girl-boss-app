import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const box = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();
    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => navigate('/dashboard'),
            scrollTrigger: {
                trigger: box.current,
                // markers: true,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            }
        });
        tl.to(box.current, {rotation: 360, duration: 3})
            .to(box.current, {x: '500px', duration: 2})
    }, [])
    return (
        <div className='relative h-[300vh] bg-slate-500'>
            <h1 className='textStroke text-center fixed bottom-[10%] left-[50%] 
            translate-x-[-50%] text-5xl text-red-400'>Scroll Down !</h1>
            <div className='h-screen bg-red-300'>
                <h1 className='text-center text-5xl font-Baskervville'>Intro</h1>

            </div>
            <div className='h-screen bg-purple-300'>
                <div ref={box} className="w-[15%] aspect-square bg-red-800"></div>
            </div>
            
        </div>

    )
}