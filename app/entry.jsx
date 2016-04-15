/* 
* @Author: johan
* @Date:   2016-04-15 13:02:10
* @Last Modified By:   johan
* @Last Modified time: 2016-04-15 17:41:57
*/

'use strict';

import React from 'react';
import hello from './module/component.jsx';

const $header = document.createElement("div");

$header.setAttribute('id',"header");
$header.innerHTML = "66"

React.render(
    <hello />,
    document.getElementById("header")
);