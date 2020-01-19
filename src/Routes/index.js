import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('Pages/Home'));
const WithData = lazy(() => import('Pages/WithData'));

const Routes = (props) => {
    return(
        <Suspense
        fallback={
            <div className="loaderContainer">
              <div className="loaderWrapper">
                <div className="loader">Loading...</div>
              </div>
            </div>
          }
        >
          <Switch>
            <Route path='/animal' component={WithData} />

            <Route path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/*' component={Home} />
          </Switch>
        </Suspense>
    );
}

export default Routes;