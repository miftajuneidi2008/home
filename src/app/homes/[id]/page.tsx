import SellerInfo from "@/components/SellerInfo";
import Slide from "@/components/Slide";
import dynamic from "next/dynamic";
import React from "react";
import {
  Bed,
  Bath,
  Triangle,
  PawPrint,
  CircleParking,
  Thermometer,
  UtilityPole,
  TentTree,
  NotebookTabs,
} from "lucide-react";

const page = () => {
  const Maps = dynamic(() => import("@/components/Map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  return (
    <div className="container mx-auto">
      <div className="flex w-full gap-4 py-4">
        <div className="w-[60%]">
          <div className="w-full">
            <Slide />
          </div>
          <div className="mx-4 flex items-center justify-between">
            <div className="w-1/2">
              <p className="my-2 text-xl font-bold capitalize">
                Two bed room home
              </p>
              <p className="text-slate-600">Bole,Adama</p>
              <div className="my-4 flex gap-4">
                <p className="flex gap-1">
                  <Bed strokeWidth={1.5} className="text-slate-600" /> 6
                </p>
                <p className="flex gap-1">
                  <Bath strokeWidth={1.5} className="text-slate-600" /> 7
                </p>
                <p className="flex gap-1">
                  <Triangle strokeWidth={1.5} className="text-slate-600" />{" "}
                  1000sqft
                </p>
              </div>
            </div>
            <div className="1/2">
              <p className="text-[24px] font-bold">13,000 Br.</p>
              <p className="text-[16px] text-gray-600">
                <del>15,000 Br.</del>
              </p>
            </div>
          </div>
          <div className="mx-2">
            <h2 className="my-2 text-xl font-bold">Description</h2>
            <p className="text-slate-600">
              Tucked away in the serene and leafy suburbs of Runda, is this
              unfurnished 4-bedroom house available for rent. This magnificent
              4-bedroom house which is in mint shape sits on a half-acre lot
              with its gate in a secure gated estate. Its main features include
              wooden flooring, stylish lighting fixtures, unique interiors, a
              lush garden, a large fenced yard with electric wiring, 24/7
              security surveillance, power backup, a solar heating system, and
              ample parking.
            </p>
          </div>
          <div className="mx-2 my-4 w-full rounded-md bg-slate-50 px-2 py-2">
            <h1 className="py-3 text-xl font-bold">Home Highlights</h1>
            <div className="my-2 grid grid-cols-3 gap-4">
              <div className="text-slate-600">
                <h2 className="flex gap-2">
                  <PawPrint /> Pets{" "}
                  <span className="font-semibold">Dogs Allowed</span>
                </h2>
              </div>
              <div className="text-slate-600">
                <h2 className="flex gap-2">
                  <CircleParking /> Parking{" "}
                  <span className="font-semibold">Garage</span>
                </h2>
              </div>
              <div className="text-slate-600">
                <h2 className="flex gap-2">
                  <Thermometer /> A/C{" "}
                  <span className="font-semibold">Heating & Cooling</span>
                </h2>
              </div>
              <div className="text-slate-600">
                <h2 className="flex gap-2">
                  <UtilityPole /> Utilities Included{" "}
                  <span className="font-semibold">Garbage</span>
                </h2>
              </div>
              <div className="text-slate-600">
                <h2 className="flex gap-2">
                  <TentTree /> Outdoor{" "}
                  <span className="font-semibold">Swimming Pool</span>
                </h2>
              </div>
              <div className="text-slate-600">
                <h2 className="flex gap-2">
                  <NotebookTabs /> Listed{" "}
                  <span className="font-semibold">106 Days ago</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <h1 className="font-bold">Nearby</h1>
            <p className="py-3 text-slate-500">
              Bus Stop | Hospital | Scenic View | School | Shopping Centre
            </p>
          </div>
        </div>
        <div className="z-0 h-full w-[40%]">
          <div className="h-[400px]">
            <Maps posix={[7.1999992, 38.5999976]} />
          </div>
          <div className="my-3 flex flex-col items-center gap-3 rounded-md border-[1px] border-slate-400 py-2">
            <h1 className="text-xl font-bold">Contact Seller</h1>
            <SellerInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
