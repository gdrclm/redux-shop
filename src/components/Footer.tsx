import { FC } from "react";
type Props = {};
const currentYear = new Date().getFullYear();
const Footer: FC<Props> = (props) => {
  return (
    <footer>
      <p className="footer-links">
        <a href="/" target="_blank">
          View Source on Github
        </a>
        <span> / </span>
        <a href="/" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="/" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
      </p>
      <p>
        &copy; {currentYear} <strong>Food Products Shop</strong>
      </p>
    </footer>
  );
};

export default Footer;
