"use client";

import ScrollTop from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";

const Navbar = () => {
  const scrolled = ScrollTop();
  const { theme } = useTheme();
  const { isAuthenticated, isLoading } = useConvexAuth();

  const shadowThemes = theme === "light" ? "black" : "white";
  return (
    <div
      className={`z-50 bg-background dark:bg-[#1c202a] fixed top-0 flex items-center w-full p-6
       `}
      style={{
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? `0px 0px 1px 0px ${shadowThemes}` : "",
      }}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner size="h-5 w-5" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Jotion free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
