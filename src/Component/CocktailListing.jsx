import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function CocktailListing() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  function fetchCocktail() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinks(data.drinks)
        setIsLoading(false)
      });
  }

  useEffect(() => {
    fetchCocktail();
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <div style={{background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
    <div className="container py-5">
      <h3>Cocktail :-</h3>
      <hr style={{ height: "8px" }} className="bg-black" />
      <div className="row">
        {drinks.map((item) => {
          const { strDrink, strDrinkThumb, strCategory, strInstructions } = item;
          return (
            <div className="col-6 col-md-3 mb-4">
              <div className="card rounded-4">
                <img src={strDrinkThumb} alt="" className="rounded-top-4"/>
                <div className="card-body  bg-black rounded-bottom-4">
                  <h6 className="text-info">Drink Name: {strDrink}</h6>
                  <h6 className="text-info text-truncate">Category: {strCategory}</h6>
                  <p className="text-truncate text-info">{strInstructions}</p>
                  <button className="btn btn-primary mx-1">Buy Now</button>
                  <button className="btn btn-danger">Add To Card</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default CocktailListing;
