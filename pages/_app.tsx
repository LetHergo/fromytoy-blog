import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='prose mx-auto max-w-screen-sm px-4 text-sm dark:prose-invert sm:px-6 mt-10'>
      <Component {...pageProps} />
    </div>
  );
}
