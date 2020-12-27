import Layout from '../../components/layout';
import { Button } from '../../components/Button/Container';

const Sandbox = (): JSX.Element => {
  return (
    <Layout>
      <Button caption="normal" color="normal" />
      <Button caption="warn" color="warn" />
      <Button caption="danger" color="danger" />
    </Layout>
  );
};

export default Sandbox;
