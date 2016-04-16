/* 
* @Author: johan
* @Date:   2016-04-15 13:02:10
* @Last Modified By:   johan
* @Last Modified time: 2016-04-15 15:54:00
*/

'use strict';

import React from 'react';

export default class Hello extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}
