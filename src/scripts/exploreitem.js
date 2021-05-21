import data from '../DATA.json';

const getItem = async () => {
  try {
    const result = await data;
    renderRestaurant(result.restaurants);
  } catch (message) {
    console.log(message);
  }
};

const renderRestaurant = (restaurants) => {
  const postExplore = document.querySelector('.explore-post');
  postExplore.innerHTML = '';
  restaurants.forEach((ItemRestaurant) => {
    postExplore.innerHTML += `
              <article class="explore-item">
                <h3 tabindex="0" class="explore-city">${ItemRestaurant.city}</h3>
                <img class="explore-item-thumbnail" src=${ItemRestaurant.pictureId} alt="#" />
                <div class="explore-item-content">
                  <h1 tabindex="0" class="explore-tittle">${ItemRestaurant.name}</h1>
                  <p tabindex="0" class="explore-rating">Rating : <span>${ItemRestaurant.rating}</span></p>
                  <p tabindex="0" class="explore-description">${ItemRestaurant.description}</p>
                </div>
              </article>
      
      `;
  });
};

document.addEventListener('DOMContentLoaded', getItem);
