import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';

interface Props {
  index: number;
  quantity: number;
  updateQuantity: (index: number, quantity: number) => void;
}

const QuantityInput: FC<Props> = props => {
  const { index, quantity, updateQuantity } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateQuantity(index, +event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="quantity"
        className="text-primary-orange font-medium small-glow-orange pb-3">
        Quantity
      </label>
      <input
        type="number"
        id="quantity"
        placeholder="1"
        value={quantity}
        onChange={handleChange}
        className="glass-box-input px-4 py-2 w-16 text-center"
      />
    </div>
  );
};

export default QuantityInput;
