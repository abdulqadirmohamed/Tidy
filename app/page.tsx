import Image from "next/image";
import HomePage from "../components/Home";
import Solutions from "@/components/Solutions";
import Sector from "@/components/Sector";

export default function Home() {
  return (
   <main>
    <HomePage/>
    <Solutions/>
    <Sector/>
   </main>
  );
}
