import { useDispatch } from 'react-redux';
import { getDirectory } from '../redux/asyncThunks/getDirectory';

export const Breadcrumbs = ({ pathHistory }) => {
  const dispatch = useDispatch();

  const onBreadcrumbClick = (path) => {
    dispatch(getDirectory(`/${path}`));
  };

  return (
    <h1>
      {/* {pathHistory.map(
        (historyPoint) =>
          `/${(
            <span onClick={() => onBreadcrumbClick(historyPoint.id)}>
              {historyPoint.name}
            </span>
          )}`
      )} */}
      {pathHistory.map(
        (historyPoint) => (
            <>
                {'/'}
                <span
                    onClick={() => onBreadcrumbClick(historyPoint.id)}
                >
                    {historyPoint.name}
                </span>
                {' '}
            </>
        ))}
    </h1>
  );
};
