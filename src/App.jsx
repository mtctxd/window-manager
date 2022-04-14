import {  useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useGetDirectoryQuery } from './redux/asyncThunks/getDirectory';
import { File } from './components/File';
import { Folder } from './components/Folder';
import { Breadcrumbs } from './components/Breadcrumbs';

const App = () => {
  const store = useSelector((store) => store.appSlice);
  const {data, error, isLoading} = useGetDirectoryQuery();
  const { pathHistory } = store;

  console.log(data, error, isLoading);

  if (data) {
    return (
      <div>
        <Breadcrumbs pathHistory={pathHistory}/>
        <div className="container">
          {data.directories.map((item) => (
            <Folder key={uuidv4()} folder={item} />
          ))}
          {data.files.map((item) => (
            <File key={uuidv4()} file={item} />
          ))}
        </div>
      </div>
    );
  }

  return <div>loading...</div>;
};

export default App;
