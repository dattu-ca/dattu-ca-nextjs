import * as _ from "lodash";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { getAllMetas } from "../../services/meta.services";

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
  const metas = await getAllMetas(params.meta);
  return {
    props: {
      metaType: params.meta,
      metas: metas,
    },
  };
}

export default function Index({ metaType, metas }) {
  return (
    <Container maxWidth="sm">
      <h1>{_.startCase(_.toLower(metaType))}</h1>
      <Box sx={{ my: 4 }}>
        <pre>{JSON.stringify(metas, null, 2)}</pre>
      </Box>
    </Container>
  );
}
