import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { CompanyPage } from './components/pages/CompanyPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ContactPage } from './components/pages/ContactPage';
import { LoginPage } from './components/pages/LoginPage';
import { SignupPage } from './components/pages/SignupPage';
import { GSTServicesPage } from './components/pages/GSTServicesPage';
import { GSTRegistrationPage } from './components/pages/services/GSTRegistrationPage';
import { GSTFilingPage } from './components/pages/services/GSTFilingPage';
import { GSTCompliancePage } from './components/pages/services/GSTCompliancePage';
import { TrademarkServicesPage } from './components/pages/TrademarkServicesPage';
import { TrademarkRegistrationPage } from './components/pages/services/TrademarkRegistrationPage';
import { TrademarkObjectionPage } from './components/pages/services/TrademarkObjectionPage';
import { FoodLicensePage } from './components/pages/services/FoodLicensePage';
import { TaxFilingPage } from './components/pages/TaxFilingPage';
import { SalariedPage } from './components/pages/taxfiling/SalariedPage';
import { CapitalGainsPage } from './components/pages/taxfiling/CapitalGainsPage';
import { NRIPage } from './components/pages/taxfiling/NRIPage';
import { ESOPPage } from './components/pages/taxfiling/ESOPPage';
import { VirtualOfficeGSTPage } from './components/pages/services/VirtualOfficeGSTPage';
import { VirtualOfficeBusinessPage } from './components/pages/services/VirtualOfficeBusinessPage';
import { USTaxReturnsPage } from './components/pages/services/USTaxReturnsPage';
import { FinancialPlanningPage } from './components/pages/services/FinancialPlanningPage';
import { LegalConsultationPage } from './components/pages/services/LegalConsultationPage';
import { CompanyCompliancesPage } from './components/pages/services/CompanyCompliancesPage';
import { OtherBusinessServicesPage } from './components/pages/services/OtherBusinessServicesPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './components/pages/TermsConditionsPage';
import PricingPage from './pricing/components/PricingPage';
import PlanDetailPage from './pricing/components/PlanDetailPage';
import ITRPromoDialog from './components/ITRPromoDialog';
function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ITRPromoDialog />
      {!hideNavAndFooter && <Navigation />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
       
                  <Route path="/plan/:planId" element={<PlanDetailPage />} />
          {/* Individual Services */}
          <Route path="/tax-filing" element={<TaxFilingPage />} />
          <Route path="/tax-filing/salaried" element={<SalariedPage />} />
          <Route path="/tax-filing/capital-gains" element={<CapitalGainsPage />} />
          <Route path="/tax-filing/nri" element={<NRIPage />} />
          <Route path="/tax-filing/esop-rsu" element={<ESOPPage />} />
          <Route path="/us-tax-returns" element={<USTaxReturnsPage />} />
          <Route path="/financial-planning" element={<FinancialPlanningPage />} />
          <Route path="/legal-consultation" element={<LegalConsultationPage />} />
          
          {/* Business Services - GST */}
          <Route path="/gst-services" element={<GSTServicesPage />} />
          <Route path="/gst-registration" element={<GSTRegistrationPage />} />
          <Route path="/gst-filing" element={<GSTFilingPage />} />
          <Route path="/gst-services/registration" element={<GSTRegistrationPage />} />
          <Route path="/gst-services/filing" element={<GSTFilingPage />} />
          <Route path="/gst-services/compliance" element={<GSTCompliancePage />} />
          
          {/* Business Services - Company */}
          <Route path="/company-compliances" element={<CompanyCompliancesPage />} />
          
          {/* Business Services - Trademark */}
          <Route path="/trademark-services" element={<TrademarkServicesPage />} />
          <Route path="/trademark-services/registration" element={<TrademarkRegistrationPage />} />
          <Route path="/trademark-services/objection" element={<TrademarkObjectionPage />} />
          
          {/* Business Services - Food License */}
          <Route path="/food-license" element={<FoodLicensePage />} />
          
          {/* Other Business Services - Single Page */}
          <Route path="/other-business-services" element={<OtherBusinessServicesPage />} />
          
          {/* Virtual Office Services */}
          <Route path="/virtual-office-gst" element={<VirtualOfficeGSTPage />} />
          <Route path="/virtual-office-business" element={<VirtualOfficeBusinessPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}



