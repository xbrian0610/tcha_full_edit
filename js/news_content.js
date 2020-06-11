function get_target_news_F() {
    var parameters = location.search.substring(1).split("&");
    console.log(parameters);//get ?"id=3"
    var temp = parameters[0].split("=");
    console.log(temp);//"id","3"
    l = unescape(temp[1]);//get "3"
    // const test = document.getElementById("log").innerHTML = l;
    console.log(l);

    var API = "http://192.168.43.56:5002/api/news/GetData?id=" + l;

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
            // window.location.assign(`http://192.168.43.56:5500/admin_news_content.html?id=${target_id}`);
            // alert("success"); href="./admin_news_content.html"
            const tit_content = `
                <div>${res.news_Title}</div>
            `;
            const content = `
                <div><strong>${res.news_Content}</strong></div>
            `;
            console.log(content)
            $("#news_title_f").append(tit_content);
            $("#news_content_p").append(content);
        },
        error: function (err) {
            // console.log("此信箱已註冊過!!");
            // alert("此信箱已註冊過!!");
            alert(err.responseText);

            console.log(err.responseText);
        }
    });

}