import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({food}) => {

  const {id, dish_name, image_link, category, price } = food;

  return (
    <div className="card bg-base-100 shadow-sm relative">
      <Link href={`/foods/${id}`} className="absolute top-0 right-0 btn btn-primary text-white p-0 px-2 py-1  rounded-bl-3xl text-xs">show details</Link>
      <figure>
        <Image src={image_link} alt={dish_name} width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">New</div>
        </h2>

        <p>Price {price}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{category}</div>
        </div>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-ghost btn-outline">Add to Cart</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;