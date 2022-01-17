import { retrievePostsList } from "./posts.services";
import { retrievePost } from "./post.services";

export async function retrieveStaticPaths() {
  const postsList = await retrievePostsList();

  const paths = postsList.map((post) => ({
    params: {
      slug: post.fields.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function retrieveStaticProps(props) {
  const { params } = props;
  const { slug } = params;
  const post = await retrievePost(slug);

  return {
    props: {
      post: post,
    },
  };
}
