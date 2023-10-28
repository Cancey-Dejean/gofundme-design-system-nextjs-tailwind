import React from "react";
import { Container } from "../../atoms/Container";
import Link from "next/link";
import { GoFundMe, Logo } from "../../atoms/Logos/Logos";

import {
  companyName,
  socialLinks,
  legalLinks,
  appStores,
} from "../../../constants";
import { Button } from "../../atoms/Button/Button";
import Image from "next/image";
import {
  footerLinksDefault,
  legalLinksDefault,
} from "../../../constants/mockData";

export type FooterProps = {
  /**
   * Description goes here
   */
  logo?: React.ReactNode;
  /**
   * Description goes here
   */
  legalLinks?: legalLinksProps[];
  /**
   * Description goes here
   */
  footerLinks: FooterLinksProps[];
};

export type legalLinksProps = {
  label: string;
  url: string;
};

export type FooterLinksProps = {
  title: string;
  links: {
    label: string;
    url: string;
  }[];
};

export type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    url: string;
  }[];
};

const Footer = ({
  logo,
  footerLinks = footerLinksDefault,
  legalLinks = legalLinksDefault,
}: FooterProps) => {
  return (
    <footer>
      <div className="border-y border-y-neutral-200 py-12">
        <Container className="grid grid-cols-1 items-start gap-4 md:grid-cols-4">
          <Logo logo={logo} />

          {footerLinks.map(({ title, links }) => (
            <FooterColumn title={title} key={title} links={links} />
          ))}
        </Container>
      </div>

      <Container className="py-12">
        <div className="footer-bottom-grid">
          <div className="locale">
            <button
              type="button"
              className="flex h-[34px] items-center justify-center gap-[8px] rounded-lg border border-neutral-200 bg-transparent !p-2 px-4 py-3 text-[14px] font-normal text-black [transition:var(--transition-base)] hover:bg-gray-300 hover:bg-opacity-30  dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0630/5307/0560/files/us-flag.png?v=1698183921"
                alt="United States Logo"
                width={16}
                height={16}
                className="h-4 w-4 rounded-full"
              />
              United States
              <span className="text-neutral-200">·</span>
              English
            </button>
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
                    label={label}
                  />
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

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <h3 className="m-2 font-medium">{title}</h3>
      <ul className="flex flex-col">
        {links.map(({ label, url }) => (
          <Button
            intent="navText"
            size="small"
            linkUrl={url}
            className="justify-start"
            key={label}
            label={label}
          />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
