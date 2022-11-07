//
let count = 0;
let previous = "";
let arr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let tictac = (id) => {
  let ip = document.getElementById(`${id}`);
  let val = document.getElementById(`${id}`).value;
  let msg = document.getElementById("msg");
  val = val.toLowerCase();
  const i = Number(id[0]);
  const j = Number(id[1]);
  arr[i][j] = val;
  //   console.log("v", val, "p", previous);
  if (previous != val && (val == "o" || val == "x")) {
    document.getElementById(`${id}`).disabled = true;
    let response = checkWinner(i, j, val);
    if (response == true) {
      var x = document.querySelectorAll("input");
      x.forEach((e, i) => {
        e.disabled = true;
      });
      console.log(`Winner is ${val}`);
      msg.innerHTML = "";
      let img1 = document.createElement("img");
      img1.src =
        "https://cdn2.iconfinder.com/data/icons/3d-emoji-1/512/Emoji___emoticon_emoji_sticker_face_celebrate_celebration_party_right2x.png";
      let p = document.createElement("p");
      p.innerHTML = ` Congratulations!! Winner is ${val.toUpperCase()} `;
      let img2 = document.createElement("img");
      img2.src =
        "https://cdn2.iconfinder.com/data/icons/3d-emoji-1/512/Emoji___emoticon_emoji_sticker_face_celebrate_celebration_party_right2x.png";
      msg.append(img1, p, img2);
    } else if (response == -1) {
      console.log("TIE");
      msg.innerHTML = "It's a TIE! *_*";
    } else {
      //   console.log("Next turn",previous);
      if (val == "o") {
        msg.innerHTML = `Next turn is of X`;
        previous = "o";
      } else {
        msg.innerHTML = `Next turn is of O`;
        previous = "x";
      }
    }
    previous = val;
  } else if (val == "o" || val == "x") {
    ip.value = "";
    alert(`It's not your turn`);
  } else {
    ip.value = "";
    alert(`Please give valid input \n i.e., O or X`);
  }
};

function checkWinner(i, j, val) {
  count++;
  const n = arr.length;
  let x = 0;
  let col_count = 0;
  let row_count = 0;
  let forward_diagonal_count = 0;
  let backward_diagonal_count = 0;
  while (x < n) {
    if (arr[x][j] === val) {
      col_count++;
    }
    if (arr[i][x] === val) {
      row_count++;
    }
    if (arr[x][x] === val) {
      backward_diagonal_count++;
    }
    if (arr[x][n - 1 - x] === val) {
      forward_diagonal_count++;
    }
    x++;
  }
  //   col
  if (col_count == n) {
    x = 0;
    while (x < n) {
      st = x.toString() + j.toString();
      document.getElementById(`${st}`).classList.add("win");
      x++;
    }
    return true;
  }
  //   row
  if (row_count == n) {
    x = 0;
    while (x < n) {
      st = i.toString() + x.toString();
      document.getElementById(`${st}`).classList.add("win");
      x++;
    }
    return true;
  }
  //   forward_diagonal_count
  if (forward_diagonal_count == n) {
    x = 0;
    while (x < n) {
      st = x.toString() + (n - 1 - x).toString();
      document.getElementById(`${st}`).classList.add("win");
      x++;
    }
    return true;
  }
  //   backward_diagonal_count
  if (backward_diagonal_count == n) {
    x = 0;
    while (x < n) {
      st = x.toString() + x.toString();
      document.getElementById(`${st}`).classList.add("win");
      x++;
    }
    return true;
  } else if (count == 9) {
    return -1;
  } else {
    return false;
  }
  // console.log(arr,i,j,val)
}
