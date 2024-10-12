"use client";
import Navbar from "@/components/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}
