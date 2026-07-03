const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "./images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "./images/john.png"
  }
];

let curUserId = 0;

function toggle() {

    if (curUserId == 0)
        curUserId = 1;
    else
        curUserId = 0;

    // Update Image
    document.getElementById("user-img").src = users[curUserId].image;

    // Update Name
    document.getElementById("card-name").innerText = users[curUserId].name;

    // Update Gender
    document.getElementById("card-gender").innerText = users[curUserId].gender;
}