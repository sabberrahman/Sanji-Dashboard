import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/shared/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
    <Header/>
    <Hero/>
    </div>
  );
}
