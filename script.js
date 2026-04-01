const players = [
  { id: 1, name: "PV Sindhu", country: "India", ranking: 11, image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Saina Nehwal", country: "India", ranking: 32, image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Kidambi Srikanth", country: "India", ranking: 20, image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Lakshya Sen", country: "India", ranking: 15, image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: 5, name: "HS Prannoy", country: "India", ranking: 9, image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Chen Long", country: "China", ranking: 25, image: "https://randomuser.me/api/portraits/men/6.jpg" },
  { id: 7, name: "Lin Dan", country: "China", ranking: 40, image: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: 8, name: "Shi Yuqi", country: "China", ranking: 6, image: "https://randomuser.me/api/portraits/men/8.jpg" },
  { id: 9, name: "Chen Yufei", country: "China", ranking: 4, image: "https://randomuser.me/api/portraits/women/9.jpg" },
  { id: 10, name: "Akane Yamaguchi", country: "Japan", ranking: 3, image: "https://randomuser.me/api/portraits/women/10.jpg" },

  { id: 11, name: "Kento Momota", country: "Japan", ranking: 18, image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 12, name: "Nozomi Okuhara", country: "Japan", ranking: 10, image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 13, name: "Viktor Axelsen", country: "Denmark", ranking: 1, image: "https://randomuser.me/api/portraits/men/13.jpg" },
  { id: 14, name: "Anders Antonsen", country: "Denmark", ranking: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
  { id: 15, name: "Carolina Marin", country: "Spain", ranking: 2, image: "https://randomuser.me/api/portraits/women/15.jpg" },
  { id: 16, name: "Tai Tzu Ying", country: "Taiwan", ranking: 7, image: "https://randomuser.me/api/portraits/women/16.jpg" },
  { id: 17, name: "Ratchanok Intanon", country: "Thailand", ranking: 8, image: "https://randomuser.me/api/portraits/women/17.jpg" },
  { id: 18, name: "Lee Zii Jia", country: "Malaysia", ranking: 12, image: "https://randomuser.me/api/portraits/men/18.jpg" },
  { id: 19, name: "Aaron Chia", country: "Malaysia", ranking: 14, image: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: 20, name: "Soh Wooi Yik", country: "Malaysia", ranking: 14, image: "https://randomuser.me/api/portraits/men/20.jpg" },

  { id: 21, name: "Kevin Sanjaya", country: "Indonesia", ranking: 13, image: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: 22, name: "Marcus Gideon", country: "Indonesia", ranking: 13, image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 23, name: "Anthony Ginting", country: "Indonesia", ranking: 16, image: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 24, name: "Jonatan Christie", country: "Indonesia", ranking: 17, image: "https://randomuser.me/api/portraits/men/24.jpg" },
  { id: 25, name: "Greysia Polii", country: "Indonesia", ranking: 22, image: "https://randomuser.me/api/portraits/women/25.jpg" },
  { id: 26, name: "Apriyani Rahayu", country: "Indonesia", ranking: 21, image: "https://randomuser.me/api/portraits/women/26.jpg" },
  { id: 27, name: "He Bingjiao", country: "China", ranking: 6, image: "https://randomuser.me/api/portraits/women/27.jpg" },
  { id: 28, name: "An Se Young", country: "South Korea", ranking: 2, image: "https://randomuser.me/api/portraits/women/28.jpg" },
  { id: 29, name: "Chou Tien Chen", country: "Taiwan", ranking: 11, image: "https://randomuser.me/api/portraits/men/29.jpg" },
  { id: 30, name: "Ng Ka Long", country: "Hong Kong", ranking: 19, image: "https://randomuser.me/api/portraits/men/30.jpg" },

  { id: 31, name: "Lee Chong Wei", country: "Malaysia", ranking: 50, image: "https://randomuser.me/api/portraits/men/31.jpg" },
  { id: 32, name: "Taufik Hidayat", country: "Indonesia", ranking: 55, image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 33, name: "Peter Gade", country: "Denmark", ranking: 60, image: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: 34, name: "Jan O Jorgensen", country: "Denmark", ranking: 45, image: "https://randomuser.me/api/portraits/men/34.jpg" },
  { id: 35, name: "Parupalli Kashyap", country: "India", ranking: 35, image: "https://randomuser.me/api/portraits/men/35.jpg" },
  { id: 36, name: "Sameer Verma", country: "India", ranking: 28, image: "https://randomuser.me/api/portraits/men/36.jpg" },
  { id: 37, name: "B Sai Praneeth", country: "India", ranking: 30, image: "https://randomuser.me/api/portraits/men/37.jpg" },
  { id: 38, name: "Ashwini Ponnappa", country: "India", ranking: 18, image: "https://randomuser.me/api/portraits/women/38.jpg" },
  { id: 39, name: "Jwala Gutta", country: "India", ranking: 22, image: "https://randomuser.me/api/portraits/women/39.jpg" },
  { id: 40, name: "Gabrielle Adcock", country: "England", ranking: 20, image: "https://randomuser.me/api/portraits/women/40.jpg" },

  { id: 41, name: "Chris Adcock", country: "England", ranking: 20, image: "https://randomuser.me/api/portraits/men/41.jpg" },
  { id: 42, name: "Zhao Yunlei", country: "China", ranking: 10, image: "https://randomuser.me/api/portraits/women/42.jpg" },
  { id: 43, name: "Fu Haifeng", country: "China", ranking: 12, image: "https://randomuser.me/api/portraits/men/43.jpg" },
  { id: 44, name: "Mathias Boe", country: "Denmark", ranking: 15, image: "https://randomuser.me/api/portraits/men/44.jpg" },
  { id: 45, name: "Carsten Mogensen", country: "Denmark", ranking: 15, image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 46, name: "Yuta Watanabe", country: "Japan", ranking: 9, image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: 47, name: "Arisa Higashino", country: "Japan", ranking: 9, image: "https://randomuser.me/api/portraits/women/47.jpg" },
  { id: 48, name: "Dechapol Puavaranukroh", country: "Thailand", ranking: 7, image: "https://randomuser.me/api/portraits/men/48.jpg" },
  { id: 49, name: "Sapsiree Taerattanachai", country: "Thailand", ranking: 7, image: "https://randomuser.me/api/portraits/women/49.jpg" },
  { id: 50, name: "Goh Liu Ying", country: "Malaysia", ranking: 16, image: "https://randomuser.me/api/portraits/women/50.jpg" }
];

let currentData = [...players];
let favorites = JSON.parse(localStorage.getItem("fav")) || [];

// render
function display(data) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  data.forEach(p => {
    const isFav = favorites.includes(p.id);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.country}</p>
      <p>Rank: ${p.ranking}</p>
      <span class="favorite" data-id="${p.id}">
        ${isFav ? "❤️" : "🤍"}
      </span>
    `;

    container.appendChild(card);
  });
}

// search
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  currentData = players.filter(p => p.name.toLowerCase().includes(val));
  display(currentData);
});

// filter
const countries = [...new Set(players.map(p => p.country))];
const select = document.getElementById("countryFilter");

countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  select.appendChild(opt);
});

select.addEventListener("change", e => {
  const val = e.target.value;
  currentData = val ? players.filter(p => p.country === val) : players;
  display(currentData);
});

// sort
document.getElementById("sortBtn").addEventListener("click", () => {
  currentData.sort((a, b) => a.ranking - b.ranking);
  display(currentData);
});

// favorites toggle (event delegation)
document.addEventListener("click", e => {
  if (e.target.classList.contains("favorite")) {
    const id = Number(e.target.dataset.id);

    if (favorites.includes(id)) {
      favorites = favorites.filter(f => f !== id);
    } else {
      favorites.push(id);
    }

    localStorage.setItem("fav", JSON.stringify(favorites));
    display(currentData);
  }
});

// show favorites
document.getElementById("favBtn").addEventListener("click", () => {
  const favData = players.filter(p => favorites.includes(p.id));
  display(favData);
});

// init
display(players);