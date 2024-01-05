import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const customFetch = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});

export const GenerateAmountOptions = (number: number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
