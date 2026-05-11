import experience from "../data/experience"

function Experience() {

  return (

    <section
      id="experience"
      className="bg-slate-900 py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-14">
          Experience
        </h2>

        <div className="space-y-10">

          {experience.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 p-8 rounded-3xl"
            >

              <h3 className="text-2xl font-bold text-blue-400">
                {item.role}
              </h3>

              <p className="text-cyan-300 mt-2">
                {item.company} | {item.duration}
              </p>

              <p className="mt-4 text-gray-300 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Experience