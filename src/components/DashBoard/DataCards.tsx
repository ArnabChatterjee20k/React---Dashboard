import { DataCardsData } from "../../data/DataCardsData";
import { DataCardsProps } from "../../types/DataCards";

export default function DataCards() {
  return (
    <div className="flex gap-10 w-full">
      {DataCardsData.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
}

function Card({ Icon, heading, value, color }: DataCardsProps) {
  return (
    <div
      className={`w-[15rem] p-7 flex flex-col rounded-3xl`}
      style={{ backgroundColor: color }}
    >
      <Icon size="2em" className="self-end" />
      <div className="flex flex-col gap-1">
        <p className="text-[15px] font-[500]">{heading}</p>
        <p className="font-bold text-2xl">{value}</p>
      </div>
    </div>
  );
}
