import React, { Component } from 'react';
import createReactClass from 'create-react-class';

var __html = require('../../public/pages/landing.js');
var Page = { __html: __html };

// module.exports = createReactClass({
//     console.log('here')
//     render: function() {
//         return(
//             <div dangerouslySetInnerHTML={Page} />
//         );
//     }
// });

class ScreenShare extends Component {
    render() {
        return (
            <div className="screen-share">
                <span dangerouslySetInnerHTML={Page} />
            </div>
        )
    }
}

export default ScreenShare