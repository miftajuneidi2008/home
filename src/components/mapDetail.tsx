"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { mapdata } from "./data";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/images/h3.png";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 13,
};

const MapDetail = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map;
  mapdata.map((data) => {
    console.log([data.lat, data.long]);
  });

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapdata.map((datas) => (
        <Marker
          position={[datas.long, datas.lat]}
          draggable={false}
          key={datas.number}
        >
          <Popup>
            <Link href={`/homes/${datas.number}`}>
              <Image
                src={img}
                width={400}
                height={400}
                alt="home"
                className="h-16 w-64 rounded-md"
              />
              <div className="">
                <p className="font-semibold text-slate-700">13,000,000 ETB</p>
                <p className="font-semibold text-slate-500">2 bed and 2 bath</p>
                <p className="text-slate-500">Adama,Ethiopia</p>
              </div>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapDetail;
