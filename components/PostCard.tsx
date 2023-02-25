import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { Post } from 'contentlayer/generated';

export default function PostCard(props: Post) {
  const { date, url, title } = props;
  // console.log('date', date);
  // console.log('format(new Date(date)', format(new Date(date), 'yyyy-MM-dd'));
  const router = useRouter();
  const handlePostTitleClick = useCallback(() => {
    router.push(`/posts/${url}`);
  }, [router, url]);

  const newDate = date ? format(new Date(date), 'yyyy-MM-dd') : '';

  return (
    <div className='mb-10'>
      <time className='block text-sm text-slate-600'>{newDate}</time>
      <h2 className='mt-1 cursor-pointer hover:underline hover:underline-offset-8' onClick={handlePostTitleClick}>
        {title}
      </h2>
    </div>
  );
}
