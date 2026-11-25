require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT

const JsonData = {
    "login": "dev-akashshar",
    "id": 136073293,
    "node_id": "U_kgDOCBxQTQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/136073293?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dev-akashshar",
    "html_url": "https://github.com/dev-akashshar",
    "followers_url": "https://api.github.com/users/dev-akashshar/followers",
    "following_url": "https://api.github.com/users/dev-akashshar/following{/other_user}",
    "gists_url": "https://api.github.com/users/dev-akashshar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dev-akashshar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dev-akashshar/subscriptions",
    "organizations_url": "https://api.github.com/users/dev-akashshar/orgs",
    "repos_url": "https://api.github.com/users/dev-akashshar/repos",
    "events_url": "https://api.github.com/users/dev-akashshar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dev-akashshar/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Akash",
    "company": null,
    "blog": "https://akashshar.xyz/",
    "location": "Bareilly Uttar Pradesh",
    "email": null,
    "hireable": null,
    "bio": "💻Backend Developer | 🔁Code. Learn. Build. Repeat. 🚀 |🙏Jai Shree Mahakaal 🕉️",
    "twitter_username": "26_akash_sharma",
    "public_repos": 26,
    "public_gists": 0,
    "followers": 12,
    "following": 8,
    "created_at": "2023-06-09T09:28:57Z",
    "updated_at": "2026-11-18T14:43:56Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(JsonData);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})