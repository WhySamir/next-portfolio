import { TechCardItemType } from "_lib/constants";
import Image from "next/image";

const TechCard = ({ cardInfo }: { cardInfo: TechCardItemType }) => {
  const { name, description, imageUrl, bgColor } = cardInfo;

  return (
    <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[#2c2c2c]   hover:border-[#424242] bg-[#202020] hover:bg-[#2c2c2c]    transition-colors duration-200">
      <div className={`p-3 ${bgColor} rounded-lg w-fit`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={`size-8 `}
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">{name}</h4>
        <p className=" text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TechCard;
