import { Fragment } from "react";
import Head from "next/head";
import {
  getDatabase,
  getPage,
  getBlocks,
  getUrlFromExternalUrl,
} from "utils/notion";
import Link from "next/link";
import { databaseId } from "./index";
import styles from "./styles.module.scss";
import { Layout } from "components";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={i}
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  console.log({ value, block });

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0].plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    case "video":
      const videoUrl = getUrlFromExternalUrl({ url: value.external.url });
      return <iframe src={videoUrl} frameBorder="0" allow allowFullScreen />;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function PostPage({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const title = page.properties.blog.title[0].plain_text;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.blogContainer}>
        <h1 className={styles.name}>{title}</h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/in-the-media">
            <a className={styles.back}>← Back</a>
          </Link>
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  const paths = database.map((page) => ({ params: { id: page.id } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 60,
  };
};
