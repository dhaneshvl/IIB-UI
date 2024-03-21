import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from './components/AppLayout';
import ClaimComponent from './components/ClaimComponent';
import MemberComponent from './components/MemberComponent';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
              <AppLayout>
                <MemberComponent />
              </AppLayout>
            } />
          <Route path="/claim" element={
              <AppLayout>
                <ClaimComponent />
              </AppLayout>
            } />
          <Route path="/member" element={
              <AppLayout>
                <MemberComponent />
              </AppLayout>
            } />
          </Routes>
    </Router>
  );
};

export default App;