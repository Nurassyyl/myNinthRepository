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
console.log(parse);

class Employee {
    constructor(name, userName, age, jobTitle, organization, discharge, checkbox, date, select, button) {
        this.name = name;
        this.userName = userName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.organization = organization;
        this.discharge = discharge;
        this.checkbox = checkbox;
        this.date = date;
        this.select = select;
        this.button = button;
    }

    validator() {
        control.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(name.value);
            localStorage.setItem("text", JSON.stringify([...parse || "", { name: name.value, username: userName.value, age: age.value, jobtitle: jobTitle.value, organization: organization.value, discharge: discharge.value }]));
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
        super.hello();
    }
}

class Driver extends Employee {

}


const em = new Employee();
em.validator();
console.log(em);

// const lock = new Locksmith("Shumek", 24);
// lock.skills = "Shumek";
// lock.test();
// console.log(lock);