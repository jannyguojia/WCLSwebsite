import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import EnrolForm from './components/enrolform'
import SuccessPage from './components/SuccessPage';




// const App = () => {
//   return (
//     <Router>
//       <div className="App">

//         <Header />
//         <EnrolForm />
//         {/* <SuccessPage /> */}
//         <Routes>
//           <Route path="/" element={EnrolForm} />
//           <Route path="/success" element={SuccessPage} />

//         </Routes>

//       </div>
//     </Router>
//   );
// };

function App() {
  return (
    <div className="App">

      <Header />
      <EnrolForm />
    </div>
  );
}

export default App;
