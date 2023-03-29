import React, { Suspense } from 'react';
import { RouterProvider, useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  );
}

export default App;
