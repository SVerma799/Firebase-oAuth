import * as React from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/clientApp";

import { useRouter } from "next/router";
import { Result } from "postcss";

// Created a context using React
const AuthContext = React.createContext<any>(null);

// See where are we using this UseAuth function in the code to know about its usage.
// I figure out so basically.
// Auth Context is the thing which is doing the core work for the Application.
// UseAuth is the function which is using the AuthContext to get the user data.
// UseAuth which we are exporting is what we will use the the application to get the values or the context we are sending in the context

export const useAuth = () => React.useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const router = useRouter();

  const Login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/Dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const SignUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/Dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const Logout = async () => {
    try {
      setUser(null);
      await signOut(auth);
      router.push("/Dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const SignUpWithProvider = async (providerVal: string) => {
    try {
      let providerName = providerVal.toLowerCase();
      let result = null;
      let provider = null;
      if (providerName === "google") {
        provider = new GoogleAuthProvider();
      } else if (providerName === "facebook") {
        provider = new FacebookAuthProvider();
      } else if (providerName === "github") {
        provider = new GithubAuthProvider();
      }

      if (provider) result = await signInWithPopup(auth, provider);
      if (result) {
        setUser(result.user);
        router.push("/Dashboard");
      }
      console.log("Provider o/p", result);
      // This gives you a Google Access Token. You can use it to access the Google API.
    } catch (err: any) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);

      setLoading(false);
      return () => unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, Login, SignUp, Logout, SignUpWithProvider }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
