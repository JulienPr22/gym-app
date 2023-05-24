import { useState, useEffect } from "react";

type Props = {
  targetDate: Date;
};

const Countdown = ({ targetDate }: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate.getTime() - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timeDifference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="text-bold text-4xl text-gray-10">
      <div>
        <span>{days}</span> DAYS
      </div>
      <div>
        <span>{hours}</span> HOURS
      </div>
      <div>
        <span>{minutes}</span> MINUTES
      </div>
      <div>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span> SECONDS
      </div>
    </div>
  );
};

export default Countdown;
