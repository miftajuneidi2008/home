import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-100 px-4 py-24 text-sm md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex flex-col justify-between gap-24 md:flex-row">
        {/*left*/}
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold">Birra Home Rent and Sale</h1>
          <p>Posta, Adama Ethiopia</p>
          <p className="font-bold">hello@birra.dev</p>
          <p>+1251 920 181 846</p>
        </div>
        {/*middle*/}
        <div>middle</div>
        {/*rigth*/}
        <div>right</div>
      </div>
    </footer>
  );
};

export default Footer;
