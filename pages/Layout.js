import Navbar from "@/components/navbar";
import Home from ".";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
