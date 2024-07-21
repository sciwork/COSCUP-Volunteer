import NextLink from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: IconProp;
  to: string;
  children?: React.ReactNode;
};

const SocialLink = ({ icon, to, children }: Props) => {
  return (
    <NextLink
      className="tw-text-white tw-flex tw-items-center hover:tw-text-sky-600"
      href={to}
      target="_blank"
    >
      <div className="fa-layers fa-fw fa-3x">
        <FontAwesomeIcon icon={icon} transform="shrink-8" />
      </div>
      {children}
    </NextLink>
  );
};

export default SocialLink;
