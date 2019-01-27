export default function authorRender(person) {
  return `<h2 class="content-item-title random-title">Фотограф дня</h2>
          <div class="content-person-img col-3 artist-img">
              <img class="person-of-day-img" src=${person.photo} alt="photograph's picture">
          </div>
          <h3 class="content-item-title author-name">${person.name}</h3>`
}