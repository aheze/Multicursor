import { useState, useEffect } from "react";
import { printFromConsole } from "./Editor";

export default function Editor() {

  useEffect(() => {
    console.log("effect!");
    printFromConsole();
  }, []);

  return (
    <div className="relative h-full w-full">
      <textarea className="absolute h-full w-full resize-none bg-slate-200" />

      /* highlights */
      <div className="absolute inset-0 border-8 border-yellow-500"></div>

      /* cursors */
      <div className="absolute inset-0 border-2 border-red-600"></div>
    </div>
  );
}
