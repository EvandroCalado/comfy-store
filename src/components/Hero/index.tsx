import { Link } from 'react-router-dom';

const carouselImages = [
  { image: '/images/hero1.webp' },
  { image: '/images/hero2.webp' },
  { image: '/images/hero3.webp' },
  { image: '/images/hero4.webp' },
];

export const Hero = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          quisquam, qui repudiandae iusto cum corporis debitis eaque neque
          dignissimos? Odit.
        </p>

        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="carousel-center hidden h-[28rem] space-x-4 rounded-box bg-neutral p-4 lg:carousel">
        {carouselImages.map((image, index) => (
          <div className="carousel-item" key={`${index}${image}`}>
            <img
              src={image.image}
              alt="hero"
              className="h-full w-80 rounded-box object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
