import { useSelector } from 'react-redux';


import { useGetDirectoryQuery } from './redux/asyncThunks/getDirectory';
import { Breadcrumbs } from './components/Breadcrumbs';
import { ItemsContainer } from './components/ItemsContainer';
import { AppLoaderStatus } from './components/AppLoaderStatus';

const App = () => {
  const currentPath = useSelector((store) => store.appSlice.currentPath);
  const { data, error, isLoading, isFetching } =
    useGetDirectoryQuery(currentPath);

  return (
    <div className="app-container">
        {data ? (
          <div className="app">
            <Breadcrumbs isFetching={isFetching} />
            <ItemsContainer data={data}/>
          </div>
        ) : (
          <AppLoaderStatus status={{isLoading, error}}/>
        )}
      </div>
  );
};

export default App;
