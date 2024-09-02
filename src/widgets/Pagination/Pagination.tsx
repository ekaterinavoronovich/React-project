import { memo } from 'react';
import styles from './Pagination.module.scss';
type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
};

const Pagination = (props: PaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;
  // const handleNextPageClick = useCallback(() => {
  //   const current = page;
  //   const next = current + 1;
  //   const total = data ? getTotalPageCount(data.count) : current;

  //   setPage(next <= total ? next : current);
  // }, [page, data]);

  // const handlePrevPageClick = useCallback(() => {
  //   const current = page;
  //   const prev = current - 1;

  //   setPage(prev > 0 ? prev : current);
  // }, [page]);

  const nextPageClickHandler = () => {
    onNextPageClick();
  };
  const prevPageClickHandler = () => {
    onPrevPageClick();
  };

  return (
    <div className={styles.paginator}>
      <button
        className={styles.arrow}
        type="button"
        onClick={prevPageClickHandler}
        disabled={disable.left}
      >
        {'<'}
      </button>
      {nav && (
        <span className={styles.navigation}>
          {nav.current} / {nav.total}
        </span>
      )}
      <button
        className={styles.arrow}
        type="button"
        onClick={nextPageClickHandler}
        disabled={disable.right}
      >
        {'>'}
      </button>
    </div>
  );
};

export default memo(Pagination);
