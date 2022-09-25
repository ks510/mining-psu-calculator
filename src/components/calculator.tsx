import { FC } from 'react';

const Calculator: FC = () => {
  return (
    <form className="absolute top-0 left-0 z-10 px-10 py-10">
      <h1 className="text-2xl font-semibold text-primary-orange small-glow-orange">
        Your GPUs
      </h1>

      <div className="flex flex-col">
        <label htmlFor="gpu-model">GPU Model</label>
        <input
          type="text"
          id="gpu-model"
          placeholder="Find your GPU model..."
        />
      </div>
    </form>
  );
};

export default Calculator;
