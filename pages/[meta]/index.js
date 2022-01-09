import _ from "lodash";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { META_TYPES } from "../../services/constants";
import { retrieveMetasList } from "../../services/meta.services";

import MetasList from "../../components/metas/metas.list";

export async function getStaticPaths() {
  const metas = Object.values(META_TYPES);
  const paths = metas.map((m) => ({
    params: {
      meta: m,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const items = await retrieveMetasList(params.meta);
  return {
    props: {
      metaType: params.meta,
      items: items,
    },
  };
}

export default function Index({ metaType, items }) {
  return (
    <Container maxWidth="sm">
      <h1>{_.startCase(_.toLower(metaType))}</h1>
      <Box sx={{ my: 4 }}>
        <MetasList items={items} />
      </Box>
    </Container>
  );
}
