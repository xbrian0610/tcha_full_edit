function getNews() {
    if (localStorage.length == "" || localStorage.email == "") {
        alert("請登入會員才能查看完整資訊!!");
        window.location.href = '../index.html';
    }
    var API = "http://192.168.43.56:5002/api/news/GetDataList";

    $.ajax({
        url: API,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        },
        cache: false,
        success(res) {

            for (let i = 0; i < res.length; i += 1) {
                const content = `
                <tr id = news${i + 1}>
                <td><a class="news_title_hover_f" onclick="get_content_front(${res[i].news_Id})">${res[i].news_Title}</a></td>
                <td>${res[i].createTime.substr(0, 10)}</td>
                </tr>`;
                $("#news_table_content").append(content);
            }
        },
        error(err) {
            console.log(err);
        }
    });
}
function get_content_front(target_id) {
    var API = "http://192.168.43.56:5002/api/news/GetData?id=" + target_id;

    $.ajax({
        url: API,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        },
        cache: false,
        success: function (res) {
            console.log(res);

            // alert("#")
            window.location.assign(`http://192.168.43.56:5500/news_content.html?id=${target_id}`);
            // alert("success"); href="./admin_news_content.html"

            // const content = `<div>${res.news_Content}</div>`;
            // console.log(content)
            // $("#news_content").append(content);
        },
        error: function (err) {
            // console.log("此信箱已註冊過!!");
            // alert("此信箱已註冊過!!");
            alert(err.responseText);

            console.log(err.responseText);
        }
    });
}