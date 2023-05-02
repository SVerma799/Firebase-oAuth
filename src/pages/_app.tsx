import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "../../context/AuthContext";
import NavbarComp from "@/components/Navbar";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/ProtectedRoute";
const unprotectedRoutes = [" / ", "/SignUp", "/Login"];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <AuthContextProvider>
        <NavbarComp />
        {unprotectedRoutes.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </>
  );
}
