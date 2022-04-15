import { useDispatch, useSelector } from 'react-redux';
import {
  changeCurrentPath,
  shortenHistoryPathByAmount,
} from '../redux/slices/appSlice';
import { v4 as uuidv4 } from 'uuid';

export const Breadcrumbs = ({ isFetching }) => {
  const { pathHistory } = useSelector((store) => store.appSlice);
  const dispatch = useDispatch();

  const onBreadcrumbClick = (path, index) => {
    dispatch(changeCurrentPath(path ? path : ''));
    dispatch(shortenHistoryPathByAmount(index));
  };

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-item">
        <>
          <span onClick={() => onBreadcrumbClick()}>root</span>
        </>
        {pathHistory?.map((historyPoint, index) => (
          <span key={uuidv4()}>
            {'/'}
            <span onClick={() => onBreadcrumbClick(historyPoint.id, index + 1)}>
              {historyPoint.name}
            </span>
          </span>
        ))}
      </div>
      {isFetching && <div className="breadcrumbs-item">loading....</div>}
    </div>
  );
};
