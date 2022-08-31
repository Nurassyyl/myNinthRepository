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
const table = document.querySelector(".table");
let screens = document.querySelectorAll(".screens");
const parse = JSON.parse(localStorage.getItem("text"));
console.log(parse);

class Employee {
    constructor(parse) {
        this.parse = parse;
    }

    render() {
        parse.forEach(function (item) {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td>' + item.name + '</td>' + '<td>' + item.username + '</td>'
            + '<td>' + item.age + '</td>' + '<td>' + item.discharge + '</td>' + '<td>' + item.organization + 
            '</td>' + '<td>' + item.organization + '</td>' + '<td>' + item.organization + '</td>'
            + '<td>' + item.organization + '</td>' + '<td>' + item.organization + '</td>' + 
            '<button id="btn">Удалить</button>';
            table.append(tr);
        });
    }

    validator() {
        control.addEventListener("submit", (event) => {
            event.preventDefault();
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


const em = new Employee(parse);
em.validator();
em.render();
console.log(em);

// const lock = new Locksmith("Shumek", 24);
// lock.skills = "Shumek";
// lock.test();
// console.log(lock);