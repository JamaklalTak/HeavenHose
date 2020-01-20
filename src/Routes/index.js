import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import Image from 'Helpers/Image';

const Home = lazy(() => import('Pages/Home'));
const WithData = lazy(() => import('Pages/WithData'));

const Routes = (props) => {
    return(
        <Suspense
        fallback={
            <div className="loaderContainer">
              <div className="loaderWrapper">
                <div className="loader">
                  <Image src={require('Assets/Images/loader.gif')} alt='loader' />
                </div>
              </div>
            </div>
          }
        >
          <Switch>
            <Route path='/HeavenHose/animal' component={WithData} />

            <Route path='/HeavenHose/' component={Home} />
            <Route path='/HeavenHose/home' component={Home} />
            <Route path='/HeavenHose/*' component={Home} />
          </Switch>
        </Suspense>
    );
}

export default Routes;