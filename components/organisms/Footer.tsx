import React from "react";
import { Container } from "../atoms/Container";
import Link from "next/link";
import { GoFundMe } from "../atoms/Logos/Logos";
import { FOOTER_LINKS, companyName } from "@/constants";
import { Button } from "../atoms/Button/Button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border-y border-y-neutral-200 py-12">
        <Container className="grid grid-cols-4 items-start gap-4">
          <div>
            <Link href="/">
              <h2 className="text-primary-200">
                <GoFundMe fill={"currentColor"} />
                {companyName}
              </h2>
            </Link>
          </div>

          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className="flex flex-col">
                {columns.links.map(({ label, url }) => (
                  <Button
                    intent="navText"
                    size="small"
                    linkUrl={url}
                    className="justify-start"
                  >
                    {label}
                  </Button>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </Container>
      </div>

      <Container className="py-12">Footer Bottom</Container>
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
