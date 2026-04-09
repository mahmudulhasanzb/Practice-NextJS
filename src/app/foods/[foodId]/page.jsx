import Link from 'next/link';
import React from 'react';

const FoodDetailsPage = async ({params}) => {
  const { foodId } = await params;

  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
  const data = await res.json();
  const food = data.data;

  return (
    <div className='my-10'>
      <div className="card bg-info shadow-sm shadow-amber-500 max-w-4xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">
            {food.dish_name}
            <div className="badge badge-secondary">New</div>
          </h2>

          <p>Price {food.price}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{food.category}</div>
          </div>
          <div className='my-2'>
            <h1 className='text-2xl font-bold my-2'>Main Ingredients:</h1>
            {food.main_ingredients.map(ingredient => (
              <div key={ingredient}>
                <span className='badge badge-outline'>{ingredient}</span>
              </div>
            ))}
          </div>
          <div className='my-2'>
            <h1 className='text-2xl font-bold my-2'>Cooking Steps:</h1>
            <p className='text-lg'>{food.cooking_steps}</p>
          </div>
          <Link href="/foods" className='btn btn-primary w-full'>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;