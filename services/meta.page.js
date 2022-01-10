
import { META_TYPES } from "./constants";
import { retrieveMetasList } from "./meta.services";

export async function retrieveStaticPaths() {
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

export async function retrieveStaticProps(metaType) {
  const items = await retrieveMetasList(metaType);
  return {
    props: {
      metaType: metaType,
      items: items,
    },
  };
}
