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
  isMobile = false;
  arrow: string;
  code;
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    const col = +localStorage.getItem('col') || this.col;
    const row = +localStorage.getItem('row') || this.row;
    console.log(event);
    this.code = event.code;
    const fox = document.getElementById("fox");
    console.log("parent", fox.parentElement);
    let x = event.key;
    console.log(
      "x!",
      x,
      +fox.parentElement.id,
      +fox.parentElement.id + col
    );

    if (x === 'ArrowLeft') {
      console.log("left!", x, +fox.parentElement.id);
      if (fox.parentElement.id !== "0") {
        const el = document.getElementById(
          (+fox.parentElement.id - 1).toString()
        );
        if (el.childNodes !== null) {
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

    if (x === 'ArrowRight') {
      if (fox.parentElement) {
        const el = document.getElementById(
          (+fox.parentElement.id + 1).toString()
        );
        if (el.childNodes !== null) {
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

    if (x === 'ArrowDown') {
      if (fox.parentElement) {
        const el = document.getElementById(
          (+fox.parentElement.id + col).toString()
        );
        console.log("parent grid", el);
        if (el.childNodes !== null) {
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

    if (x === 'ArrowUp') {
      if (fox.parentElement) {
        const el = document.getElementById(
          (+fox.parentElement.id - col).toString()
        );
        console.log("parent grid", el);
        if (el.childNodes !== null) {
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
    event.preventDefault();
  }

  ngOnInit() {
      // device detection
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      this.isMobile = true;
    }
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


  keyboardAction(action) {
    switch (true) {
      case action === 'top': {
        this.arrow = action;
        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowUp' }));
        break;
      }
      case action === 'down': {
        this.arrow = 'down';
        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowDown' }));
        break;
      }
      case action === 'left': {
        this.arrow = action;
        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowLeft' }));
        break;
      }
      case action === 'right': {
        this.arrow = action;
        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'ArrowRight' }));
        break;
      }
      default :{
        return;
      }
    }
  }
}
