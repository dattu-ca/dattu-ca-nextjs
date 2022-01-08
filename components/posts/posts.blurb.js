const PostBlurb = ({post}) =>{

    return <article>
        <h1>{post.fields.title}</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </article>
}

export default PostBlurb;