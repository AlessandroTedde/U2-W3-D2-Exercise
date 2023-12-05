class Pet {
  constructor(petName, ownerName, species, breed) {
    this.name = petName;
    this.owner = ownerName;
    this.species = species;
    this.breed = breed;
  }
  isSameOwner = function (ownerCheck) {
    if (ownerCheck.owner === this.owner) {
      return true;
    } else {
      return false;
    }
  };
}

const Trudy = new Pet("Trudy", "Marco", "cane", "pastore tedesco");
const Chonker = new Pet("Chonker", "Marco", "gatto", "abissino");
const Contessa = new Pet("Contessa", "Gigi", "gatto", "persiano");
const Kiki = new Pet("Kiki", "Gigi", "cane", "barboncino");

const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
  attachComplete();
  attachDelete();
};

const addTask = function () {
  let tasks = document.querySelector("#tasks");
  let inputField1 = document.getElementById("input1");
  let inputField2 = document.getElementById("input2");
  let value1 = inputField1.value;
  let value2 = inputField2.value;
  let newTask = `
      <div class="task">
          <span id="taskname">
             Nome Bestiola : ${inputField1.value} <br>
             Seconda Bestiola per controllo: ${inputField2.value}
             Stesso Padrone : ${value1.isSameOwner(value2)}
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `;
  tasks.innerHTML += newTask;
  inputField.value = "";
};

const attachComplete = function () {
  let allTasks = document.querySelectorAll(".task");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};

const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
