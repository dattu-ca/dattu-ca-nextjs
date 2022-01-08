import Container from "../components/container";
import Layout from "../components/layout";
import PostBlurb from "../components/posts/posts.blurb";
import { getTotalPosts, getAllPostsForHome } from "../services/posts.services";

export async function getStaticProps() {
  const posts = await getAllPostsForHome();
  const totalPosts = await getTotalPosts();
  return {
    props: {
      totalPosts: totalPosts,
      posts: posts,
    },
  };
}

const Index = ({ totalPosts, posts }) => {
  return (
    <Layout>
      <Container>
      <h4>Total: {totalPosts}</h4>
        {posts.map((post) => (
          <PostBlurb post={post} key={post.fields.slug} />
        ))}
      </Container>
    </Layout>
  );
};
export default Index;
