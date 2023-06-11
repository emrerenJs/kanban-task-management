import clsx from 'clsx';
import style from './style.module.scss';

const Test = () => {
  return (
    <div className={clsx('kanban-theme', 'light')}>
      <div className={style.test}></div>
    </div>
  );
};

export default Test;
