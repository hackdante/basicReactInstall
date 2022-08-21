import { useCounter } from "../../../hooks/counter/useCounter";


export const SimpleCounter = () => {
  const {
    clicks,
    counter,
    counterWarning,
    handlerAdd,
    handlerLess,
    counterRef,
    buttonsRefA,
    buttonsRefB,
    warningRef,
  } = useCounter({
    maxCount: 15,
    minCount: 0,
  });

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
      <button ref={buttonsRefA} onClick={() => handlerAdd(1)}>
        Add + 1
      </button>
      <button ref={buttonsRefB} onClick={() => handlerLess(1)}>
        Less - 1
      </button>
    </div>
  );
};
