function TownValueToInput(TownType) {
  var input, filter, table, tr, td, i, txtValue;

  if (TownType == 1) {
    document.getElementById("nanaow").style.display = "inline";
    document.getElementById("datung").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>宜蘭>南澳鄉`;
  }
  if (TownType == 2) {
    document.getElementById("nanaow").style.display = "none";
    document.getElementById("datung").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>宜蘭>大同鄉`;
  }
  if (TownType == 3) {
    document.getElementById("guanshi").style.display = "inline";
    document.getElementById("jienxi").style.display = "none";
    document.getElementById("wophon").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>新竹>關西鎮`;
  }
  if (TownType == 4) {
    document.getElementById("guanshi").style.display = "none";
    document.getElementById("jienxi").style.display = "inline";
    document.getElementById("wophon").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>新竹>尖石鄉`;
  }
  if (TownType == 5) {
    document.getElementById("guanshi").style.display = "none";
    document.getElementById("jienxi").style.display = "none";
    document.getElementById("wophon").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `北部地區>新竹>五峰鄉`;
  }
  if (TownType == 6) {
    document.getElementById("nanchuon").style.display = "inline";
    document.getElementById("stan").style.display = "none";
    document.getElementById("taian").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>苗栗>南庄鄉`;
  }
  if (TownType == 7) {
    document.getElementById("nanchuon").style.display = "none";
    document.getElementById("stan").style.display = "inline";
    document.getElementById("taian").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>苗栗>獅潭鄉`;
  }
  if (TownType == 8) {
    document.getElementById("nanchuon").style.display = "none";
    document.getElementById("stan").style.display = "none";
    document.getElementById("taian").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>苗栗>泰安鄉`;
  }
  if (TownType == 9) {
    document.getElementById("renai").style.display = "inline";
    document.getElementById("yuche").style.display = "none";
    document.getElementById("hsinyi").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>南投>仁愛鄉`;
  }
  if (TownType == 10) {
    document.getElementById("renai").style.display = "none";
    document.getElementById("yuche").style.display = "inline";
    document.getElementById("hsinyi").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>南投>魚池鄉`;
  }
  if (TownType == 11) {
    document.getElementById("renai").style.display = "none";
    document.getElementById("yuche").style.display = "none";
    document.getElementById("hsinyi").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `中部地區>南投>信義鄉`;
  }
  if (TownType == 12) {
    document.getElementById("nama").style.display = "inline";
    document.getElementById("xiaogun").style.display = "none";
    document.getElementById("chianjun").style.display = "none";
    document.getElementById("taoyuann").style.display = "none";
    document.getElementById("maolin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>高雄>那瑪夏區`;
  }
  if (TownType == 13) {
    document.getElementById("nama").style.display = "none";
    document.getElementById("xiaogun").style.display = "inline";
    document.getElementById("chianjun").style.display = "none";
    document.getElementById("taoyuann").style.display = "none";
    document.getElementById("maolin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>高雄>小港區`;
  }
  if (TownType == 14) {
    document.getElementById("nama").style.display = "none";
    document.getElementById("xiaogun").style.display = "none";
    document.getElementById("chianjun").style.display = "inline";
    document.getElementById("taoyuann").style.display = "none";
    document.getElementById("maolin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>高雄>前鎮區`;
  }
  if (TownType == 15) {
    document.getElementById("nama").style.display = "none";
    document.getElementById("xiaogun").style.display = "none";
    document.getElementById("chianjun").style.display = "none";
    document.getElementById("taoyuann").style.display = "inline";
    document.getElementById("maolin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>高雄>桃源區`;
  }
  if (TownType == 16) {
    document.getElementById("nama").style.display = "none";
    document.getElementById("xiaogun").style.display = "none";
    document.getElementById("chianjun").style.display = "none";
    document.getElementById("taoyuann").style.display = "none";
    document.getElementById("maolin").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>高雄>茂林區`;
  }
  if (TownType == 17) {
    document.getElementById("sandiman").style.display = "inline";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>三地門鄉`;
  }
  if (TownType == 18) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "inline";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>霧台鄉`;
  }
  if (TownType == 19) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "inline";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>瑪家鄉`;
  }
  if (TownType == 20) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "inline";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>泰武鄉`;
  }
  if (TownType == 21) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "inline";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>來義鄉`;
  }
  if (TownType == 22) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "inline";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>春日鄉`;
  }
  if (TownType == 23) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "inline";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>獅子鄉`;
  }
  if (TownType == 24) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "inline";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>牡丹鄉`;
  }
  if (TownType == 25) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "inline";
    document.getElementById("pintungcity").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>滿州鄉`;
  }
  if (TownType == 26) {
    document.getElementById("sandiman").style.display = "none";
    document.getElementById("wotai").style.display = "none";
    document.getElementById("majia").style.display = "none";
    document.getElementById("taiwo").style.display = "none";
    document.getElementById("laiyi").style.display = "none";
    document.getElementById("chunli").style.display = "none";
    document.getElementById("lion").style.display = "none";
    document.getElementById("modan").style.display = "none";
    document.getElementById("manjo").style.display = "none";
    document.getElementById("pintungcity").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `南部地區>屏東>屏東市`;
  }
  if (TownType == 27) {
    document.getElementById("fuli").style.display = "inline";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>富里鄉`;
  }
  if (TownType == 28) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "inline";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>卓溪鄉`;
  }
  if (TownType == 29) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "inline";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>玉里鎮`;
  }
  if (TownType == 30) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "inline";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>瑞穗鄉`;
  }
  if (TownType == 31) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "inline";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>豐濱鄉`;
  }
  if (TownType == 32) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "inline";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>光復鄉`;
  }
  if (TownType == 33) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "inline";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>鳳林鎮`;
  }
  if (TownType == 34) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "inline";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>萬榮鄉`;
  }
  if (TownType == 35) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "inline";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>壽豐鄉`;
  }
  if (TownType == 36) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "inline";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>吉安鄉`;
  }
  if (TownType == 37) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "inline";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>花蓮市`;
  }
  if (TownType == 38) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "inline";
    document.getElementById("shiulin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>新城鄉`;
  }
  if (TownType == 39) {
    document.getElementById("fuli").style.display = "none";
    document.getElementById("guoxi").style.display = "none";
    document.getElementById("yuli").style.display = "none";
    document.getElementById("rayxwei").style.display = "none";
    document.getElementById("fonbin").style.display = "none";
    document.getElementById("guonfu").style.display = "none";
    document.getElementById("fonlin").style.display = "none";
    document.getElementById("wonjong").style.display = "none";
    document.getElementById("shoufon").style.display = "none";
    document.getElementById("gian").style.display = "none";
    document.getElementById("hualiencity").style.display = "none";
    document.getElementById("xinchun").style.display = "none";
    document.getElementById("shiulin").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>花蓮>秀林鄉`;
  }
  if (TownType == 40) {
    document.getElementById("daren").style.display = "inline";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>達仁鄉`;
  }
  if (TownType == 41) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "inline";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>大武鄉`;
  }
  if (TownType == 42) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "inline";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>金峰鄉`;
  }
  if (TownType == 43) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "inline";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>太麻里鄉`;
  }
  if (TownType == 44) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "inline";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>卑南鄉`;
  }
  if (TownType == 45) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "inline";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>臺東市`;
  }
  if (TownType == 46) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "inline";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>蘭嶼鄉`;
  }
  if (TownType == 47) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "inline";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>延平鄉`;
  }
  if (TownType == 48) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "inline";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>鹿野鄉`;
  }
  if (TownType == 49) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "inline";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>關山鎮`;
  }
  if (TownType == 50) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "inline";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>東河鄉`;
  }
  if (TownType == 51) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "inline";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>池上鄉`;
  }
  if (TownType == 52) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "inline";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>成功鎮`;
  }
  if (TownType == 53) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "inline";
    document.getElementById("chonbin").style.display = "none";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>海端鄉`;
  }
  if (TownType == 54) {
    document.getElementById("daren").style.display = "none";
    document.getElementById("dawo").style.display = "none";
    document.getElementById("jinfon").style.display = "none";
    document.getElementById("taimali").style.display = "none";
    document.getElementById("beinan").style.display = "none";
    document.getElementById("taitungcity").style.display = "none";
    document.getElementById("lanyu").style.display = "none";
    document.getElementById("ienpin").style.display = "none";
    document.getElementById("luye").style.display = "none";
    document.getElementById("guonshan").style.display = "none";
    document.getElementById("donghe").style.display = "none";
    document.getElementById("chishon").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("haiduan").style.display = "none";
    document.getElementById("chonbin").style.display = "inline";
    const area = document.querySelector("#area_text");
    area.innerHTML = `花東地區>臺東>長濱鄉`;
  }

  input = document.getElementById("match_select");
  table = document.getElementById("match_table");
}

function reset_match() {
  document.getElementById("all_area").style.display = "inline";
  document.getElementById("north_area").style.display = "none";
  document.getElementById("mid_area").style.display = "none";
  document.getElementById("south_area").style.display = "none";
  document.getElementById("east_area").style.display = "none";

  document.getElementById("new_taipei_content").style.display = "none";
  document.getElementById("taoyuan_content").style.display = "none";
  document.getElementById("yilan_content").style.display = "none";
  document.getElementById("hsinchu_content").style.display = "none";
  document.getElementById("miaoli_content").style.display = "none";
  document.getElementById("taichung_content").style.display = "none";
  document.getElementById("nantou_content").style.display = "none";
  document.getElementById("chiayi_content").style.display = "none";
  document.getElementById("kaohsiung_content").style.display = "none";
  document.getElementById("pingtung_content").style.display = "none";
  document.getElementById("hualien_content").style.display = "none";
  document.getElementById("taitung_content").style.display = "none";

  document.getElementById("nanaow").style.display = "none";
  document.getElementById("datung").style.display = "none";
  document.getElementById("guanshi").style.display = "none";
  document.getElementById("jienxi").style.display = "none";
  document.getElementById("wophon").style.display = "none";
  document.getElementById("nanchuon").style.display = "none";
  document.getElementById("stan").style.display = "none";
  document.getElementById("taian").style.display = "none";
  document.getElementById("renai").style.display = "none";
  document.getElementById("yuche").style.display = "none";
  document.getElementById("hsinyi").style.display = "none";
  document.getElementById("nama").style.display = "none";
  document.getElementById("xiaogun").style.display = "none";
  document.getElementById("chianjun").style.display = "none";
  document.getElementById("taoyuann").style.display = "none";
  document.getElementById("maolin").style.display = "none";
  document.getElementById("sandiman").style.display = "none";
  document.getElementById("wotai").style.display = "none";
  document.getElementById("majia").style.display = "none";
  document.getElementById("taiwo").style.display = "none";
  document.getElementById("laiyi").style.display = "none";
  document.getElementById("chunli").style.display = "none";
  document.getElementById("lion").style.display = "none";
  document.getElementById("modan").style.display = "none";
  document.getElementById("manjo").style.display = "none";
  document.getElementById("pintungcity").style.display = "none";
  document.getElementById("fuli").style.display = "none";
  document.getElementById("guoxi").style.display = "none";
  document.getElementById("yuli").style.display = "none";
  document.getElementById("rayxwei").style.display = "none";
  document.getElementById("fonbin").style.display = "none";
  document.getElementById("guonfu").style.display = "none";
  document.getElementById("fonlin").style.display = "none";
  document.getElementById("wonjong").style.display = "none";
  document.getElementById("shoufon").style.display = "none";
  document.getElementById("gian").style.display = "none";
  document.getElementById("hualiencity").style.display = "none";
  document.getElementById("xinchun").style.display = "none";
  document.getElementById("shiulin").style.display = "none";

  document.getElementById("fuli").style.display = "none";
  document.getElementById("guoxi").style.display = "none";
  document.getElementById("yuli").style.display = "none";
  document.getElementById("rayxwei").style.display = "none";
  document.getElementById("fonbin").style.display = "none";
  document.getElementById("guonfu").style.display = "none";
  document.getElementById("fonlin").style.display = "none";
  document.getElementById("wonjong").style.display = "none";
  document.getElementById("shoufon").style.display = "none";
  document.getElementById("gian").style.display = "none";
  document.getElementById("hualiencity").style.display = "none";
  document.getElementById("xinchun").style.display = "none";
  document.getElementById("shiulin").style.display = "none";
  //
  document.getElementById("daren").style.display = "none";
  document.getElementById("dawo").style.display = "none";
  document.getElementById("jinfon").style.display = "none";
  document.getElementById("taimali").style.display = "none";
  document.getElementById("beinan").style.display = "none";
  document.getElementById("taitungcity").style.display = "none";
  document.getElementById("lanyu").style.display = "none";
  document.getElementById("ienpin").style.display = "none";
  document.getElementById("luye").style.display = "none";
  document.getElementById("guonshan").style.display = "none";
  document.getElementById("donghe").style.display = "none";
  document.getElementById("chishon").style.display = "none";
  document.getElementById("success").style.display = "none";
  document.getElementById("haiduan").style.display = "none";
  document.getElementById("chonbin").style.display = "none";

  const area = document.querySelector("#area_text");
  area.innerHTML = ``;
  document.getElementById("area_selects").style.display = "inline";
  document.getElementById("north_city_selects").style.display = "none";
  document.getElementById("mid_city_selects").style.display = "none";
  document.getElementById("south_city_selects").style.display = "none";
  document.getElementById("east_city_selects").style.display = "none";

  $("#teacher_intro").empty();
}
