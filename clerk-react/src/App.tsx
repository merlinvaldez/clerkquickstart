import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton></SignInButton>
          <SignUpButton></SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </header>
    </>
  );
}

export default App;
