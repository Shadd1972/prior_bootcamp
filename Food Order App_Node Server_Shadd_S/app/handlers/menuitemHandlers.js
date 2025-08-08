const Menuitems = require("../service/menuitemService");

const menuitems = new Menuitems();

const fetchAllMenuitemsHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all menuitems`);
    res.end(JSON.stringify(menuitems.getAllMenuitems()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchMenuitemByIdHandler = (req, res, menuitemId) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const menuitem = menuitems.getMenuitemById(menuitemId);
    console.log(
      `${new Date()} - API called for fetching menuitem using the provided id`
    );
    res.end(
      JSON.stringify(
        menuitem
          ? menuitem
          : { message: `Menuitem with id ${menuitemId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchMenuitemByRestaurantIdHandler = (req, res, restaurantId, categoryId = null, cuisineId = null) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching menu items by restaurant id`);
    let menuItems = restaurants.getMenuItemsByRestaurantId(restaurantId);
    if (categoryId) {
      menuItems = menuItems.filter(menuItem => menuItem.category.id === categoryId);
    }
    if (cuisineId) {
      menuItems = menuItems.filter(menuItem => menuItem.category.cuisine.id === cuisineId);
    }
    res.end(JSON.stringify(menuItems));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllMenuitemsHandler,
  fetchMenuitemByIdHandler,
  fetchMenuitemByRestaurantIdHandler,
};
