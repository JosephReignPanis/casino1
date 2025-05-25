import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SnifflingBoardProps {
  title: string;
  round: string;
  videoSrc: string;
  buttons: { label: string; color: string }[];
  categoryrows: { category: string; options: Option[] }[]; // Fixed syntax here
}

const SnifflingBoard: React.FC<SnifflingBoardProps> = ({
  title,
  round,
  videoSrc,
  buttons,
  categoryrows, // Updated to match the props
}) => {
  return (
    <>
      {/* Video Section */}
      <div className="w-full h-[200px] sm:h-[400px] bg-zinc-800 mx-auto">
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Content Section */}
      <div className="w-full bg-neutral-800 p-2 rounded-lg my-2">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between w-full bg-zinc-900 p-2 items-center gap-2 rounded-lg">
          <p className="text-white text-sm text-center sm:text-left">
            {title} - {round}
          </p>
          <div className="flex flex-row gap-2">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`px-4 py-1 rounded text-black ${btn.color}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Rows */}
        {categoryrows.map((categoryRow, index) => (
          <div key={index}>
            {/* Category */}
            <div className="flex flex-row py-2">
              <p className="px-4 py-1 border-l-4 border-l-white">
                {categoryRow.category}
              </p>
            </div>

            {/* Option Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full bg-zinc-900 p-2 rounded-lg">
              {categoryRow.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex flex-col items-center gap-2 bg-zinc-800 rounded-lg overflow-hidden w-full"
                >
                  <div className="bg-zinc-700 w-full text-center text-white font-semibold py-1">
                    {option.value}
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-green-300 text-white text-lg my-2">
                    {option.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SnifflingBoard;
