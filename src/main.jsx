// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store, persister } from './Redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

// let persistor = persistStore(store) 
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <PersistGate  persistor={persister}>
//                 <App />
//             </PersistGate>
//         </Provider>
//     </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persister } from './Redux/store'; // Import the `persister` instead of using `persistStore`
import { PersistGate } from 'redux-persist/integration/react';

// No need to create a new persistor, use the existing `persister`
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persister}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

