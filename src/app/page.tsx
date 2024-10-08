import Banner from "@/components/Banner";
import Forrent from "@/components/Forrent";
import Forsale from "@/components/Forsale";

export default function Home() {
  return (
    <section className="mx-1">
      <Banner />

      <Forsale />
      <Forrent />
    </section>
  );
}
