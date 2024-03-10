import Header from "./components/organize/Header";
import Navbar from "./components/organize/Navbar";
import Link from "./components/organize/Link";
import Main from "./components/organize/Main";
import Shop from "./components/organize/Shop";
import Order from "./components/organize/Order";
export default function Home() {
  return (
    <div className="flex flex-col w-full pt-6 border  border-t-red-300 h-[auto] justify-center gap-5">
      <Header />
      <Navbar />
      <hr />
      <Link />
      <Main />

      <Shop />
      <Order />
    </div>
  );
}
