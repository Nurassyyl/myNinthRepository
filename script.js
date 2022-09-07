"use strict";

const control = document.querySelector(".control");
const name = document.getElementById("name");
const userName = document.getElementById("username");
const age = document.getElementById("age");
const jobTitle = document.getElementById("jodtitle");
const organization = document.getElementById("organization");
const discharge = document.getElementById("discharge");
const checkbox = document.getElementById("checkbox");
const date = document.getElementById("date");
const select = document.querySelector(".header select");
const button = document.getElementById("submit");
let screens = document.querySelectorAll(".screens");
const parse = JSON.parse(localStorage.getItem("text"));

class Employee {
    constructor() {}

    validator() {
        control.addEventListener("submit", (event) => {
            event.preventDefault();
            const selected = select.options[select.selectedIndex].textContent;
            if (selected === "Слесарь") {
                console.log(selected, "Слесарь");
            } else if (selected === "Водитель") {
                console.log(selected, "Водитель");
            } else {
                return
            }

            // console.log(name.value);
            // localStorage.setItem("text", JSON.stringify([...parse || "", { name: name.value, username: userName.value, age: age.value, jobtitle: jobTitle.value, organization: organization.value, discharge: discharge.value }]));
            // return "arman";
        });
    }
}

class Locksmith extends Employee {
    constructor(name, age, skills = []) {
        super(name, age);
        this._skills = skills;
    }

    get skills() {
        return this._skills;
    }

    set skills(str) {
        this.skills.push(str);
    }

    test() {
        super.validator();
    }
}

class Driver extends Employee {

}


const lock = new Locksmith();
lock.test();
lock.skills = 'Privet';
lock.skills = 'Privet';
console.log(lock.skills);

console.log(lock);

// const lock = new Locksmith("Shumek", 24);
// lock.skills = "Shumek";
// lock.test();
// console.log(lock);