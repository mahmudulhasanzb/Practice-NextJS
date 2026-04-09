import React from 'react';

const FoodDetailsPage = async ({params}) => {
  const { foodId } = await params;

  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
  const data = await res.json();
  const food = data.data;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm relative">
      <div className="card-body">
        <h2 className="card-title">
          {food.dish_name}
          <div className="badge badge-secondary">New</div>
        </h2>

        <p>Price {food.price}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{food.category}</div>
        </div>
        <p>
            {food.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repudiandae praesentium, culpa nihil nisi et! Velit odio, adipisci explicabo et cumque eius amet dignissimos cum
            <br /> inventore ratione, optio incidunt beatae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, architecto earum non <br /> suscipit impedit maxime nihil placeat voluptatibus modi voluptatum! Amet quo rem magni dolorum officiis tempore distinctio doloribus praesentium?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus. Quas, <br /> tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus. Quas, tempora. Dolor, temporibus.
        </p>
      </div>
    </div>
    </div>
  );
};

export default FoodDetailsPage;