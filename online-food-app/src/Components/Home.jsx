import React from "react";
import { MDBRow, MDBContainer } from 'mdb-react-ui-kit';

import CategoryCard from "./CategoryCard";

import MeatImg from "../Images/Meat.jpg"
import SeaFoodImg from "../Images/Sea Food.jpg"
import FruitImg from "../Images/Fruit.jpg"
import VegetableImg from "../Images/Vegetable.jpg"

import "../CSS/Home.css";

class Home extends React.Component {

  state = {
    productCategories: [
      {
        id: 1,
        imgName: MeatImg,
        url:'meat',
        name: "Meat",
        description: "Explore Fresh Meats that has not undergone any preserving process that is vacuum-wrapped or wrapped in a controlled atmosphere"
      },
      {
        id: 2,
        imgName: SeaFoodImg,
        url:'seafood',
        name: "Sea Food",
        description: "Explore Fresh Sea Foods that has not undergone any preserving process that is vacuum-wrapped or wrapped in a controlled atmosphere"
      },
      {
        id: 3,
        imgName: FruitImg,
        url:'fruit',
        name: "Fruit",
        description: "Explore Fresh Fruits that has not undergone any preserving process that is vacuum-wrapped or wrapped in a controlled atmosphere"
      },
      {
        id: 4,
        imgName: VegetableImg,
        url:'vegetable',
        name: "Vegetable",
        description: "Explore Fresh Vegetables that has not undergone any preserving process that is vacuum-wrapped or wrapped in a controlled atmosphere"
      },
    ]
  }

  displayCategories = () => {
    return this.state.productCategories.map(category => {
      return <CategoryCard key={category.id} categoryData={category} />
    });
  }

  render() {
    return (
      <div>
        <MDBContainer className="category-overall-alignment">
          <h3 className="display-4 category-heading">Product Categories</h3>
          <br />
          <MDBRow className="category-row-content-alignment">
            {this.displayCategories()}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;