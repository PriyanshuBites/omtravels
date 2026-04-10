import { FaCar, FaMapMarkerAlt, FaClipboardList, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Choose Your Vehicle",
    desc: "Select the car that suits your journey.",
    icon: <FaCar />,
  },
  {
    id: 2,
    title: "Share Travel Details",
    desc: "Fill form or contact us on WhatsApp.",
    icon: <FaClipboardList />,
  },
  {
    id: 3,
    title: "Get Confirmation",
    desc: "We confirm price & availability.",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    title: "Schedule Pickup",
    desc: "Finalize date, time & location.",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    title: "Enjoy the Ride",
    desc: "Sit back and travel comfortably.",
    icon: <FaMapMarkerAlt />,
  },
];

export default function RentStepsRoadTheme() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
        Rent a Car in <span className="text-blue-600">5 Easy Steps</span>
      </h2>

      {/* Road line */}
      <div className="hidden lg:block absolute left-1/2 top-[280px] w-[80%] h-2 -translate-x-1/2 border-t-4 border-dashed border-blue-300" />

      {/* Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon circle */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
              {step.icon}
            </div>

            {/* Step number */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Step {step.id}
            </span>

            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Moving car */}
      <div className="hidden lg:block absolute left-1/2 top-[255px] -translate-x-1/2 animate-bounce text-blue-600 text-3xl">
        <FaCar />
      </div>
    </section>
  );
}
