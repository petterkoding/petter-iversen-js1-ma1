const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// q1
let cat = {
  complain: function purr() {
    console.log("Meow!");
  },
};
cat.complain();

// q2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// q3
heading.style.fontSize = "2em";

// q4
heading.classList.add("subheading");

// q5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// q6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// or
// resultsContainer.innerHTML = `<p style="background:yellow">New paragraph</p>`;

// q7

function questionSeven(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(cats[i].name);
  }
}
questionSeven(cats);

// q8

function createCats(cats) {
  // create html var
  let html = "";
  // loop through the parameter
  for (let i = 0; i < cats.length; i++) {
    let noAge = "unknown";

    if (cats[i].age) {
      noAge = cats[i].age;
    }

    html += `
    <div>
    <h5>Name: ${cats[i].name}</h5>
    <p>Age: ${noAge}</p>
    </div>
  `;
  }

  return html;
}

const newHtml = createCats(cats);

const catList = document.querySelector(".cat-container");

catList.innerHTML = newHtml;
