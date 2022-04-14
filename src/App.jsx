import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './redux/slices/appSlice';

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  return (
    <div>
      <h1>Hello</h1>
      <h2>{store.value}</h2>
      <button
        type='button'
        onClick={() => dispatch(incremented())}
      >
        +
      </button>
      <button
        type='button'
        onClick={() => dispatch(decremented())}
      >
        -
      </button>
    </div>
  );
};

export default App;
