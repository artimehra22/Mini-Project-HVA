// 527eda21baf94ec594db4d55d85d39d5
const API_KEY = "527eda21baf94ec594db4d55d85d39d5";
const url = "https://newsapi.org/v2/top-headlines?country=india&apiKey=527eda21baf94ec594db4d55d85d39d5";
window.addEventListener('load',()=>fetchNews("india"));
async function fetchNews (query){
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
};

function bindData(articles){
    
}

