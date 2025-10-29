const Footer: React.FC = () => (
  <footer className="text-white py-12 rounded-t-4xl">
    <div className="max-w-7xl mx-auto px-4 rounded-t-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">DUQOR</h3>
          <p className="text-gray-400 text-sm">
            Excellence in interior design and construction since 2008.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Interior Design</a></li>
            <li><a href="#" className="hover:text-white">Construction</a></li>
            <li><a href="#" className="hover:text-white">Renovation</a></li>
            <li><a href="#" className="hover:text-white">Project Management</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c2a158] transition-colors">
              f
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c2a158] transition-colors">
              in
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c2a158] transition-colors">
              ig
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        <p>© 2024 Duqor Interior Design & Construction. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
