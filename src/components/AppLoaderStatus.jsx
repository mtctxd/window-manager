export const AppLoaderStatus = ({status: {isLoading, error}}) => (
  <div className="app-loader-placeholder">
    {isLoading && 'loading'}
    {error && 'could not load your'}
  </div>
);
