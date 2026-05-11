import profile from "../assets/profile.jpg"

function Hero() {

  return (

    <section className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <div>

          <p className="text-blue-600 font-semibold text-lg">
            AI | WEB DEVELOPMENT | DATA SCIENCE| CYBER SECURITY
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-5 leading-tight">

            Hi,
            <br />

            I'm
            <span className="text-blue-600"> Ramya B</span>

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-8">

            A Computer Science student specializing in
            Artificial Intelligence, Web Development,
            and Data Analytics, passionate about building
            secure, scalable, user-centric intelligent systems and analyzing the data.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="https://github.com/RamyaB2006"
              target="_blank"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/RamyaB2006"
              target="_blank"
              className="bg-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-pink-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              Resume
            </a>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Ramya"
            className="w-[350px] h-[350px] rounded-full object-cover border-8 border-white shadow-2xl hover:scale-105 transition duration-300"
          />

        </div>

      </div>

    </section>

  )
}

export default Hero