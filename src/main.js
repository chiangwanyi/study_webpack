import $ from "jquery";

import "./css/index.css"
import "bootstrap/dist/css/bootstrap.css"

import "./css/index.less"
import "./css/index.scss"

$(function () {
    $("li:odd").css("color", "orange");
    $("li:even").css("color", "pink");
})

class Person {
    static info = { id: 1, name: "123" };
}

console.log(Person.info);

[1, 2, 3, 4].forEach(el => {
    console.log(el)
});
