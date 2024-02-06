import React, {lazy, Suspense} from "react";
import {BrowserRouter, useRoutes,} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));



const App = () => {
    return useRoutes([

        {path: "/", element: <MainPage/>},
        {path: "/comics", element: <ComicsPage/>},
        {path: "/comics/:id", element: <SinglePage Component={SingleComicLayout} dataType='comic'/>},
        {path: "/characters/:id", element: <SinglePage Component={SingleCharacterLayout} dataType='character'/>},
        {path: "*", element:  <Page404/>},

    ]);
};

const AppWrapper = () => {
    return (
        <Suspense fallback={<Spinner/>}>
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <App />
                </main>
            </div>
        </BrowserRouter>
        </Suspense>
    );
};

export default AppWrapper;