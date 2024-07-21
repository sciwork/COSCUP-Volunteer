import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
};

const Banner = ({ src }: Props) => {
  return (
    <div className="tw-relative tw-w-full tablet:tw-h-[500px] tw-h-96">
      <Image
        className="tw-object-center tw-object-cover"
        src={src}
        alt="Banner"
        fill
      />
    </div>
  );
};

export default Banner;
