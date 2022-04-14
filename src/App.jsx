import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { getDirectory } from './redux/asyncThunks/getDirectory';
import { File } from './components/File';
import { Folder } from './components/Folder';
import { addPathToHistory } from './redux/slices/appSlice';
import { Breadcrumbs } from './components/Breadcrumbs';

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { mainFolder, pathHistory } = store;

  useEffect(() => {
    dispatch(getDirectory());
  }, [dispatch]);

  useEffect(() => {
    if (mainFolder) {
      const {name, id} = mainFolder;
      dispatch(addPathToHistory({name, id}));
    }
  }, [dispatch, mainFolder]);

  if (mainFolder && pathHistory.length > 0) {
    return (
      <div>
        <Breadcrumbs pathHistory={pathHistory}/>
        <div className="container">
          {mainFolder.directories.map((item) => (
            <Folder key={uuidv4()} folder={item} />
          ))}
          {mainFolder.files.map((item) => (
            <File key={uuidv4()} file={item} />
          ))}
        </div>
      </div>
    );
  }

  return <div>loading...</div>;
};

export default App;
