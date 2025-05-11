import { Loader } from "lucide-react";
import React from "react";

interface Proptype {
  size: String;
}

export const Spinner: React.FC<Proptype> = ({ size }) => {
  return (
    <>
      <Loader className={`text-muted-foreground animate-spin ${size}`} />
    </>
  );
};
