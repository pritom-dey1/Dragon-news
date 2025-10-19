import React, { Suspense } from "react";
import Header from "../Components/Header/Header";
import { LatestNews } from "../Components/Header/LatestNews";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import LeftAside from "../Components/Main/LeftAside/LeftAside";
import RightAside from "../Components/Main/RightAside/RightAside";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <LatestNews />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <main className="max-w-[1300px] gap-6 mt-6 mx-auto grid grid-cols-12">
        <aside className="col-span-3 sticky self-start h-fit top-0">
          <LeftAside />
        </aside>
        <section className="col-span-6 overflow-y-auto h-[100vh] pr-2 main">
            <Outlet />
        </section>
        <aside className="col-span-3 sticky self-start h-fit top-0">
          <RightAside />
        </aside>
      </main>
      </Suspense>
    </div>
  );
};

export default Homelayout;
