const user_form = document.querySelector("#user_form");
var users = [];
const dataBox = document.querySelector("#dataBox");

window.addEventListener(
    "load",
    function () {
        const userData = localStorage.getItem("users");
        if (userData !== null) {
            users = JSON.parse(userData);
            updateDataBox();
        }
    }
)


document.addEventListener(
    "contextmenu",
    function (e) {
        e.preventDefault();
    }
);

user_form.addEventListener(
    "submit",
    function (e) {
        const name = e.target.name.value;
        const age = e.target.user_age.value;
        if (name == "") {
            e.target.name.focus();
        } else if (age == "") {
            e.target.user_age.focus();
        } else {
            // const data = {
            //     name: name,
            //     age: age
            // };
            const data = { name, age };
            users.push(data);
            localStorage.setItem("users", JSON.stringify(users));
            updateDataBox();
            e.target.reset();
        }
        e.preventDefault();
    }
)

function updateDataBox() {
    let list = "";
    users.forEach(
        (d) => {
            list += `<li> ${d.name} is ${d.age} years old </li>`;
        }
    );
    dataBox.innerHTML = list;
}