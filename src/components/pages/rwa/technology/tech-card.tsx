interface TechCardProps {
  logo: string;
  name: string;
  description: string;
}

export function TechCard({ logo, name, description }: TechCardProps) {
  return (
    <div className="border-dark-gray border-b border-l p-5 md:p-6 2xl:p-8">
      <div className="size-[60px] overflow-hidden rounded-full md:size-[80px]">
        <img
          src={logo}
          alt={name}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="my-5 text-2xl uppercase leading-[30px] text-black">
        {name}
      </h3>

      <p className="text-lg leading-[140%] text-black">{description}</p>
    </div>
  );
}

export default TechCard;
