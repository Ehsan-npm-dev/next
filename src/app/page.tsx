import Header from "./components/organize/Header";
import Navbar from "./components/organize/Navbar";
import Link from "./components/organize/Link";
import Main from "./components/organize/Main";
import Shop from "./components/organize/Shop";
import Order from "./components/organize/Order";
import List from "./components/organize/List";
import Pic from "./components/organize/Pic";
import Buy from "./components/organize/Buy";
import Service from "./components/organize/Service";
export default function Home() {
  return (
    <div className="flex flex-col pt-4 border  border-t-red-300 h-auto justify-center gap-5">
      <div className="flex flex-col justify-center rounded-md items-center h-auto pb-10">
        <Header />
        <Navbar />

        <Link />
        <Main />

        <Shop />
        <Order />
        <List />
        <Service />
        <Pic />
        <Buy />
      </div>
    </div>
  );
}
