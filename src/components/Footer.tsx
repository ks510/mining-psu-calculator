import { FC } from 'react';
import DiscordIcon from '../Icons/DiscordIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';

const Footer: FC = () => {
  return (
    <footer className="w-full h-[45px] bg-primary-blue flex justify-between items-center px-4 fixed bottom-0 text-sm">
      <p>Just a little tool by Raccoonsy Lady 🦝</p>
      <a
        href="https://discord.com/invite/bK6ptDN"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2">
        <span>Chat with us on </span>
        <DiscordIcon size={18} />
        <ChevronRightIcon size={16} />
      </a>
    </footer>
  );
};

export default Footer;
