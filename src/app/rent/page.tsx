import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Pagebanner from "@/components/Pagebanner";
import React from "react";
import bannersell from "@/assets/images/rent-banner.png";
import dynamic from "next/dynamic";

const page = () => {
  const Maps = dynamic(() => import("@/components/mapDetail"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });
  return (
    <section className="mx-2 my-1 h-full w-full">
      <Pagebanner
        img={bannersell}
        title="Explore a Wide Range of Houses Just for You"
        desc=" Find houses for sale near you. View photos, open house information,
          and property details for nearby real estate."
        className="bg-gradient-to-r from-cyan-100"
      />
      <Container className="my-2 flex gap-1">
        <div className="z-0 h-[400px] w-[40%] bg-slate-50 p-3">
          <Maps posix={[7.1999992, 38.5999976]} />
        </div>
        <div className="w-[60%]">
          <Grid />
        </div>
      </Container>
    </section>
  );
};

export default page;
