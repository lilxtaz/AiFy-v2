import { Poppins } from "next/font/google";
import "../../../styles/globals.css";
import ScrollToTop from "../../../components/ScrollToTop";
import Navbar from "../../../components/Navbar";
import Footer from "../../../sections/Footer";
import AboutHero from "../../../sections/AboutHero";
import BlogSection from "../../../sections/BlogSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "800"],
});

export default function Blog() {
  return (
    <main className={poppins.className}>
      <ScrollToTop />

      <div className="relative">
        <Navbar
          color="text-black"
          src="\logo_black.svg"
          main={"black"}
          hover={"gray-600"}
          textMain={"white"}
          textHover={"text-color"}
        />
      </div>

      <div>
        <AboutHero />
      </div>

      <div>
        <BlogSection />
      </div>

      <Footer
        textMain={"black"}
        bgMain={"white"}
        bgHover={"gray-600"}
        textHover={"white"}
      />
    </main>
  );
}
