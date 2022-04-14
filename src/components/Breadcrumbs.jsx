import { useDispatch } from 'react-redux';
import { getDirectory } from '../redux/asyncThunks/getDirectory';
import { shortenHistoryPathByAmount } from '../redux/slices/appSlice';

export const Breadcrumbs = ({ pathHistory }) => {
  const dispatch = useDispatch();

  const onBreadcrumbClick = (path, index) => {
      dispatch(getDirectory(path && `/${path}`));
      dispatch(shortenHistoryPathByAmount(index));
  };

  return (
    <h1>
      <>
        {'/'}
        <span onClick={() => onBreadcrumbClick()}>root</span>{' '}
      </>
      {pathHistory.map((historyPoint, index) => (
        <>
          {'/'}
          <span onClick={() => onBreadcrumbClick(historyPoint.id, index + 1)}>
            {historyPoint.name}
          </span>{' '}
        </>
      ))}
    </h1>
  );
};
