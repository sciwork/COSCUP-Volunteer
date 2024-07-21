import clsx from "clsx";
import routes from "@/configurations/routes";
import Logo from "@/components/Logo";
import MobileNavigator from "@/components/MobileNavigator";
import NavLink from "@/components/NavLink";

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  return (
    <header id="header" className={clsx("tw-z-20 tw-w-full", className)}>
      <nav
        className={clsx(
          "tw-flex tw-h-20 tw-items-center tw-px-6 tw-bg-gray-200",
        )}
        role="navigation"
      >
        <div className="tw-grow">
          <div className="desktop:tw-hidden">
            <MobileNavigator />
          </div>
          <div className="tw-hidden tw-pt-2 desktop:tw-block">
            <Logo variant="light" />
          </div>
        </div>
        <div className="tw-hidden tw-items-center tw-gap-x-8 tw-px-6 desktop:tw-flex">
          {routes
            .filter((route) => !route.disabled)
            .map((route) => (
              <NavLink key={route.path} to={route.path}>
                {route.name}
              </NavLink>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
