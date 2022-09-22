// Calling an external API
// function getHere() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((res) => {
//       let externalApiData = "";

//       res.forEach((users) => {
//         externalApiData += `
//         <div class="card" style="width: 18rem">
//         <div class="card-body">
//         <h2>
//         User ID: ${users.id}
//         </h2>
//             <h5 class="card-title" id="name">${users.name}</h5>
//             <p class="card-text">
//              <b> City:</b>  ${users.address.city}

//             </p>
//             <p>
//             <b> Suite:</b> ${users.address.suite}
//             </p>
//             <p class="email">
//             Email: ${users.email}
//             </p>
//         </div>
//         </div>
//         `;
//       });

//       document.querySelector("#output").innerHTML = externalApiData;
//     })
//     .catch((error) => console.log(error));

function data1() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      let title = data[0].name;
      let text = data[0].body;
      let project1Title = document.querySelector("#project1-title");
      let project1Text = document.querySelector("#project1-text");

      project1Title.innerHTML = title;
      project1Text.innerHTML = text;
    });
}

data1();

function data2() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      let title = data[1].name;
      let text = data[1].body;
      let project1Title = document.querySelector("#project2-title");
      let project1Text = document.querySelector("#project2-text");

      project1Title.innerHTML = title;
      project1Text.innerHTML = text;
    });
}

data2();

function data3() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      let title = data[2].name;
      let text = data[2].body;
      let project1Title = document.querySelector("#project3-title");
      let project1Text = document.querySelector("#project3-text");

      project1Title.innerHTML = title;
      project1Text.innerHTML = text;
    });
}

data3();
