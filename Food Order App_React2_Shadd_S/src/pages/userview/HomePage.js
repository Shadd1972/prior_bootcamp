import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { listCuisines } from "../../actions/cuisineActions";
import { listRestaurants } from "../../actions/restaurantActions";
import { listCategories } from "../../actions/categoryActions"; 
import AlertMessage from "../../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cuisinesList, setCuisinesList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [categoriesList, setCategoryList] = useState([]);

  const listOfCuisines = useSelector((state) => state.cuisineList);
  const { loading: loadingCuisines, success: successCuisines, error: errorCuisines, cuisines } = listOfCuisines;

  const listOfRestaurants = useSelector((state) => state.restaurantList);
  const { loading: loadingRestaurants, success: successRestaurants, error: errorRestaurants, restaurants } = listOfRestaurants;

  const listOfCategories = useSelector((state) => state.categoryList);
  const { loading: loadingCategories, success: successCategories, error: errorCategories, categories } = listOfCategories;

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
      dispatch(listCuisines());
      dispatch(listRestaurants());
      dispatch(listCategories());
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (cuisines && cuisines.length > 0) {
      console.log(cuisines);
      setCuisinesList(cuisines);
    }
  }, [cuisines]);

  useEffect(() => {
    if (restaurants && restaurants.length > 0) {
      console.log(restaurants);
      setRestaurantsList(restaurants);
    }
  }, [restaurants]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      console.log(categories);
      setCategoryList(categories);
    }
  }, [categories]);

  return (
    <>
      {loadingCuisines || loadingRestaurants || loadingCategories ? (
        <Spinner animation="grow" />
      ) : (
        <>
          {cuisinesList.length === 0 && restaurantsList.length === 0 && categoriesList.length === 0 &&(
            <AlertMessage variant="info" message="No data to display" />
          )}
          {cuisinesList.length > 0 && (
            <div className="container-fluid">
              <h4>Try new cuisines</h4>
              <Row className="g-4">
                {cuisinesList.map((cuisine) => (
                  <Col key={cuisine._id} md={6} sm={12} lg={4}>
                    <ItemCard item={cuisine} itemName="cuisine" />
                  </Col>
                ))}
              </Row>
            </div>
          )}
          {categoriesList.length > 0 && (
            <div className="container-fluid">
              <h4>Get Inspiration for your order from these Categories</h4>
              <Row className="g-4">
                {categoriesList.map((category) => (
                  <Col key={category._id} md={6} sm={12} lg={4}>
                    <ItemCard item={category} itemName="category" />
                  </Col>
                ))}
              </Row>
            </div>
          )}
          {restaurantsList.length > 0 && (
            <div className="container-fluid">
              <h4>Available restaurants</h4>
              <Row className="g-4">
                {restaurantsList.map((restaurant) => (
                  <Col key={restaurant._id} md={6} sm={12} lg={4}>
                    <ItemCard item={restaurant} itemName="restaurant" />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;

