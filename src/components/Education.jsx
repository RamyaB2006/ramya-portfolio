import education from "../data/education"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

function Education() {

  return (

    <section
      id="education"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Education
        </h2>

        <div className="w-full h-[1px] bg-gray-300 mb-10"></div>

        <p className="text-base text-gray-500 mb-16">
          My educational background and academic achievements.
        </p>

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20">

            {education.map((item, index) => (

              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-start relative"
              >

                {/* LEFT SIDE */}

                <div className="md:text-right">

                  <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-blue-600 text-sm font-medium shadow-sm">

                    <FaCalendarAlt className="text-xs" />

                    <span>{item.duration}</span>

                  </div>

                  <div className="flex md:justify-end items-center gap-2 text-gray-500 mt-4 text-sm">

                    <FaMapMarkerAlt className="text-xs" />

                    <span>{item.location}</span>

                  </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="relative">

                  {/* Timeline Dot */}

                  <div className="hidden md:flex absolute -left-[48px] top-2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white items-center justify-center">

                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>

                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.institution}
                    </h3>

                    <p className="text-lg text-gray-500 mt-1">
                      {item.degree}
                    </p>

                    <ul className="list-disc ml-6 mt-6 text-gray-700 space-y-2 text-sm leading-8">

                      {item.points.map((point, idx) => (

                        <li key={idx}>
                          {point}
                        </li>

                      ))}

                    </ul>

                    {/* Tags */}

                    <div className="flex flex-wrap gap-2 mt-6">

                      {item.tags.map((tag, idx) => (

                        <span
                          key={idx}
                          className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default Education