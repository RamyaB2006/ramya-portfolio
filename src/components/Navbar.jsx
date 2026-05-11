function Navbar() {

  return (

    <nav className="fixed w-full bg-white/70 backdrop-blur-lg shadow-sm z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold text-blue-600">
          Ramya B
        </h1>

        <div className="space-x-6 hidden md:flex">

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>

          <a href="#experience" className="hover:text-blue-600">
            Experience
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

        </div>

      </div>

    </nav>

  )
}

export default Navbar