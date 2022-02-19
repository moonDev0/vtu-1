import type { NextPage } from "next";
import Link from "next/link";
import { useUser } from "../components/context/userContext";
import Form from "../components/Home/form";
import { PriceTable } from "../components/Home/PriceTable";

const Home: NextPage = () => {
  const userContext = useUser();

  return (
    <div className="to-primary mx-auto w-full bg-gradient-to-r from-green-400 font-semibold">
      <nav className="flex w-full justify-between bg-black p-10 py-6 text-4xl text-white md:text-5xl">
        EASYTOPUP
        {userContext?.user?.displayName && (
          <Link href="/dashboard" passHref>
            <a>
              <span className="cursor-pointer border p-1 text-2xl">
                DASHBOARD
              </span>
            </a>
          </Link>
        )}
      </nav>
      <main className="mx-5 flex min-h-[24rem] flex-wrap items-start justify-center gap-16 pt-10 md:justify-between md:pt-24 ">
        <div className="mx-auto">
          <h1 className="text-5xl font-bold  text-white md:text-6xl">
            Buy Data.
          </h1>
          <h1 className="text-5xl font-bold text-white  md:text-6xl">
            Buy Airtime.
          </h1>
          <h1 className="text-5xl font-bold text-white  md:text-6xl">
            PayBills.
          </h1>
          <h1 className="text-5xl font-normal text-white md:text-6xl">
            Securely.
          </h1>
        </div>
        <Form />
      </main>

      <section className="mt-5 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-medium text-gray-800">Pricing</h2>
        <h5 className="font-medium text-white">Check our Pricing</h5>
      </section>

      <PriceTable />
    </div>
  );
};

export default Home;
