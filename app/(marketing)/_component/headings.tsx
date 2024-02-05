"use client";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { Spinner } from "@/components/Spinner";
import { SignInButton } from "@clerk/clerk-react";

interface HoverVal {
  visible: boolean;
  positioning: { x: number; y: number };
  setIsOpen: Function;
}

const HoverEffect: React.FC<HoverVal> = ({
  visible,
  positioning,
  setIsOpen,
}) => {
  const socialRef = useRef<any>(null);

  const handleOutsideClick = (e: any) => {
    if (socialRef.current && !socialRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [visible]);

  return (
    <div
      ref={socialRef}
      style={{
        background: "grey",
        width: "2vw",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        position: "absolute",
        marginTop: "1px",
        // top: positioning?.y,
        left: positioning?.x,
        zIndex: 1,
      }}
    >
      <Button>1st</Button>
      <Button>2nd</Button>
      <Button>3rd</Button>
    </div>
  );
};

const Headings = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
  //   x: 0,
  //   y: 0,
  // });
  // const positionForModal = useRef<any>(null);

  // const mouseEnter = (e: any) => {
  //   setIsOpen(true);
  // };

  // const mouseLeave = (e: any) => {
  //   setIsOpen(false);
  // };

  // const updateRef = () => {
  //   const { x, y } = positionForModal?.current?.getBoundingClientRect();
  //   setMousePosition({ x: x, y: y });
  // };

  // useEffect(() => {
  //   updateRef();
  //   window.addEventListener("resize", updateRef);

  //   return () => {
  //     window.removeEventListener("resize", updateRef);
  //   };
  // }, [setMousePosition]);

  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your Ideas, Documents and Plans , Unified Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="h-8 w-8" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button>
          <Link href="/documents"> Enter Jotion</Link>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button variant="ghost" size="icon">
            Sign In
          </Button>
        </SignInButton>
      )}

      {/* <Button
        ref={positionForModal}
        style={{ marginLeft: "10px" }}
        onClick={mouseEnter}
      >
        Hover
      </Button>
      {isOpen && (
        <HoverEffect
          visible={isOpen}
          positioning={mousePosition}
          setIsOpen={setIsOpen}
        />
      )} */}
    </div>
  );
};

export default Headings;
