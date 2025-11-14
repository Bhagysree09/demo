import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage from './components/PricingPage';
import PlanDetailPage from './components/PlanDetailPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PricingPage />} />
        <Route path="/plan/:planId" element={<PlanDetailPage />} />
      </Routes>
    </Router>
  );
}