/*整个项目的入口文件*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';



/*做性能优化*/
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
