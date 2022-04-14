import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { appStore } from './redux/store/store';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
