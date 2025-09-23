import { ClimbingBoxLoader } from 'react-spinners';
import css from './Loading.module.css';

const Loading = () => {
  return (
    <div className={css.container}>
      <ClimbingBoxLoader color="#679df9"/>
    </div>
  );
};

export default Loading;