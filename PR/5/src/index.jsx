import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './store/store.js';

const appContainer = document.querySelector('#app');


ReactDom.render(
    <Provider store = { initStore() }>
        <BrowserRouter>
            <div className="h-100">
                <Router />
            </div>
        </BrowserRouter>
    </Provider>,
    appContainer
)
// let names = ['Vova', 'Dasha', 'Masha', 'Kolya'];

// import TestContainer from './components/containers/container/container.jsx';

// ReactDom.render(
//     <div>
//         <TestContainer names = { names }/>
//     </div>,
//     appContainer
// )

// let arr = ['Владимир', 'Путин', 'Молодец'];

// let objDTO = {
//     1: {
//         value: 'Raz'
//     },
//     2: {
//         value: 'Dva'
//     },
//     3: {
//         value: 'Three'
//     }
// }

// let domArrayFromArray = arr.map((el, index) => <li key={'ol1_id_' + index}>{ el }</li>) //arr.map returns [..., ...]
// let domArrayFromObject = Object.keys(objDTO).map((index) => <li key={'ul1_id_' + index}>{ objDTO[index].value } number { index } </li>)
//Object.keys(objDTO) >>> [1, 2, 3].map() >> [<li>{ objDTO[index].value } number { index } </li>]
// let domArray = arr.map(function(gennadyPetrovich) {
//     return <li> { gennadyPetrovich } </li>
// }) //arr.map returns [..., ...]

// let kusokKoda = <div>
//                     <ol> { domArrayFromArray } </ol>
//                     <hr/>
//                     <ul>{ domArrayFromObject }</ul>
//                 </div>

// ReactDom.render(
//     kusokKoda,
//     appContainer
// )
