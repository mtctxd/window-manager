import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDirectory } from './redux/asyncThunks/getDirectory';
import { File } from './components/File';
import { Folder } from './components/Folder';

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { mainFolder } = store;

  useEffect(() => {
    dispatch(getDirectory());
  }, [dispatch]);

  if (mainFolder) {
    console.log(mainFolder);
    return (
      <div>
        <h1>{store.mainFolder.name}</h1>
        <div className="container">
          {mainFolder.directories.map((item) => (
            <Folder folder={item} />
          ))}
          {mainFolder.files.map((item) => (
            <File file={item}/>
          ))}
        </div>
      </div>
    );
  }

  return <div>loading...</div>;
};

export default App;
