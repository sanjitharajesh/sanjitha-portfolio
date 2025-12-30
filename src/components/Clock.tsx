import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("Local Time");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      const parts = tz.split("/");
      const city = parts[parts.length - 1]?.replace(/_/g, " ");
      setLocation(city || "Local Time");
    }

    const update = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
        }).format(now)
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-1 items-baseline leading-none text-[clamp(12px,2vw,16px)]">
      <span className="font-bold">{location},</span>
      <span className="font-medium">{time}</span>
    </div>
  );
}
