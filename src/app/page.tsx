import Image from "next/image";
import { Cormorant } from "next/font/google";
import Header from "../../components/Header";
import Home from "../../components/Home";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cormorant",
});

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
