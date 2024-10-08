import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Pagebanner from "@/components/Pagebanner";
import Link from "next/link";
import React from "react";
import bannersell from "@/assets/images/rent-banner.png";

const page = () => {
  return (
    <section className="mx-2 my-1 h-full w-full">
      <Pagebanner
        img={bannersell}
        title="Explore a Wide Range of Houses Just for You"
        desc=" Find houses for sale near you. View photos, open house information,
          and property details for nearby real estate."
        className="bg-cyan-100"
      />
      <Container className="my-2 flex gap-1">
        <div className="flex w-1/4 flex-col gap-3 bg-slate-50 p-3 text-blue-600">
          <Link href={`/`}>Apartments</Link>
          <Link href={`/`}>Realstate</Link>
          <Link href={`/`}>condominium</Link>
          <Link href={`/`}>Living Home</Link>
          <Link href={`/`}>Shop</Link>
        </div>
        <div className="w-3/4">
          <Grid />
        </div>
      </Container>
    </section>
  );
};

export default page;
