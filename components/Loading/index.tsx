import { useState, useEffect } from 'react'
import SVG from './icon';

const LoadingIcon = ({ loading }: {loading:boolean}) => {
    const [fade, setFade] = useState(false);
    const [show, setShow] = useState(true);
    const [done, setDone] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    const fadeOut = () => {
        setFade(true)
        setTimeout(() => {
            setShow(false);
        }, 750)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowLogo(true);
        }, 500)
    }, [])

    useEffect(() => {
        if (loading !== undefined && !loading && done) {
            fadeOut();
        }
    }, [loading, done])

    if (show) {
        return (
            <div className={`
                bg-background
                min-h-screen
                h-full
                max-w-screen 
                absolute 
                z-50 
                overflow-hidden 
                ${(fade ? "fade-out " : "")}
            `}>  
                <div className={`grid place-items-center h-screen text-center w-screen overflow-hidden`}>
                    {showLogo ? (
                        <SVG className = "w-screen mb-16 md:mb-0 p-16 md:w-1/2 h-1/2" onAnimationIteration = {() => { 
                            setDone(true);
                            if (loading === undefined) {
                                fadeOut()
                            } 
                        }} />
                    ) : ""}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default LoadingIcon