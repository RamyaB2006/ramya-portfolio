import achievements from "../data/achievements"

function Achievements() {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          Achievements
        </h2>

        <div className="space-y-8">

          {achievements.map((achievement, index) => (

            <div
              key={index}
              className="bg-slate-50 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <p className="text-lg text-gray-700 leading-7">
                {achievement}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Achievements