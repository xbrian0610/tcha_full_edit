function CityValueToInput(CityType) {
  var input, filter, table, tr, td, i, txtValue;

  if (CityType == 1) {
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("new_taipei_content").style.display = "inline";
    document.getElementById("north_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>新北`;
  }
  if (CityType == 2) {
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("taoyuan_content").style.display = "inline";
    document.getElementById("north_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>桃園`;
  }
  if (CityType == 3) {
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("yilan_content").style.display = "inline";
    document.getElementById("north_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>宜蘭`;
  }
  if (CityType == 4) {
    document.getElementById("north_city_selects").style.display = "none";
    document.getElementById("hsinchu_content").style.display = "inline";
    document.getElementById("north_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>新竹`;
  }
  if (CityType == 5) {
    document.getElementById("mid_city_selects").style.display = "none";
    document.getElementById("miaoli_content").style.display = "inline";
    document.getElementById("mid_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>苗栗`;
  }
  if (CityType == 6) {
    document.getElementById("mid_city_selects").style.display = "none";
    document.getElementById("taichung_content").style.display = "inline";
    document.getElementById("mid_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>臺中`;
  }
  if (CityType == 7) {
    document.getElementById("mid_city_selects").style.display = "none";
    document.getElementById("nantou_content").style.display = "inline";
    document.getElementById("mid_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>南投`;
  }
  if (CityType == 8) {
    document.getElementById("south_city_selects").style.display = "none";
    document.getElementById("chiayi_content").style.display = "inline";
    document.getElementById("south_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>嘉義`;
  }
  if (CityType == 9) {
    document.getElementById("south_city_selects").style.display = "none";
    document.getElementById("kaohsiung_content").style.display = "inline";
    document.getElementById("south_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>高雄`;
  }
  if (CityType == 10) {
    document.getElementById("south_city_selects").style.display = "none";
    document.getElementById("pingtung_content").style.display = "inline";
    document.getElementById("south_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東`;
  }
  if (CityType == 11) {
    document.getElementById("east_city_selects").style.display = "none";
    document.getElementById("hualien_content").style.display = "inline";
    document.getElementById("east_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮`;
  }
  if (CityType == 12) {
    document.getElementById("east_city_selects").style.display = "none";
    document.getElementById("taitung_content").style.display = "inline";
    document.getElementById("east_area").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東`;
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

//   document.getElementById("new_taipei_content").style.display = "none";
//   document.getElementById("taoyuan_content").style.display = "none";
//   document.getElementById("yilan_content").style.display = "none";
//   document.getElementById("hsinchu_content").style.display = "none";
//   document.getElementById("miaoli_content").style.display = "none";
//   document.getElementById("taichung_content").style.display = "none";

//   const area = document.querySelector("#area_text");
//   area.innerHTML = ``;
//   document.getElementById("area_selects").style.display = "inline";
//   document.getElementById("north_city_selects").style.display = "none";
//   document.getElementById("mid_city_selects").style.display = "none";
//   document.getElementById("south_city_selects").style.display = "none";
//   document.getElementById("east_city_selects").style.display = "none";
// }
