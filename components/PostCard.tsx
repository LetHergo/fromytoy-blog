import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { Post } from 'contentlayer/generated';

export default function PostCard(props: Post) {
  const { date, url, title, body } = props;

  const router = useRouter();
  const handlePostTitleClick = useCallback(() => {
    router.push(`/posts/${url}`);
  }, [router, url]);

  return (
    <div className='mb-10'>
      <time className='block text-sm text-slate-600'>{format(new Date(date), 'yyyy-MM-dd')}</time>
      <h2
        className='mt-1 text-base cursor-pointer hover:underline hover:underline-offset-8'
        onClick={handlePostTitleClick}
      >
        {title}
      </h2>
    </div>
  );
}
