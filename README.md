This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started With Firebase Authentication in NextJs, Typescript, TailwindCSS

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentications Provided

We have used the Google, Facebook and normal email and password login for the login and signUp of the users.
If the user is not logged in. It cannot access the protected Route.

try visiting [http://localhost:3000/Dashboard](http://localhost:3000/Dashboard) in the browser you will be redirected to the Login page back.

## Approach used.

User at the first glace will be directed to login.
Were we have the user in the ContextApi to access it everywhere.

if logged In or signed Up using the providers or email.
Context Api user is set and hence you will be able to access the protected route.
