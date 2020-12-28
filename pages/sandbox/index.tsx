import { useEffect, useState } from 'react';
import { Presenter, Post } from './_Presenter';

const Sandbox: React.FC = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const init = async (): Promise<void> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      setPosts(await response.json());
    };
    init();
  }, []);

  return <Presenter posts={posts} />;
};

export default Sandbox;
