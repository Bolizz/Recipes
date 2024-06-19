import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { CuisCard, CuisGrid } from "../components/StyleComp";
function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <CuisGrid>
      {cuisine.map((item) => {
        return (
          <CuisCard key={item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
          </CuisCard>
        );
      })}
    </CuisGrid>
  );
}

export default Cuisine;
