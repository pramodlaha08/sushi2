import { menuData, beverageData } from "./sushiData.js";
document.addEventListener('contentLoaded', () => {
    const menu = document.querySelector(".sushi_menu");
    const beverageList = document.querySelector(".beverage_list");
    const foodList = document.querySelector(".food_list");
    const dessertList = document.querySelector(".dessert_list");

    if (menu) {
        menuData.forEach((data) => {
            menu.innerHTML += `
            <div class="sushi_card_container text-light text-align-left">
                <div class="card__img m-auto p-4 h-100 w-100">
                    <img src="${data.image}" alt="${data.heading}">
                </div>
                <div class="card__content px-4">
                    <h3 class="card__content--heading">${data.heading}</h3>
                    <p class="card__content--para">${data.para}</p>
                </div>
            </div>
            `;
        });
    } else {
        console.warn('Menu element not found.');
    }

    if (beverageList) {
        beverageData.forEach((data) => {
            beverageList.innerHTML += `
            <div class="col-lg-6 col-md-12 d-flex justify-content-between menu_list_item_list">
                <div class="menu_item">
                    <h3>${data.heading}</h3>
                    <p class="text-muted">${data.para}</p>
                </div>
                <p class="text-muted">${data.price}</p>
            </div>
            `;
        });
    } else {
        console.warn('Beverage list element not found.');
    }

    if (foodList) {
        beverageData.forEach((data) => {
            foodList.innerHTML += `
            <div class="col-lg-6 col-md-12 d-flex justify-content-between menu_list_item_list">
                <div class="menu_item">
                    <h3>${data.heading}</h3>
                    <p class="text-muted">${data.para}</p>
                </div>
                <p class="text-muted">${data.price}</p>
            </div>
            `;
        });
    } else {
        console.warn('Food list element not found.');
    }

    if (dessertList) {
        beverageData.forEach((data) => {
            dessertList.innerHTML += `
            <div class="col-lg-6 col-md-12 d-flex justify-content-between menu_list_item_list">
                <div class="menu_item">
                    <h3>${data.heading}</h3>
                    <p class="text-muted">${data.para}</p>
                </div>
                <p class="text-muted">${data.price}</p>
            </div>
            `;
        });
    } else {
        console.warn('Dessert list element not found.');
    }
});
