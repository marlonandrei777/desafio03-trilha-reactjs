import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import Head from 'next/head';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Post | spacetraveling</title>
      </Head>

      <div className={`${styles.container} ${commonStyles.container}`}>
        <img src="/logo.svg" alt="logo" />

        <main className={styles.mainContent}>
          {/* <Link href={#}>
          <a key={}> */}
          <strong>Como utilizar Hooks</strong>
          <p>Pensando em sincronização em vez de ciclos</p>
          <div className={styles.infoContainer}>
            <div>
              <FiCalendar />
              <small>28/05/2021</small>
            </div>
            <div>
              <FiUser />
              <small>Marlon Andrei</small>
            </div>
          </div>
          {/*  </a>
        </Link> */}
        </main>

        <a href="#">Carregar mais posts</a>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
