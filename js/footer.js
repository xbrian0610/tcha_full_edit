$(document).ready(function () {
  const content = `
  <div style="margin-top:-7px;height:15px;background-color:#fff;">
      <img style="width: 100%;height:15px;margin-top:-12px" src="./image/split_img.png" alt="" />
    </div>
      <div style="display: flex; width: 90%; margin: auto;">
        <div class="footer_area">
          <div class="footer_font">主辦單位：衛生福利部國民健康署</div>
          <div class="footer_font">承辦單位：社團法人臺灣跨文化健康照顧學會</div>
        </div>
        <div class="footer_area">
          <div class="footer_font">43442臺中市龍井區新興路55巷5-1號</div>
          <div class="footer_font">
            No. 5-1, Ln. 55, Xinxing Rd., Longjing Dist., Taichung City 434,
            Taiwan (R.O.C.)
          </div>
        </div>
        <div class="footer_area">
          <div class="footer_font">Tel：04-2631-6809</div>
          <div class="footer_font">Email：tchca6688@gmail.com</div>
        </div>
      </div>
      <div
        style="
          border-top: #6b6b6b 1px solid;
          text-align: center;
          padding: 20px;
        " class="footer_font"
      >
        Prevention and delay of disability physical activity field type Pilot
        plan © 2020 All rights reserved.
      </div>
    `;
  $("#footer_cpn").append(content);
});
