import {
  faDiscord,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/Container";
import SocialLink from "@/components/SocialLink";

const Footer = () => {
  return (
    <footer className="tw-w-full">
      <Container className=" tw-bg-sky-950 tw-text-white tw-py-10">
        <div className="tw-flex tw-flex-row">
          <div className="tw-basis-1/2">
            <h2 className="tw-text-3xl tw-font-yk">Follow us</h2>
            <div className="tw-my-2">
              <SocialLink
                icon={faTwitter}
                to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
              >
                @sciwork
              </SocialLink>
              <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD">
                Discord
              </SocialLink>
              <SocialLink
                icon={faSquareFacebook}
                to="https://www.facebook.com/sciworkdev"
              >
                Facebook
              </SocialLink>
            </div>
          </div>
          <div className="tw-basis-1/2">
            <h2 className="tw-text-3xl tw-font-yk">Contact us</h2>
            <div className="tw-my-2">
              <a
                className="hover:tw-cursor-pointer hover:tw-text-sky-600"
                target="_blank"
                href="mailto:contact@sciwork.dev"
              >
                contact@sciwork.dev
              </a>
            </div>
          </div>
        </div>
        <div className="tw-mt-8">Website is powered by Next.js.</div>
      </Container>
    </footer>
  );
};

export default Footer;
