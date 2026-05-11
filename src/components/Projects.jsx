import projects from "../data/projects"

function Projects() {

  return (

    <section
      id="projects"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {project.title}
              </h3>

              <p className="text-base text-gray-600 leading-7">
                {project.description}
              </p>

              <div className="mt-5 text-pink-500 font-semibold">
                {project.tech}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                {project.features.map((feature, idx) => (

                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
                  >
                    {feature}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Projects