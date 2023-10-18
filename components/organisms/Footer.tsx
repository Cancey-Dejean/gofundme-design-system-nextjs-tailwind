import React from "react";
import { Container } from "../atoms/Container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border-y border-y-neutral-200 py-12">
        <Container>Footer</Container>
      </div>

      <div className="py-12">
        <Container>Footer Bottom</Container>
      </div>
    </footer>
  );
};

export default Footer;
