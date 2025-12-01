import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Close dropdown on outside click
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
    if (!query.trim()) return;
    navigate("/services");
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 font-[Inter]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar wrapper */}
        <div className="flex items-center justify-between h-20">

          {/* LEFT – Brand Name */}
          <div className="flex items-center gap-7">
            <Link to="/" className="leading-tight">
              <span className="text-3xl text-[#6A23F5] tracking-tight">
                TaxBreeze
              </span>
              <div className="text-[11px] text-gray-600 -mt-1 tracking-widest">
                WAY TO SIMPLIFY FINANCES
              </div>
            </Link>

            {/* DROPDOWNS (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 text-[15px]" ref={dropdownRef}>
              
              {/* Individual */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#6A23F5]"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "individual" ? null : "individual")
                  }
                >
                  Individual <ChevronDown size={15} />
                </button>

                {openDropdown === "individual" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border py-2">
                    <Link to="/tax-filing" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      Income Tax Filing
                    </Link>
                    <Link to="/us-tax-returns" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      US Tax Returns
                    </Link>
                    <Link to="/financial-planning" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      Financial Planning
                    </Link>
                    <Link to="/legal-consultation" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      Legal Consultation
                    </Link>
                  </div>
                )}
              </div>

              {/* Business */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#6A23F5]"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "business" ? null : "business")
                  }
                >
                  Business <ChevronDown size={15} />
                </button>

                {openDropdown === "business" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border py-2">
                    <Link to="/gst-registration" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      GST Registration
                    </Link>
                    <Link to="/gst-filing" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      GST Filing
                    </Link>
                    <Link to="/company" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      Company Registration
                    </Link>
                    <Link to="/trademark-services" className="block px-4 py-2 text-sm hover:bg-[#F4E9FF]">
                      Trademark Registration
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CENTER – Search Bar */}
          <div className="hidden lg:flex flex-1 justify-center px-5">
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-lg">
              {/* SEARCH INPUT */}
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search services for GST, ITR, company registration..."
                className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 bg-white shadow-sm text-[15px]
                focus:ring-2 focus:ring-[#6A23F5] focus:border-[#6A23F5]"
              />

              {/* SEARCH ICON — properly aligned */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#777]">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </form>
          </div>

          {/* RIGHT – Links + Login + WhatsApp */}
          <div className="hidden lg:flex items-center gap-6 text-[15px]">

            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className="hover:text-[#6A23F5]">
                {l.label}
              </Link>
            ))}

            {/* Login Button */}
            <Link to="/login">
              <button className="px-5 py-2 bg-[#EFEAFF] rounded-xl hover:bg-[#6A23F5] hover:text-white transition-all">
                Login / Register
              </button>
            </Link>

            {/* WHATSAPP BUTTON — redesigned */}
            <a
              href="https://wa.me/9740564642"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#25D366] text-white rounded-full text-sm font-medium shadow-sm 
              hover:bg-[#1ebe5d] transition-all"
            >
              WhatsApp Now
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
