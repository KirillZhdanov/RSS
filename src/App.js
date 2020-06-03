import React, { Suspense } from 'react';
import './App.css';
import Loader from'./components/Loader';
const Main = React.lazy(() => import('./components/Main'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense  fallback={<Loader/>}>
        <Main/>
       </Suspense>
      </header>
    </div>
  );
}
export default App;
