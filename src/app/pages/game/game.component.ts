import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  col = 5;
  row = 4;
  totalFruits;
  fruitConsumed = 0;
  stepsCount = 0;

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    const col = +localStorage.getItem('col') || this.col;
    const row = +localStorage.getItem('row') || this.row;
    console.log(event);
    const fox = document.getElementById("fox");
    console.log("parent", fox.parentElement);
    let x = event.keyCode;
    console.log(
      "x!",
      x,
      +fox.parentElement.id,
      +fox.parentElement.id + col
    );

    if (x === 37) {
      console.log("left!", x, +fox.parentElement.id);
      if (fox.parentElement.id !== "0") {
        const el = document.getElementById(
          (+fox.parentElement.id - 1).toString()
        );
        if (el.childNodes) {
          el.childNodes.forEach((child, index) => {
            if (child["className"] == "fruit") {
              this.fruitConsumed++;
              child.remove();
            }
            console.log(
              "child",
              child["className"],
              child["attributes"]["class"] === "fruit"
            );
          });
          console.log("el.querySelector", el);
        }
        if (el) {
          el.appendChild(fox);
        }
           this.stepsCount++;
        return;
      }
    }

    if (x === 39) {
      if (fox.parentElement) {
        const el = document.getElementById(
          (+fox.parentElement.id + 1).toString()
        );
        if (el.childNodes) {
          el.childNodes.forEach((child, index) => {
            if (child["className"] == "fruit") {
              this.fruitConsumed++;
              child.remove();
            }
            console.log(
              "child",
              child["className"],
              child["attributes"]["class"] === "fruit"
            );
          });
          console.log("el.querySelector", el);
        }
        if (el) {
          el.appendChild(fox);
        }
        this.stepsCount++;
      }

      console.log("right!", x);
    }

    if (x === 40) {
      if (fox.parentElement) {
        const el = document.getElementById(
          (+fox.parentElement.id + col).toString()
        );
        console.log("parent grid", el);
        if (el.childNodes) {
          el.childNodes.forEach((child, index) => {
            if (child["className"] == "fruit") {
              this.fruitConsumed++;
              child.remove();
            }
            console.log(
              "child",
              child["className"],
              child["attributes"]["class"] === "fruit"
            );
          });
          console.log("el.querySelector", el);
        }
        if (el) {
          el.appendChild(fox);
        }
        this.stepsCount++;
      }
      console.log("right!", x);
    }

    if (x === 38) {
      if (fox.parentElement) {
        const el = document.getElementById(
          (+fox.parentElement.id - col).toString()
        );
        console.log("parent grid", el);
        if (el.childNodes) {
          el.childNodes.forEach((child, index) => {
            if (child["className"] == "fruit") {
              this.fruitConsumed++;
              child.remove();
            }
            console.log(
              "child",
              child["className"],
              child["attributes"]["class"] === "fruit"
            );
          });
          console.log("el.querySelector", el);
        }
        if (el) {
          el.appendChild(fox);
        }
      }
      this.stepsCount++;
      console.log("right!", x);
    }
  }

  ngOnInit() {
   this.play();
  }

  getRandomArbitrary(min, max) {
    const nums = new Set();
    while (nums.size !== 6) {
      nums.add(Math.floor(Math.random() * (max - min) + min) + 1);
    }
    console.log();
    return [...nums];
  }

  play() {
    this.totalFruits;
    this.fruitConsumed = 0;
    this.stepsCount = 0;
    const l = document.querySelector(".wrapper");
    if(l) {
      while (l.hasChildNodes()) {
        l.removeChild(l.firstChild);
      }
    }
    const col = localStorage.getItem('col') || this.col;
    const row = localStorage.getItem('row') || this.row;
    const style = `grid-template-columns:repeat(${col}, 50px);grid-template-rows: repeat(${row}, 50px);`;
    l.setAttribute("style", style);
    const t = document.createElement("div");
    t.classList.add("box");
    const shape = document.createElement("span");
    shape.innerHTML = "&#10086";
    shape.classList.add("fruit");
    shape.style.color = "red";
    shape.style.fontSize = "30px";

    const subject = document.createElement("span");
    subject.innerHTML = "	&#128571;";
    subject.setAttribute("id", "fox");
    subject.style.color = "red";
    subject.style.fontSize = "30px";

    // layout
    for (let i = 0; i < +col * +row; i++) {
      t.setAttribute("id", i.toString());
      l.appendChild(t.cloneNode(true));
    }

    // fruit
    this.totalFruits = this.getRandomArbitrary(+col * +row-1, row);
    for (let j = 0; j <= 5; j++) {
      if (this.totalFruits[j]) {
        const el = document.getElementById(this.totalFruits[j].toString());
        if (el) {
          console.log(el);
          shape.setAttribute("id", "fruit" + j.toString());
          el.appendChild(shape.cloneNode(true));
        }
        console.log(this.totalFruits[j]);
      }
    }
    const el = document.getElementById("0");
    el.appendChild(subject.cloneNode(true));
  }

}
