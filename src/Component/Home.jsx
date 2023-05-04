import '../Component/Home.css'
import { Button, message } from 'antd';
import { Input } from 'antd';

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Naber :D');
  };
  return (
    <div className="button">
      {contextHolder}
      <button class="button-63" role="button" onClick={info}>Merhaba</button>
    </div>
    


  );
};
export default Home;