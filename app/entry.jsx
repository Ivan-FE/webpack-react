/* 
* @Author: johan
* @Date:   2016-04-15 13:02:10
* @Last Modified By:   johan
* @Last Modified time: 2016-04-15 17:41:57
*/

'use strict';

import React from 'react';
import Hello from './module/component.jsx';
import ReactDOM from 'react-dom';

const $header = document.createElement("div");

$header.setAttribute('id',"header");


document.body.appendChild($header);

ReactDOM.render(
    <Hello name="johan" />,
    document.getElementById("header")
);
