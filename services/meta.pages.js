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

export async function retrieveStaticProps(props) {
  console.log(props);
  const { params } = props;
  const { meta } = params;
  const items = await retrieveMetasList(meta);
  return {
    props: {
      metaType: meta,
      items: items,
    },
  };
}
