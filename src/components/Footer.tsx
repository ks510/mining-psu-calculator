import { FC } from 'react';
import DiscordIcon from '../Icons/DiscordIcon';

const Footer: FC = () => {
  return (
    <footer className="w-full h-[50px] bg-primary-blue flex justify-between items-center px-4 text-gray-800 fixed bottom-0">
      <p>Just a little tool by Raccoonsy Lady 🦝</p>
      <a
        href="https://discord.com/invite/bK6ptDN"
        target="_blank"
        rel="noreferrer"
        className="flex items-center">
        Chat with us on
        <div className="px-2">
          <DiscordIcon size={16} />
        </div>
        -{'>'}
      </a>
    </footer>
  );
};

export default Footer;
