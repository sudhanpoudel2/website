import React from 'react';
import './cssStyle';
import './greeting';

function Heading(){
    return<h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>;
}
 export default Heading;