const user = {
  name: "",
  email: "",
  password: "",
};

const setObjectToLocaleStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getObjectToLocaleStorage = (key) => JSON.parse(localStorage.getItem(key));

const removeObjectFromLocaleStorage = (key) => {
  localStorage.removeItem(key);
};

if (localStorage.key(0) !== "isLogin") {
  setObjectToLocaleStorage("isLogin", false);
}

const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");
const signBtn = document.querySelector("#sign");
const editBtn = document.querySelector("#edit");
const deleteBtn = document.querySelector("#delete");

form.classList.add("is-hidden");

if (getObjectToLocaleStorage("isLogin")) {
  signBtn.classList.add("is-hidden");
  editBtn.classList.remove("is-hidden");
  deleteBtn.classList.remove("is-hidden");
} else {
  signBtn.classList.remove("is-hidden");
  editBtn.classList.add("is-hidden");
  deleteBtn.classList.add("is-hidden");
}

const toogleForm = () => {
  form.classList.toggle("is-hidden");
};

signBtn.addEventListener("click", toogleForm);
editBtn.addEventListener("click", toogleForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!getObjectToLocaleStorage("isLogin")) {
    setObjectToLocaleStorage("isLogin", true);
  }
  user.name = e.currentTarget.querySelector("#name-input").value;
  user.email = e.currentTarget.querySelector("#email-input").value;
  user.password = e.currentTarget.querySelector("#password-input").value;
  e.currentTarget.querySelector("#name-input").value = "";
  e.currentTarget.querySelector("#email-input").value = "";
  e.currentTarget.querySelector("#password-input").value = "";
  setObjectToLocaleStorage("user", user);
  setObjectToLocaleStorage("isLogin", true);
  signBtn.classList.add("is-hidden");
  editBtn.classList.remove("is-hidden");
  deleteBtn.classList.remove("is-hidden");
  toogleForm();
});

deleteBtn.addEventListener("click", () => {
  removeObjectFromLocaleStorage("user");
  setObjectToLocaleStorage("isLogin", false);
  signBtn.classList.remove("is-hidden");
  editBtn.classList.add("is-hidden");
  deleteBtn.classList.add("is-hidden");
  toogleForm();
});
