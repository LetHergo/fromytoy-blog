import Head from 'next/head';
import { compareDesc } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import PostCard from 'components/PostCard';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
}

interface Props {
  posts: Post[];
}

export default function Home(props: Props) {
  const { posts } = props;
  console.log('posts', posts);

  return (
    <div className='prose lg:prose-xl mx-auto max-w-screen-sm px-4  sm:px-6 pt-16'>
      <Head>
        <title>fromyto blog</title>
      </Head>
      {posts.map((post: Post, idx: number) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
