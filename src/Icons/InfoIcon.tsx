import { FC } from 'react';

interface Props {
  size: number;
}

const InfoIcon: FC<Props> = props => {
  const { size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="#E99532"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM12 8v5"></path>
      <path
        stroke="#E99532"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.995 16h.009"></path>
    </svg>
  );
};

export default InfoIcon;
