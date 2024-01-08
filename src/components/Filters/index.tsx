import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button, Checkbox, Input, Range, Select } from '..';
import { TypeProducts } from '../../types/type-products';

interface ParamsProps {
  search: string;
  category: string;
  company: string;
  price: number;
  order: string;
  shipping: string;
}

export const Filters = () => {
  const { products, params } = useLoaderData() as {
    products: TypeProducts;
    params: ParamsProps;
  };

  const uniqueValues = (value: string) => {
    const values = products.data.map(
      (product) => product.attributes[value as keyof typeof product.attributes],
    );
    const uniqueValues = [...new Set(values)];

    return uniqueValues;
  };

  return (
    <Form className="grid items-center gap-x-4 gap-y-8 rounded-md bg-base-200 px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* search */}
      <Input
        type="search"
        label="Search Product"
        name="search"
        defaultValue={params.search}
        className="input-sm"
      />
      {/* categories */}
      <Select
        label="Select Category"
        name="category"
        list={uniqueValues('category') as string[]}
        defaultValue={params.category}
        className="select-sm"
      />
      {/* companies */}
      <Select
        label="Select Company"
        name="company"
        list={uniqueValues('company') as string[]}
        defaultValue={params.company}
        className="select-sm"
      />
      {/* orders */}
      <Select
        label="Sort by"
        name="order"
        list={['asc', 'desc']}
        defaultValue={params.order}
        className="select-sm"
      />
      {/* price */}
      <Range
        name="price"
        label="Select Price"
        price={params.price}
        className="range-sm"
      />
      {/* shipping */}
      <Checkbox
        name="shipping"
        label="Free Shipping"
        shipping={params.shipping}
        className="checkbox-sm"
      />
      {/* button */}
      <Button type="submit" className="btn-sm uppercase">
        Search
      </Button>

      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        reset
      </Link>
    </Form>
  );
};
