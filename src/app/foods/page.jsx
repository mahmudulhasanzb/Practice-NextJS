import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
  // const res = await fetch("");
  // const data = await res.json();

  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
  const data = await res.json();
  const foods = data.data;

  console.log(data)

  return (
    <div>
      <h2 className="text-4xl text-center my-10">Foods: {foods.length} </h2>

      <div className="grid grid-cols-4 gap-4">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;