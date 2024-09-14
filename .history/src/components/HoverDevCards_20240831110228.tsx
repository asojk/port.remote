import { IconType } from "react-icons";
import { FiMusic, FiBookOpen, FiVideo } from "react-icons/fi";
import { PiApplePodcastsLogo } from "react-icons/pi";
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";




const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title='Music' subtitle='From gigs to production' href='#' Icon={FiMusic} />
        <Card title='Podcast Compilations' subtitle='Whether informative, thought provoking, or informational' href='#' Icon={PiApplePodcastsLogo} />
        <Card title='For Groups/Conventions' subtitle='' href='#' Icon={FaPeopleRoof} />
        <Card title='Broadcast Advertisements' subtitle='' href='#' Icon={TbBuildingBroadcastTowerFilled} />
        <Card title='Educational' subtitle="" href='#' Icon={FiBookOpen} />
        <Card title='Drone Videography' subtitle="" href='#' Icon={FiVideo} />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;