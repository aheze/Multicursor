import { useState } from "react";

export default function Editor() {
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
