// Write a function that makes a GET request to the JSONPlaceholder API and 
// returns posts that are longer than 100 characters.

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
import axios from 'axios';

type APIResponseType = {
    id: number,
    userId: number
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {
    const longPosts: APIResponseType[] = [];

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    for (let i = 0; i < response.data.length; i++) {
        const post: APIResponseType = response.data[i]

        if (post.body.length > 100){
            longPosts.push(post)
        }
    }
    return longPosts
    
}

module.exports = { fetchLongPosts }