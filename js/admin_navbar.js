$(document).ready(function () {
    const content = `
    <div id="admin_index_title">
        管理_108年預防及延緩失能身體活動場域型方案推展試辦計畫
    </div>

    <div id="admin_side_bar">
        <div class="admin_side_bar_content"><a class="admin_side_bar_aset" href="./admin.html">首頁</a></div>
        <div class="admin_side_bar_content"><a class="admin_side_bar_aset" href="./admin_members.html">會員專區</a>
        </div>
        <div class="admin_side_bar_content"><a class="admin_side_bar_aset" href="./admin_news.html">最新消息</a></div>
        <div class="admin_side_bar_content"><a class="admin_side_bar_aset" href="./admin_course.html">培訓課程</a></div>
        <div class="admin_side_bar_content"><a class="admin_side_bar_aset"
                href="./admin_learning_online.html">線上自學</a>
        </div>
        <div class="admin_side_bar_content"><a class="admin_side_bar_aset" href="./admin_files.html">繳交檔案區</a></div>
    </div>
    `;
    $('#admin_nav_sid_bar').append(content);
})