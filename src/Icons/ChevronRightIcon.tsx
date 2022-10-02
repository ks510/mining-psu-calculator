import { FC } from 'react';

interface Props {
  size: number;
}

const ChevronRightIcon: FC<Props> = props => {
  const { size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path>
    </svg>
  );
};

export default ChevronRightIcon;
