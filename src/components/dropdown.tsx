import { FC } from 'react';

const Dropdown: FC = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="gpu-model">GPU Model</label>
      <input type="text" id="gpu-model" placeholder="Find your GPU model..." />
    </div>
  );
};

export default Dropdown;
