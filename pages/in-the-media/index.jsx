import { Layout } from "components";
import Link from "next/link";
import styles from "./styles.module.scss";
import { getDatabase } from "utils/notion";

export const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;

const InTheMediaPage = ({ posts }) => {
  console.log({ posts });
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>In the media</h1>
        <div className={styles.posts}>
          {posts.map((post) => {
            const title = post.properties.blog.title[0].plain_text;
            const description =
              post.properties.description.rich_text[0].plain_text;
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <div key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/in-the-media/${post.id}`}>
                    <>{title}</>
                  </Link>
                </h3>
                <p className={styles.postDate}>{date}</p>
                <p className={styles.postDescription}>{description}</p>
                <Link href={`/in-the-media/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default InTheMediaPage;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 60,
  };
};
