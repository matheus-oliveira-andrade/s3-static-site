import Link from "next/link";
import BlogLayout from "../../components/blog-layout/blog-layout";
import BlogMetaTags from '../../components/blog-meta-tags/blog-meta-tags'

function PostLi({ postedAt, title, shortDescription }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: "1.5rem 0",
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          color: "#1e2f4d",
          marginBottom: "-7px",
          width: "100%",
        }}
      >
        {postedAt}
      </span>

      <Link href="/2022/12/lorem-ipson">
        <span
          style={{
            color: "#25395c",
            fontSize: "1.4rem",
            fontWeight: "680",
          }}
        >
          {title}
        </span>
      </Link>

      <span style={{ color: "#2e4772", fontSize: "1.1rem", fontWeight: "450" }}>
        {shortDescription}
      </span>
    </div>
  );
}

function PostList() {
  const posts = [
    {
      postedAt: "Dezembro 24, 2022",
      title:
        'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      shortDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
    },
    {
      postedAt: "Novembro 15, 2022",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra enim sapien",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat vulputate elit, et pharetra sem aliquet eu. Etiam a lobortis lorem. Sed condimentum enim urna, nec feugiat metus lobortis a. Aliquam molestie eu lorem sed vestibulum...",
    },
    {
      postedAt: "Outubro 7, 2022",
      title:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
      shortDescription:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...",
    },
    {
      postedAt: "Outubro 1, 2022",
      title:
        "Mauris eu tempus massa. Vestibulum placerat congue leo vitae sollicitudin. Duis porttitor mauris in elit elementum commodo",
      shortDescription:
        "neque congue, posuere felis vel, vestibulum magna. Pellentesque fringilla quis urna lobortis pulvinar. Mauris augue orci, volutpat vulputate congue at, ullamcorper a quam nisi nulla a orci. Mauris vestibulum...",
    },
  ];

  return (
    <>
      {posts.map((post, idx) => (
        <PostLi
          postedAt={post.postedAt}
          title={post.title}
          shortDescription={post.shortDescription}
          key={idx}
        />
      ))}
    </>
  );
}

export default function Blog() {
  return (
    <BlogLayout>
      <BlogMetaTags title="Blog"/>

      <div className="breadcrumb">
        <Link href="/">
          <span> Home </span>
        </Link>

        <span> / </span>

        <span className="breadcrumb-active"> Blog - Dev env </span>
      </div>

      <h1
        style={{
          color: "#2e4772",
          fontSize: "1.6rem",
          fontWeight: "700",
          margin: ".2rem 0"
        }}
      >
        Blog
      </h1>

      <style jsx>{`
        .breadcrumb {
          display: "flex";
          flex-direction: "row";
          align-items: "start";
          maxwidth: "40%";
        }

        .breadcrumb > span {
          font-size: .8rem;
          font-weight: 500;
          color: #2e4772;
          margin-right: 5px;
        }

        .breadcrumb > .breadcrumb-active {
          color: #48485c;
          font-weight: 400;
        }
      `}</style>

      <PostList />
    </BlogLayout>
  );
}
