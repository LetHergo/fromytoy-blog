import Head from 'next/head';
import { compareDesc } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import PostCard from 'components/PostCard';

export async function getStaticProps() {
  let posts: Post[] = allPosts;
  console.log('posts', posts);
  // console.log('new Date(a.date),', new Date(posts[0].date));

  if (allPosts?.length > 1) {
    // posts = allPosts.sort((a, b) => {
    // return compareDesc(new Date(a.date), new Date(b.date));
    // });
  }

  return { props: { posts } };
}

interface Props {
  posts: Post[];
}

export default function Home(props: Props) {
  const { posts } = props;

  return (
    <div>
      <Head>
        <title>fromyto blog</title>
      </Head>
      {posts.map((post: Post, idx: number) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
