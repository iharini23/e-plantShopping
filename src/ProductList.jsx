import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Indoor",
    name: "Snake Plant",
    image: "https://i.imgur.com/4QfKuz1.png",
    description: "A hardy indoor plant that improves air quality.",
    cost: 299,
  },
  {
    category: "Indoor",
    name: "Aloe Vera",
    image: "https://i.imgur.com/6VxQGkA.png",
    description: "Medicinal plant known for skin healing properties.",
    cost: 249,
  },
  {
    category: "Outdoor",
    name: "Rose",
    image: "https://i.imgur.com/Z3K5yJp.png",
    description: "Beautiful flowering plant with a pleasant fragrance.",
    cost: 399,
  },
  {
    category: "Outdoor",
    name: "Tulsi",
    image: "https://i.imgur.com/8yJx8ZC.png",
    description: "Sacred plant with medicinal benefits.",
    cost: 199,
  },
  {
    category: "Succulent",
    name: "Cactus",
    image: "https://i.imgur.com/qyP0g1R.png",
    description: "Low maintenance succulent plant.",
    cost: 149,
  },
  {
    category: "Succulent",
    name: "Jade Plant",
    image: "https://i.imgur.com/YzZ8k1J.png",
    description: "Symbol of good luck and prosperity.",
    cost: 349,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div className="product-card" key={index}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>₹{plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
