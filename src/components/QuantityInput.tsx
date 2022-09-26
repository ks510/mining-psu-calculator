import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';

const QuantityInput: FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+event.target.value);
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
        min="0"
        max="999"
        maxLength={3}
        id="quantity"
        value={quantity}
        onChange={handleChange}
        className="glass-box-input px-4 py-2 w-16 text-center"
      />
    </div>
  );
};

export default QuantityInput;
