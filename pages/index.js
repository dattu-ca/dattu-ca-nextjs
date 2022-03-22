import * as React from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts: contentPostCollection {
          total
          items {
            sys {
              id
            }
            slug
            title
            publishedOn
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default function Index({ posts }) {
  return (
    <div>
      <h1>HELLO</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
