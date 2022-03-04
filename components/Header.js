import HeaderItem from "./HeaderItem";
import {HomeIcon,SearchIcon,UserIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon} from "@heroicons/react/outline"
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="w-20 pb-6">
        <h1 className="font-bold text-4xl">Hulu</h1>
        
      </div>
    </header>
  );
};

export default Header;
