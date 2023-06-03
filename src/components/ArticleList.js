import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
//console.log(posts)

const postList = posts.map((post) => {
    return <Article key={ post.id } title={ post.title } date={ post.date } preview={ post.preview } minutes={ post.minutes } />
})

console.log(postList)

    return(
        <main>
            {postList}
        </main>

    )
}

export default ArticleList