type BonusRow = {
  label: string;
  value: string;
  textColorClass: string;
};

type DividendsBonusProps = {
  title: string;
  description: string;
  rows: BonusRow[];
};

const DividendsBonus = ({ title, description, rows }: DividendsBonusProps) => {
  return (
    <div className="bg-zinc-800 p-2 ">
      <p className="text-lg text-yellow-400"> {title} </p>{" "}
      <p className="text-sm text-zinc-400">{description}</p>
      <div className="flex flex-row w-full gap-1 mt-2 rounded-sm">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex flex-row text-sm bg-zinc-900 justify-between ${row.textColorClass} p-2 w-full rounded-sm`}
          >
            <p>{row.label}</p>
            <p>{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DividendsBonus;
