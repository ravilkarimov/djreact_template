import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './router';

import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
