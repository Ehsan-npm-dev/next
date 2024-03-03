

import Header from "./components/organize/Header";
import Navbar from "./components/organize/Navbar";
import Link from "./components/organize/Link"
import Main from "./components/organize/Main"
import Shop from "./components/organize/Shop";
export default function Home() {
  return (
<div className="flex flex-col w-full h-[auto] justify-center gap-5">
<Header/>
<Navbar/>
<hr />
<Link/>
<Main/>
<Shop/>
</div>
  );
}
