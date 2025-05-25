"use client";
import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getFirstDayOfMonth = () => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    return firstDay.getDay();
  };

  const getDaysInMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
  };

  const getDaysArray = () => {
    const daysInMonth = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    // Prepend empty days to align the first day correctly
    const emptyDays = Array(firstDay).fill(null);
    return [...emptyDays, ...days];
  };

  // Function to handle changing the month
  const changeMonth = (direction: "next" | "prev") => {
    const newDate = new Date(currentDate);
    if (direction === "next") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <>
      <p className="nav-btn-primary text-4xl font-black text-center py-2">
        출석부
      </p>
      <div className="bg-zinc-900 p-6 rounded-sm max-w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => changeMonth("prev")}
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            &lt;
          </button>
          <h2 className="text-white text-lg font-semibold">
            {currentDate.toLocaleString("default", { month: "long" })}
            {currentDate.getFullYear()}
          </h2>
          <button
            onClick={() => changeMonth("next")}
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm text-white">
          <div className="font-semibold">Sun</div>
          <div className="font-semibold">Mon</div>
          <div className="font-semibold">Tue</div>
          <div className="font-semibold">Wed</div>
          <div className="font-semibold">Thu</div>
          <div className="font-semibold">Fri</div>
          <div className="font-semibold">Sat</div>

          {getDaysArray().map((day, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${
                day === null
                  ? "bg-transparent"
                  : "bg-zinc-700 hover:bg-zinc-600 cursor-pointer transition-colors sm:p-10 p-3"
              } ${day === null ? "" : "text-yellow-300"}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
