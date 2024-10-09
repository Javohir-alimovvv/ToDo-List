const form = document.querySelector(".form");
const btnAdd = document.querySelector(".btn_add");
const input = document.querySelector(".submit_imput");

const box = document.querySelector(".box");
const DATA = JSON.parse(localStorage.getItem("data")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let val = input.value;


    const row = document.createElement("div");
    const text = document.createElement("p");
    const textInput = document.createElement("input");
    const editBtn = document.createElement("button");
    const completedBtn = document.createElement("buttob");
    const deleteBtn = document.createElement("button");

    row.className = "row";
    text.className = "title";
    // textInput.className = "qushimchainput";
    editBtn.className = "edit";
    completedBtn.className = "competed";
    deleteBtn.className = "delete";

    text.innerText = val;
    editBtn.innerText = "EDIT";
    completedBtn.innerText = "COMPLETED";
    deleteBtn.innerText = "DELETE";

    box.appendChild(row);
    row.appendChild(text);
    row.appendChild(editBtn);
    row.appendChild(completedBtn);
    row.appendChild(deleteBtn);
    // text.appendChild(textInput);

    input.value = ""

    // editBtn.addEventListener("click", (e) => {
    //     text.innerText = textInput.value

    //     // EDITNI ISHLATA OLMADIM

    // })

    completedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const encourage = confirm("Blessings. Try to do more tasks 😁👍")
        if (encourage) {
            row.style.backgroundColor = "gray"
            row.style.border = "none"
        }
    })

    deleteBtn.addEventListener("click", (e) => {
        const warning = confirm("Are you sure to delete this?")
        if (warning) {
            row.remove()
        }
    })
    box.scrollTop = box.scrollHeight

    localStorage.setItem("data", JSON.stringify(DATA));
})