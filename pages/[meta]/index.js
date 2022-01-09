import _ from "lodash";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { getAllMetas } from "../../services/meta.services";
import MetasList from "../../components/metas/metas.list";

export async function getStaticPaths() {
  const metas = ["categories", "tags", "activities"];
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
  const items = await getAllMetas(params.meta);
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
