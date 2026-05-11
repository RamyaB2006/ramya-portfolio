import certifications from "../data/certifications"

function Certifications() {

  return (

    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-lg font-semibold text-gray-700 leading-7">
                {cert}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Certifications