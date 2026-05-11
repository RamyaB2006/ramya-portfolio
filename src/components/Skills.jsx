import skills from "../data/skills"

function Skills() {

  return (

    <section
      id="skills"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 text-center hover:-translate-y-2 transition"
            >

              <p className="text-base font-semibold text-gray-700">
                {skill}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Skills