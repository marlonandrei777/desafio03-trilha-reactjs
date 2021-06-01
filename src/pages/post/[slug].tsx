import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return (
    <div>
      <Header />

      <div className={styles.banner}>
        <img src="/teste.jpg" alt="banner" />
      </div>

      <main className={`${styles.mainContainer}  ${commonStyles.container}`}>
        <h1>Criando um app TESTE teste</h1>

        <div className={commonStyles.infoContainer}>
          <div>
            <FiCalendar />
            <small>
              31 mai 2021
              {/* {format(new Date(post.first_publication_date), 'dd MMM yyyy', {
                locale: ptBR,
              })} */}
            </small>
          </div>
          <div>
            <FiUser />
            <small>Marlon</small>
          </div>
          <div>
            <FiClock />
            <small>4 min</small>
          </div>
        </div>

        <article>
          <h2>Teste 2</h2>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            diam sit amet nisl suscipit adipiscing bibendum est ultricies. Est
            lorem ipsum dolor sit amet consectetur. Sit amet nulla facilisi
            morbi tempus iaculis urna id. Eget nullam non nisi est sit. Risus
            sed vulputate odio ut enim blandit volutpat. Velit sed ullamcorper
            morbi tincidunt ornare. Aliquet eget sit amet tellus cras. Imperdiet
            sed euismod nisi porta. Nulla porttitor massa id neque. Praesent
            tristique magna sit amet purus gravida quis blandit turpis. Egestas
            purus viverra accumsan in nisl nisi scelerisque. Pulvinar neque
            laoreet suspendisse interdum consectetur libero id faucibus. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Nunc sed id semper risus in hendrerit gravida rutrum quisque.
            Malesuada fames ac turpis egestas integer eget aliquet. Mi proin sed
            libero enim sed faucibus turpis. Nisl suscipit adipiscing bibendum
            est ultricies integer quis. Placerat in egestas erat imperdiet sed
            euismod. Mauris cursus mattis molestie a iaculis at erat
            pellentesque adipiscing. Eu sem integer vitae justo. Amet porttitor
            eget dolor morbi. Consectetur libero id faucibus nisl tincidunt eget
            nullam. Commodo elit at imperdiet dui accumsan sit amet nulla.
            Tortor posuere ac ut consequat semper viverra nam. Tortor
            condimentum lacinia quis vel. Morbi tempus iaculis urna id volutpat
            lacus. Eu augue ut lectus arcu bibendum at varius vel. Sed sed risus
            pretium quam. Scelerisque felis imperdiet proin fermentum. Venenatis
          </div>
        </article>
      </main>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
