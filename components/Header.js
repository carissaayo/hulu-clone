import HeaderItem from "./HeaderItem";
import {HomeIcon,SearchIcon,UserIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon} from "@heroicons/react/outline"

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
      <p>this is header</p>
      <h1 className="font-bold">Hulu</h1>
    </header>
  );
};

export default Header;
