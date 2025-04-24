import Link from "next/link";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaTelegram />, path: "" },
];
function Socials() {
  return (
    <div className="flex gap-6">
      {socials.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.path}
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
