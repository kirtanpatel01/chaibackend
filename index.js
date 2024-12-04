require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4001;

const github_data = {
    "login": "kirtanpatel01",
    "id": 159251485,
    "node_id": "U_kgDOCX38HQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/159251485?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kirtanpatel01",
    "html_url": "https://github.com/kirtanpatel01",
    "followers_url": "https://api.github.com/users/kirtanpatel01/followers",
    "following_url": "https://api.github.com/users/kirtanpatel01/following{/other_user}",
    "gists_url": "https://api.github.com/users/kirtanpatel01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kirtanpatel01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kirtanpatel01/subscriptions",
    "organizations_url": "https://api.github.com/users/kirtanpatel01/orgs",
    "repos_url": "https://api.github.com/users/kirtanpatel01/repos",
    "events_url": "https://api.github.com/users/kirtanpatel01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kirtanpatel01/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Kirtan Patel",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-02-07T10:25:28Z",
    "updated_at": "2024-10-12T04:49:01Z"
    }

app.get('/', (req, res) => {
    return res.send('Hello World!'); 
});

app.get('/twitter', (req, res) => {
    return res.send(`<h1>You're in twitter page</h1>`);
})

app.get('/login', (req, res) => {
    return res.send('<h1>Please login to enter this page!</h1>')
})

app.get('/youtube', (req, res) => {
    return res.send(`<h1>Kiton</h1>`)
})

app.get('/github', (req, res) => {
    return res.json(github_data)
})
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})