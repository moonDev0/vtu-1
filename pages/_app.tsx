import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../components/context/userContext";
import Auth from "../components/global/Auth";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Whatsapp = dynamic(() => import("../components/global/Whatapp"));
const Sidebar = dynamic(() => import("../components/global/sidebar"));

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  return (
    <UserProvider>
      <Auth>
        <div className="flex">
          <Sidebar />
          <Whatsapp />
          {!isHomepage && (
            <div className=" fixed z-10 h-12 w-full bg-white bg-opacity-60 backdrop-blur-lg backdrop-filter"></div>
          )}
          <Component {...pageProps} />
        </div>
      </Auth>
    </UserProvider>
  );
}

export default MyApp;
