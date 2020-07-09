var newsurl="http://newsapi.org/v2/everything\?q\=overwatch\&from\=2020-06-03\&sortBy\=publishedAt\&apiKey\=b0eb5e0f24ef42c2ada704c8036d1595";
function getnews() {
    fetch(newsurl)
        .then((res) => res.json())
        .then((data) => {
            // 这里是获取到的新闻json内容，data已经是这个内容类型的头了
        })
}