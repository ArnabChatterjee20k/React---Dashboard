import CustomLegendsProps from "../../types/CustomLegends";
export default function CustomLegends({ color, title }: CustomLegendsProps) {
  return (
    <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-[13px]">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{title}</span>
    </div>
  );
}
