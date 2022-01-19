// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const article = {
    title: 'Mien title 1',
    text: 'mytext',
    author: 'nibba',
    date: '212133',
}

export default function handler(req, res) {
    res.status(200).json(JSON.stringify(article))
}
