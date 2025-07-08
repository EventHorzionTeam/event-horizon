const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[#ff3c00] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-[#ff3c00]">
            Event Horizon Tech
          </h2>
          <p className="text-gray-400 mt-2">
            Turning bold ideas into scalable realities beyond the horizon.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#ff3c00] font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#home" className="hover:text-[#ff3c00]">
                Home
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-[#ff3c00]">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-[#ff3c00]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ff3c00]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div>
          <h3 className="text-[#ff3c00] font-semibold mb-2">Vision</h3>
          <p className="text-gray-400">
            Empower the innovators of tomorrow with powerful frameworks,
            technology, and support to create a scalable future.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#ff3c00] font-semibold mb-2">Stay Updated</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border border-[#ff3c00] text-white px-3 py-2 text-sm rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#ff3c00]"
            />
            <button
              type="submit"
              className="border border-[#ff3c00] text-[#ff3c00] py-2 rounded-md hover:bg-[#ff3c00] hover:text-black transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#ff3c00] text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} Event Horizon Tech — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
