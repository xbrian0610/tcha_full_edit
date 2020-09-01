function SetValueToInput(AreaType) {
  var input, filter, table, tr, td, i, txtValue;

  if (AreaType == 1) {
    document.getElementById("all_area").style.display = "none";
    document.getElementById("north_area").style.display = "inline";
    document.getElementById("mid_area").style.display = "none";
    document.getElementById("south_area").style.display = "none";
    document.getElementById("east_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>`;
    document.getElementById("area_selects").style.display = "none";
    document.getElementById("north_city_selects").style.display = "inline";
    document.getElementById("mid_city_selects").style.display = "none";
    document.getElementById("south_city_selects").style.display = "none";
    document.getElementById("east_city_selects").style.display = "none";

    // document.getElementById("reset_match_btn").style.display = "";
  }
  if (AreaType == 2) {
    document.getElementById("all_area").style.display = "none";
    document.getElementById("north_area").style.display = "none";
    document.getElementById("mid_area").style.display = "inline";
    document.getElementById("south_area").style.display = "none";
    document.getElementById("east_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>`;
    document.getElementById("area_selects").style.display = "none";
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("mid_city_selects").style.display = "inline";
    document.getElementById("south_city_selects").style.display = "none";
    document.getElementById("east_city_selects").style.display = "none";

    // document.getElementById("reset_match_btn").style.display = "";
  }
  if (AreaType == 3) {
    document.getElementById("all_area").style.display = "none";
    document.getElementById("north_area").style.display = "none";
    document.getElementById("mid_area").style.display = "none";
    document.getElementById("south_area").style.display = "inline";
    document.getElementById("east_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>`;
    document.getElementById("area_selects").style.display = "none";
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("mid_city_selects").style.display = "none";
    document.getElementById("south_city_selects").style.display = "inline";
    document.getElementById("east_city_selects").style.display = "none";

    // document.getElementById("reset_match_btn").style.display = "";
  }
  if (AreaType == 4) {
    document.getElementById("all_area").style.display = "none";
    document.getElementById("north_area").style.display = "none";
    document.getElementById("mid_area").style.display = "none";
    document.getElementById("south_area").style.display = "none";
    document.getElementById("east_area").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>`;
    document.getElementById("area_selects").style.display = "none";
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("mid_city_selects").style.display = "none";
    document.getElementById("south_city_selects").style.display = "none";
    document.getElementById("east_city_selects").style.display = "inline";

    // document.getElementById("reset_match_btn").style.display = "";
  }
  input = document.getElementById("match_select");
  table = document.getElementById("match_table");
}

// function reset_match() {
//   document.getElementById("all_area").style.display = "inline";
//   document.getElementById("north_area").style.display = "none";
//   document.getElementById("mid_area").style.display = "none";
//   document.getElementById("south_area").style.display = "none";
//   document.getElementById("east_area").style.display = "none";
//   const area = document.querySelector("#area_text");
//   area.innerHTML = ``;
//   document.getElementById("area_selects").style.display = "inline";
//   document.getElementById("north_city_selects").style.display = "none";
//   document.getElementById("mid_city_selects").style.display = "none";
//   document.getElementById("south_city_selects").style.display = "none";
//   document.getElementById("east_city_selects").style.display = "none";
// }

// function hidden_reset() {
//   console.log(`onload`);
//   var area_selects = document.getElementById("area_selects").style.display;
//   console.log(typeof area_selects);

//   if (area_selects == "inline") {
//     document.getElementById("reset_match_btn").style.display = "none";
//   } else {
//     document.getElementById("reset_match_btn").style.display = "";
//   }
// }
