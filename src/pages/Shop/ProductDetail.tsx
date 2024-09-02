import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks/hooks';

export const ProductDetail = () => {
  const { list } = useAppSelector(state => state.data);
  return (
    <section>
      ProductDetail
      {/* <p>{list}</p>
            <p>{list.title}</p> */}
    </section>
  );
};
