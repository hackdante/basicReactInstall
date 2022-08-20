import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface SimpleCounterUI {
  counterIni: number;
}

interface CounterClicksUI {
  counter: number;
  clicks: number;
}

interface CounterWarningUI {
  message: string;
}

const MAX_COUNTER = 12;
const MIN_COUNTER = 0;

const counterWarningIni = "¡All Counter is correct...!";

export const SimpleCounter = ({ counterIni = 0 }: SimpleCounterUI) => {
  const [{ clicks, counter }, setCounterState] = useState<CounterClicksUI>({
    counter: counterIni,
    clicks: 0,
  });

  const [counterWarning, setCounterWarning] = useState<CounterWarningUI>({
    message: counterWarningIni,
  });

  const counterRef = useRef<HTMLHeadingElement>(null);
  const warningRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLButtonElement>(null);
  const handlerAdd = (value: number) => {
    setCounterState(({ clicks, counter }) => {
      return counter >= MAX_COUNTER
        ? {
            counter: counter,
            clicks: clicks + 1,
          }
        : { counter: counter + value, clicks: clicks };
    });
  };

  const handlerLess = (value: number) => {
    setCounterState(({ clicks, counter }) => {
      return counter <= MIN_COUNTER
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

  gsap.set(buttonsRef.current, {
    boxShadow: "0px 0px 17px 0px rgba(0,0,0,0.75);",
  });
  useEffect(() => {
    const timeLineButtons = gsap.timeline();
    timeLineButtons.to(buttonsRef.current, {
      scaleX: 1.4,
      scaleY: 1.4,
      yoyo: true,
      boxShadow: "5px 0px 17px 0px rgba(0,0,0,0.75);",
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    if (counter >= MAX_COUNTER) {
      setCounterWarning({
        message: `¡¡¡ MAXIMUN COUNTER LIMIT OF ${MAX_COUNTER}!!! `,
      });
      gsap.to([counterRef.current, warningRef.current], {
        duration: 2,
        scaleX: 2,
        scaleY: 2,
        color: "#f00",
        ease: "elastic.out(1, 0.3)",
      });
    }

    if (counter <= MAX_COUNTER - 1 && counter >= MIN_COUNTER + 1) {
      setCounterWarning({
        message: `¡¡¡ MAXIMUN COUNTER LIMIT OF ${MAX_COUNTER}!!! `,
      });
      gsap.to([counterRef.current, warningRef.current], {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        color: "#525252",
        ease: "elastic.out(1, 0.3)",
      });
    }

    if (counter <= MIN_COUNTER) {
      setCounterWarning({
        message: `¡¡¡ MIN COUNTER LIMIT OF ${MIN_COUNTER}!!! `,
      });
      gsap.to([counterRef.current, warningRef.current], {
        duration: 2,
        scaleX: 2,
        scaleY: 2,

        color: "#7f46d6",
      });
    }
  }, [counter]);

  return (
    <div>
      SimpleCounter
      <div ref={counterRef}>
        --Counter: <b>{counter}</b>
      </div>
      <div>
        --- Clicks:<b> {clicks}</b>
      </div>
      <div ref={warningRef}>{counterWarning.message}</div>
      <hr />
      <button ref={buttonsRef} onClick={() => handlerAdd(2)}>
        Add + 2
      </button>
      <button ref={buttonsRef} onClick={() => handlerLess(2)}>
        Less - 2
      </button>
    </div>
  );
};
