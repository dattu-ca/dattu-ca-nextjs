import Container from "@mui/material/Container";

import {
  retrieveStaticPaths,
  retrieveStaticProps,
} from "../../services/meta.pages";

import MetasListContainer from "../../components/metas/metas.list.container";

export async function getStaticPaths() {
  return await retrieveStaticPaths();
}

export async function getStaticProps(props) {
  return await retrieveStaticProps(props);
}

export default function Index({ metaType, items }) {
  return (
    <Container maxWidth="sm">
      <MetasListContainer metaType={metaType} items={items} />
    </Container>
  );
}
