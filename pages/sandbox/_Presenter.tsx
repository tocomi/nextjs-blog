import Layout from '../../components/layout';
import styles from './styles.module.scss';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

export const Presenter: React.FC<Props> = (props: Props): JSX.Element => {
  const { posts } = props;
  return (
    <Layout>
      <div className={styles.postWrapper}>
        {posts.map((post) => (
          <section key={post.id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </section>
        ))}
      </div>
    </Layout>
  );
};
