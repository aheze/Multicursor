"use client";
import Image from "next/image";
import Editor from "./Editor/Editor";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-200">
      <div className="h-screen w-full bg-slate-600 p-10">
        <Editor />
      </div>
    </main>
  );
}
