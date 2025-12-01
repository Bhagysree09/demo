import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoImage from "../assets/client.jpg";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const mapping: Array<{ match: (s: string) => boolean; to: string }> = [
      { match: s => s.includes("home") || s === "/", to: "/" },
      { match: s => s.includes("pricing") || s.includes("plan"), to: "/pricing" },
      { match: s => s.includes("gst registration"), to: "/gst-registration" },
      { match: s => s.includes("gst filing") || s.includes("gst file"), to: "/gst-filing" },
      { match: s => s.includes("gst"), to: "/gst-services" },
      { match: s => s.includes("company compliances") || s.includes("compliance"), to: "/company-compliances" },
      { match: s => s.includes("company") || s.includes("registration"), to: "/company" },
      { match: s => s.includes("trademark"), to: "/trademark-services" },
      { match: s => s.includes("food"), to: "/food-license" },
      { match: s => s.includes("tax filing") || s.includes("itr"), to: "/tax-filing" },
      { match: s => s.includes("salaried") || s.includes("salary"), to: "/tax-filing/salaried" },
      { match: s => s.includes("capital"), to: "/tax-filing/capital-gains" },
      { match: s => s.includes("nri") || s.includes("foreign"), to: "/tax-filing/nri" },
      { match: s => s.includes("us tax"), to: "/us-tax-returns" },
      { match: s => s.includes("financial"), to: "/financial-planning" },
      { match: s => s.includes("legal"), to: "/legal-consultation" },
      { match: s => s.includes("contact"), to: "/contact" },
      { match: s => s.includes("about"), to: "/about" },
      { match: _ => true, to: "/services" },
    ];
    const target = mapping.find(m => m.match(q))?.to || "/services";
    navigate(target);
    setMobileMenuOpen(false);
  }

  return (
<nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm py-5">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">

        
        <div className="flex items-center justify-between ">

          {/* LEFT - Logo + Dropdowns */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img src={logoImage} alt="TaxBreeze" className="h-26" />
            </Link>

            {/* Dropdown Menus */}
            <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
              
              {/* Individual */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#6A23F5]"
                  onClick={() => setOpenDropdown(openDropdown === "individual" ? null : "individual")}
                >
                  Individual <ChevronDown size={16} />
                </button>

                {openDropdown === "individual" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border py-2 z-50">
                    <Link to="/tax-filing" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Income Tax Filing</Link>
                    <Link to="/us-tax-returns" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">US Tax Returns</Link>
                    <Link to="/financial-planning" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Financial Planning Assistance</Link>
                    <Link to="/legal-consultation" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Legal Consultation</Link>
                  </div>
                )}
              </div>

              {/* Business */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#6A23F5]"
                  onClick={() => setOpenDropdown(openDropdown === "business" ? null : "business")}
                >
                  Business <ChevronDown size={16} />
                </button>

                {openDropdown === "business" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border py-2 z-50">
                    <Link to="/gst-registration" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">GST Registration</Link>
                    <Link to="/gst-filing" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">GST Filing</Link>
                    <Link to="/company" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Company Registration</Link>
                    <Link to="/company-compliances" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Company Compliances</Link>
                    <Link to="/trademark-services" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Trademark Registration</Link>
                    <Link to="/food-license" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Food Licence (FSSAI)</Link>
                    <Link to="/other-business-services" className="block px-4 py-2 text-sm hover:bg-[#E9D9FF]">Other Business Services</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CENTER - Search Bar */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-lg">
              <input
                aria-label="Search services"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search services for GST, ITR, company registration..."
                className="w-full h-10 pl-10 pr-4 border rounded-full border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-[#6A23F5] focus:border-[#6A23F5] outline-none text-sm placeholder-gray-500"
              />
              <button aria-label="Search" type="submit">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>

          {/* RIGHT - Links + Login + WhatsApp */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className="text-[#1A1A1A] hover:text-[#6A23F5]">
                {l.label}
              </Link>
            ))}

            <Link to="/login">
              <button className="px-4 py-2 bg-[#E1E9FF] rounded-xl hover:bg-[#6A23F5] hover:text-white transition-all">
                Login / Register
              </button>
            </Link>

            <a
              href="https://wa.me/9740564642"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 bg-[#0CAB63] text-white rounded-xl text-sm font-medium hover:bg-[#0a9052]"
            >
              WhatsApp Now
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE MENU PANEL */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-6 space-y-4">
            <div className="border rounded-xl p-3" ref={dropdownRef}>
              <button
                className="w-full flex items-center justify-between text-left font-medium"
                onClick={() => setOpenDropdown(openDropdown === "individual" ? null : "individual")}
              >
                <span>Individual</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "individual" && (
                <div className="mt-2 space-y-2">
                  <Link to="/tax-filing" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Income Tax Filing</Link>
                  <Link to="/us-tax-returns" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">US Tax Returns</Link>
                  <Link to="/financial-planning" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Financial Planning Assistance</Link>
                  <Link to="/legal-consultation" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Legal Consultation</Link>
                </div>
              )}
            </div>

            <div className="border rounded-xl p-3">
              <button
                className="w-full flex items-center justify-between text-left font-medium"
                onClick={() => setOpenDropdown(openDropdown === "business" ? null : "business")}
              >
                <span>Business</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "business" && (
                <div className="mt-2 space-y-2">
                  <Link to="/gst-registration" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">GST Registration</Link>
                  <Link to="/gst-filing" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">GST Filing</Link>
                  <Link to="/company" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Company Registration</Link>
                  <Link to="/company-compliances" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Company Compliances</Link>
                  <Link to="/trademark-services" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Trademark Registration</Link>
                  <Link to="/food-license" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Food Licence (FSSAI)</Link>
                  <Link to="/other-business-services" className="block px-2 py-2 rounded hover:bg-[#E9D9FF]">Other Business Services</Link>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link key={l.path} to={l.path} className="px-3 py-2 rounded-lg border hover:bg-[#E9D9FF]">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-3">
              <Link to="/login" className="flex-1">
                <button className="w-full px-5 py-2 bg-[#E1E9FF] rounded-xl hover:bg-[#6A23F5] hover:text-white transition-all">
                  Login / Register
                </button>
              </Link>
              <a
                href="https://wa.me/9740564642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-2.5 bg-[#0CAB63] text-white rounded-xl text-sm font-medium text-center hover:bg-[#0a9052]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
