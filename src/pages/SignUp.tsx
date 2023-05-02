import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  const [data, setData] = useState({ email: "", password: "" });
  const { user, SignUp, SignUpWithProvider } = useAuth();

  const handleSignUp = (e: any) => {
    e.preventDefault();
    try {
      // SignUp the user here.
      SignUp(data.email, data.password);
      // After the user is signed up redirect the user to the  dashboard page.
    } catch (error) {
      console.log("Error in Signing Up the user");
    }
  };

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <h1 className="text-center my-3">Sign Up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>

      <div>
        <p>OR</p>
        <button
          type="button"
          onClick={() => {
            SignUpWithProvider("google");
          }}
          className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google<div></div>
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            SignUpWithProvider("facebook");
          }}
        >
          Sign Up with Facebook
        </button>
        <Button
          onClick={() => {
            SignUpWithProvider("github");
          }}
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.007-.82-.01-1.49-2.01.38-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.53.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.76-3.65 3.96.28.25.54.74.54 1.49 0 1.08-.01 1.95-.01 2.22 0 .21.15.46.55.38A8.014 8.014 0 0016 8c0-4.418-3.582-8-8-8z"
            />
          </svg>
          <span>Sign up with GitHub</span>
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
