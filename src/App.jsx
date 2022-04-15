import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useGetDirectoryQuery } from './redux/asyncThunks/getDirectory';
import { File } from './components/File';
import { Folder } from './components/Folder';
import { Breadcrumbs } from './components/Breadcrumbs';

const App = () => {
  const currentPath = useSelector((store) => store.appSlice.currentPath);
  const { data, error, isLoading } = useGetDirectoryQuery(currentPath);

  console.log(data, error, isLoading);
  console.log(currentPath);

  if (data) {
    return (
      <div className="app-container">
        <div className="app">
          <Breadcrumbs />
          <div className="container">
            {data.directories.map((item) => (
              <Folder key={uuidv4()} folder={item} />
            ))}
            {data.files.map((item) => (
              <File key={uuidv4()} file={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div className="app-container">loading...</div>;
};

export default App;
