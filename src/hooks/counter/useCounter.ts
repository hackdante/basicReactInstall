import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
interface CounterClicksUI {
    counter: number;
    clicks: number;
}

interface CounterWarningUI {
    message: string;
}


interface MaxMinCountUI {
    maxCount: number,
    minCount: number
}


const counterWarningIni = "¡All Counter is correct...!";


export const useCounter = ({ maxCount, minCount }: MaxMinCountUI) => {
    const [{ clicks, counter }, setCounterState] = useState<CounterClicksUI>({
        counter: 0,
        clicks: 0,
    });

    const [counterWarning, setCounterWarning] = useState<CounterWarningUI>({
        message: counterWarningIni,
    });

    const counterRef = useRef<HTMLHeadingElement>(null);
    const warningRef = useRef<HTMLHeadingElement>(null);
    const buttonsRefA = useRef<HTMLButtonElement>(null);
    const buttonsRefB = useRef<HTMLButtonElement>(null);


    const handlerAdd = (value: number) => {
        setCounterState(({ clicks, counter }) => {
            return counter >= maxCount
                ? {
                    counter: counter > maxCount ? maxCount : counter,
                    clicks: clicks + 1,
                }
                : {
                    counter: counter + value,
                    clicks: clicks + 1
                };
        });
    };

    const handlerLess = (value: number) => {
        setCounterState(({ clicks, counter }) => {
            return counter <= minCount
                ? {
                    counter: counter,
                    clicks: clicks + 1,
                }
                : {
                    counter: counter - value,
                    clicks: clicks + 1,
                };
        });
    };


    useLayoutEffect(() => {
        if (!buttonsRefB.current) return
        gsap.set(buttonsRefB.current, {
            boxShadow: "0px 0px 17px 0px rgba(0,0,0,0.75);",
        });
        const timeLineButtons = gsap.timeline();
        timeLineButtons.to(buttonsRefB.current, {
            scaleX: 1.4,
            scaleY: 1.4,
            yoyo: true,
            boxShadow: "5px 0px 17px 0px rgba(0,0,0,0.75);",
            repeat: -1,
        });
    }, []);



    useLayoutEffect(() => {
        if (!buttonsRefA.current) return
        gsap.set(buttonsRefA.current, {
            boxShadow: "0px 0px 17px 0px rgba(0,0,0,0.75);",
        });
        const timeLineButtons = gsap.timeline();
        timeLineButtons.to(buttonsRefA.current, {
            scaleX: 1.4,
            scaleY: 1.4,
            yoyo: true,
            boxShadow: "5px 0px 17px 0px rgba(0,0,0,0.75);",
            repeat: -1,
        });
    }, []);

    useLayoutEffect(() => {
        if (!counterRef.current) return
        if (counter >= maxCount) {
            setCounterWarning({
                message: `¡¡¡ MAXIMUN COUNTER LIMIT OF ${maxCount}!!! `,
            });
            gsap.to([counterRef.current, warningRef.current], {
                duration: 2,
                scaleX: 2,
                scaleY: 2,
                color: "#f00",
                ease: "elastic.out(1, 0.3)",
            });
        }

        if (counter <= maxCount - 1 && counter >= minCount + 1) {
            setCounterWarning({
                message: `¡¡¡ MAXIMUN COUNTER LIMIT OF ${maxCount}!!! `,
            });
            gsap.to([counterRef.current, warningRef.current], {
                duration: 1,
                scaleX: 1,
                scaleY: 1,
                color: "#525252",
                ease: "elastic.out(1, 0.3)",
            });
        }

        if (counter <= minCount) {
            setCounterWarning({
                message: `¡¡¡ MIN COUNTER LIMIT OF ${minCount}!!! `,
            });
            gsap.to([counterRef.current, warningRef.current], {
                duration: 2,
                scaleX: 2,
                scaleY: 2,
                color: "#7f46d6",
            });
        }
    }, [counter, minCount, maxCount])

    return {
        counter,
        clicks,
        counterWarning,
        handlerLess,
        handlerAdd,
        buttonsRefA,
        buttonsRefB,
        counterRef,
        warningRef
    }

}
