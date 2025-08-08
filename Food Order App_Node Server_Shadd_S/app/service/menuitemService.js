const fs = require("fs");
const Menus = require("../service/menuService");
const Fooditems = require("../service/fooditemService");
const menus = new Menus();
const fooditems = new Fooditems();

class Menuitems {
  constructor() {
    this.menuitems = JSON.parse(fs.readFileSync("./app/data/menuitems.json", "utf-8"));
  }

  getAllMenuitems() {
    return this.menuitems;
  }

  getMenuitemById(id) {
    const menuitem = this.menuitems.find((menuitem) => menuitem.id == id);
    return menuitem;
  }

  getAllMenuitemsByFooditemId(fooditemId) {
    const menuitems = this.menuitems.filter((menuitem) => menuitem.fooditemId == fooditemId);
    return menuitems;
  }

  getAllMenuitemsByRestaurantId(restaurantId, selectedCategoryId = null, selectedCuisineId = null) {
    //Get menuId by restaurantId
    const selectedMenuId = menus.getMenuByRestaurantId(restaurantId).id;
    //Get all menuitems of the selected menuId
    let filteredMenuitems = this.menuitems.filter((menuitem) => menuitem.menuId == selectedMenuId);
    //Stores all resultant menuitems such that each menuitem has its-
    // id, fooditemId, fooditem title, fooditem image and fooditem price
    let resultantMenuitems = []
    //loop through each of the menuitems to extract only the required fields
    filteredMenuitems.forEach(menuitem => {
      resultantMenuitems.push(
        {
          "Menuitem Id": menuitem.id,
          "Fooditem Id": menuitem.fooditemId,
          "Fooditem Name": fooditems.getFooditemById(menuitem.fooditemId).name,
          "Fooditem Image": fooditems.getFooditemById(menuitem.fooditemId).image,
          "Fooditem Price": menuitem.fooditemPrice
        })
    })
    function reorderMenuItems(resultantMenuItems, categoryId, cuisineId) {
      // Check if either categoryId or cuisineId is provided
      if (categoryId || cuisineId) {
        // Variable to store the filtered menuitems belonging to the selected categoryId or cuisineId
        let filteredMenuItems;
    
        // Check if selectedCategoryId is not null
        if (categoryId) {
          // Filter food items with the given categoryId
          filteredMenuItems = resultantMenuItems.filter(item => item.categoryId === categoryId);
        } else {
          // Filter food items with the given cuisineId
          filteredMenuItems = resultantMenuItems.filter(item => item.cuisineId === cuisineId);
        }
    
        // Extract the fooditem Ids of all the filtered fooditems
        const filteredMenuItemsIds = filteredMenuItems.map(item => item.id);
    
        // Array variables to store the preferred menu items and the remaining menu items
        const preferredMenuItemsOrder = [];
        const remainingMenuItems = [];
    
        // Filter out the preferred menuitems
        for (const item of resultantMenuItems) {
          if (filteredMenuItemsIds.includes(item.id)) {
            preferredMenuItemsOrder.push(item);
          } else {
            remainingMenuItems.push(item);
          }
        }
    
        // Push the remaining fooditems in the end of the preferredMenuItemsOrder
        preferredMenuItemsOrder.push(...remainingMenuItems);
    
        // Return the preferredMenuItemsOrder variable
        return preferredMenuItemsOrder;
    
      } else {
        // If no categoryId or cuisineId is passed then simply return the resultantMenuItems
        return resultantMenuItems;
      }
    }  
  }
  
}

module.exports = Menuitems;