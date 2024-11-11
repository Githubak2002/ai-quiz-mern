import { Link } from "react-router-dom";

// --- footer link css ---
const footerLinkCss =
  "hover-cursorCSS text-blue-600 hover:text-blue-500 transition duration-200";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-center py-6 border-t-2">
      <div className="container mx-auto">

        <h2 className="text-lg mb-5">
          <span className="font"> QuizifyAI</span>
          {" "}by{" "}
          <Link
            to="https://www.linkedin.com/in/anuraglohar"
            target="blank"
            className="hover-cursorCSS gradient-text2"
          >
            Anurag
          </Link>
        </h2>

        <p className="text-sm mb-4">2024 All rights reserved.</p>
        <div className="flexCenter space-x-4 mt-4 text-xs">
          <a href="#" className={footerLinkCss}>
            Privacy Policy
          </a>
          <a href="#" className={footerLinkCss}>
            Terms of Service
          </a>
          <a href="#" className={footerLinkCss}>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
