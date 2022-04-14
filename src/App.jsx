import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDirectory } from './redux/asyncThunks/getDirectory';

const App = () => {
  const dispatch = useDispatch();
  const directories = useSelector((store) => store.directories);

  useEffect(() => {
    dispatch(getDirectory());
  }, [dispatch]);

  console.log(directories);

  return (
    <div>
      <h1>{directories.name}</h1>
      <div>
        
      </div>
    </div>
  );
};

export default App;
