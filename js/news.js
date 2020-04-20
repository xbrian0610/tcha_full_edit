const API = "";

function getNews(callback) {
    $.ajax({
        url: `${API}s`,
        type: "GET",
        dataType: "json",
        cache: false,
        success(res) {
            if (callback) {
                callback();
            }
            for (let i = 0; i < res.length; i += 1) {
                const content = `
                <tr id = news${i + 1}>
                    <td>${res[i].date}</td>
                    <td><a href="#">${res[i].title}</a></td>
                </tr>`;
                $("#news_table_content").append(content);
            }
        },
        error(err) {
            console.log(err);
        }
    });
}