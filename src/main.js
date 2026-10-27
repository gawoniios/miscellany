import './style.css'

const keepsake = {
  id: 1,
  title: "myKeepsake",
  description: "A keepsake",
  creator: "example-creator",
  saves: 1,
  isPublic: true,
  image: "/images/example1.png"
}

const secondKeepsake = {
  id: 2,
  title: "myKeepsake2",
  description: "Another keepsake",
  creator: "example-creator",
  saves: 1,
  isPublic: true,
  image: "/images/example2.png"
}

const thirdKeepsake = {
  id: 3,
  title: "Arthur",
  description: "A picture of my king",
  creator: "Gawonii",
  saves: 12000000,
  isPublic: true,
  image: "/images/Arthur.png"
}

const fourthKeepsake = {
  id: 4,
  title: "Obi-Wan",
  description: "A Picture of my favorite Jedi",
  creator: "Gawonii",
  saves: 13000000,
  isPublic: true,
  image: "/images/ObiWan.png"
}

const fifthKeepsake = {
  id: 5,
  title: "Matt",
  description: "A Picture of my favorite Oceanographer",
  creator: "Gawonii",
  saves: 14000000,
  isPublic: true,
  image: "/images/Matt.png"
}

const keepsakes = [
  keepsake,
  secondKeepsake,
  thirdKeepsake,
  fourthKeepsake,
  fifthKeepsake
];


function renderHeader() {
  return `
    <header class="site-header">
      <div class="header-top">
        <a class="site-logo" href="/">Miscellany</a>

        <div class="header-actions">
          <button type="button" aria-label="Search">Search</button>
          <button type="button" aria-label="Notifications">Notifications</button>
          <button type="button" aria-label="Account">Profile</button>
        </div>
      </div>

      <nav class="main-navigation" aria-label="Main navigation">
        <a href="/" aria-current="page">Discover</a>
        <a href="/boards">Boards</a>
        <a href="/following">Following</a>
      </nav>
    </header>
  `;
}

function renderKeepsake(item) {
  return `
    <article class="keepsake-card">
      <a class="keepsake-link" href="?keepsake=${item.id}">
        <img class="keepsake-image" src="${item.image}" alt="${item.title}">
        <div class="keepsake-content">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <p>Created by ${item.creator}</p>
          <p>Saved ${item.saves.toLocaleString()} times</p>
        </div>
      </a>
    </article>
  `;
}

function renderKeepsakeDetail(item) {
  return `
    <section class="keepsake-detail">
      <a class="back-link" href="/">← Back to Discover</a>

      <div class="detail-layout">
        <img
          class="detail-image"
          src="${item.image}"
          alt="${item.title}"
        >

        <div class="detail-content">
          <h1>${item.title}</h1>
          <p>${item.description}</p>
          <p>Created by ${item.creator}</p>
          <p>Saved ${item.saves.toLocaleString()} times</p>
        </div>
      </div>
    </section>
  `;
}


function renderDiscover() {
  let html = "";

  for (const item of keepsakes) {
    html += renderKeepsake(item);
  }

  return `
    <main>
      <div class="page-heading">
        <h1>Discover</h1>
        <p>Explore keepsakes shared by the community.</p>
      </div>

      <div class="search-controls">
        <label for="keepsake-search">Search keepsakes</label>

        <input
          type="search"
          id="keepsake-search"
          placeholder="Search keepsakes..."
          autocomplete="off"
        >

        <label for="search-filter">Search by</label>

        <select id="search-filter">
          <option value="all">Everything</option>
          <option value="title">Title</option>
          <option value="creator">Creator</option>
        </select>
      </div>

      <div class="keepsake-feed" id="keepsake-feed">
        ${html}
      </div>
    </main>
  `;
}


function filterKeepsakes(query, category) {
  const searchTerm = query.toLowerCase().trim();

  return keepsakes.filter(item => {
    if (category === "title") {
      return item.title.toLowerCase().includes(searchTerm);
    }

    if (category === "creator") {
      return item.creator.toLowerCase().includes(searchTerm);
    }

    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.creator.toLowerCase().includes(searchTerm)
    );
  });
}


function updateFeed(items) {
  const feed = document.querySelector("#keepsake-feed");

  if (!feed) return;

  let html = "";

  for (const item of items) {
    html += renderKeepsake(item);
  }

  feed.innerHTML = html || "<p>No keepsakes found.</p>";
}


function setupSearch() {
  const searchInput = document.querySelector("#keepsake-search");
  const searchFilter = document.querySelector("#search-filter");

  if (!searchInput || !searchFilter) return;

  function runSearch() {
    const results = filterKeepsakes(
      searchInput.value,
      searchFilter.value
    );

    updateFeed(results);
  }

  searchInput.addEventListener("input", runSearch);
  searchFilter.addEventListener("change", runSearch);
}

function renderApp() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("keepsake"));

  const selectedKeepsake = keepsakes.find(item => item.id === id);

  const app = document.querySelector("#app");

  app.innerHTML = `
    ${renderHeader()}
    ${
      selectedKeepsake
        ? renderKeepsakeDetail(selectedKeepsake)
        : renderDiscover()
    }
  `;
}

renderApp();
setupSearch();