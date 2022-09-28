import { FC } from 'react';

interface Props {
  size: number;
}

const AddCircleIcon: FC<Props> = props => {
  const { size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="#E99532"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM8 12h8M12 16V8"></path>
    </svg>
  );
};

export default AddCircleIcon;
