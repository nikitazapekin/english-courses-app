
import Homepage from './pages/Homepage';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './utils/routes';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={store}>

        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
