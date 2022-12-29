import Link from "next/link";
import BlogLayout from "../../../../components/blog-layout/blog-layout";
import BlogMetaTags from "../../../../components/blog-meta-tags/blog-meta-tags";

import utilStyles from "../../../../styles/utils.module.css";

export default function FirstPost() {
  return (
    <BlogLayout>
      <BlogMetaTags title="Lorem Ipsum" />

      <h1 className="article-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        dignissim lacinia enim
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Link href="/">
          <a style={{ paddingRight: "10px" }}>
            <img
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height="50"
              width="50"
              alt="profile image"
            />
          </a>
        </Link>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: "700",
              color: "#1e2f4d",
            }}
          >
            Dezembro 28, 2022
          </span>
          <span style={{ fontSize: ".7rem", color: "#23375a" }}>
            <Link href="/">
              <span style={{ color: "#37568d" }}>Matheus Andrade</span>
            </Link>{" "}
            | 3 min leitura
          </span>
        </div>
      </div>

      <article>
        <h3 className="article-topic">What is Lorem Ipsum?</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <br />

        <h3 className="article-topic">Why do we use it?</h3>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <br />

        <h3 className="article-topic">Where does it come from?</h3>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </article>

      <style jsx>{`
        .article-title {
          font-size: 1.rem;
          color: #272731;
          // border-bottom: 1px solid #48485c;
          margin-bottom: 0.5rem;
        }

        .article-topic {
          font-size: 1.2rem;
          color: #131e31;
          margin: 0;
        }

        p {
          font-size: 1rem;
          font-weight: 480;
          color: #48485c;
        }
      `}</style>
    </BlogLayout>
  );
}
