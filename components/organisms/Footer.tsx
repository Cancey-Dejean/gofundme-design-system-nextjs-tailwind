import React from "react";
import { Container } from "../atoms/Container";
import Link from "next/link";
import { GoFundMe } from "../atoms/Logos/Logos";
import {
  footerLinks,
  companyName,
  socialLinks,
  legalLinks,
  appStores,
} from "@/constants";
import { Button } from "../atoms/Button/Button";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border-y border-y-neutral-200 py-12">
        <Container className="grid grid-cols-1 items-start gap-4 md:grid-cols-4">
          <div>
            <Link href="/">
              <h2 className="text-primary-200">
                <GoFundMe fill={"currentColor"} />
              </h2>
            </Link>
          </div>

          {footerLinks.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className="flex flex-col">
                {columns.links.map(({ label, url }) => (
                  <Button
                    intent="navText"
                    size="small"
                    linkUrl={url}
                    className="justify-start"
                    key={label}
                  >
                    {label}
                  </Button>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </Container>
      </div>

      <Container className="py-12">
        <div className="footer-bottom-grid">
          <div className="locale">
            <Button
              intent="tertiary"
              size="small"
              linkUrl="/"
              className="rounded-lg !p-2 text-[14px] font-normal"
            >
              <Image
                src="/images/us-flag.png"
                alt="United States Logo"
                width={16}
                height={16}
                className="h-4 w-4 rounded-full"
              />
              United States
              <span className="text-neutral-200">·</span>
              English
            </Button>
          </div>

          <ul className="socials">
            {socialLinks.map(({ label, url, icon }) => (
              <li key={label}>
                <Link href={url}>
                  {icon ? (
                    <>
                      <span className="sr-only">{label}</span>
                      <span>{icon}</span>
                    </>
                  ) : (
                    <span>{label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="legal flex flex-col gap-2 text-neutral-300 md:flex-row md:items-center">
            &copy; 2010-{new Date().getFullYear()} {companyName}
            <ul className="flex flex-col gap-2 text-black sm:flex-row sm:items-center">
              {legalLinks.map(({ label, url }) => (
                <li key={label}>
                  <Button
                    intent="navText"
                    size="small"
                    linkUrl={url}
                    className="justify-start"
                    key={label}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="stores">
            {appStores.map(({ label, url, imgSrc }) => (
              <Link href={url} key={label} target="_blank">
                <Image
                  src={imgSrc}
                  height={34}
                  width={117}
                  className="h-auto w-auto object-contain "
                  alt={label}
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="m-2 font-medium">{title}</h3>
      {children}
    </div>
  );
};

export default Footer;
