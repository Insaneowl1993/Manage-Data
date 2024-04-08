
let news = [
    {
        id: 1, title: 'Election Results',
        content: "Newly elected minister..."
    },
    {
        id: 2, title: 'Sporting Success',
        content: "World Cup winners..."
    },
    {
        id: 3, title: 'Tornado Warning',
        content: "Residents should prepare..."
    }
];

function getNews() {
    // clear out previous news items
    document.getElementById('news-list').innerText = '';

    news.forEach(item => addNewsItem(item))
}

// clone, then populate, then append a new template
function addNewsItem(news) {
    const template = document.getElementById("news-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = news.title;
    template.querySelector('.card-text').innerText = news.content;
    document.querySelector('#news-list').appendChild(template);
}

// load news initially
getNews();

// reload news every 5 seconds
let newsTimer = setInterval(getNews, 5000);

// part 2: add news item
function createNewsItem(event) {
    event.preventDefault();
    let newTitle = document.getElementById('newsTitle').value;
    let newContent = document.getElementById('newsContent').value;
    news.push({title: newTitle, content: newContent, id: news.length + 1})
}

function stopInterval() {
    clearInterval(newsTimer)
}