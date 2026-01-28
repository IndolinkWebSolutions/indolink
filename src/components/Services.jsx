import {
  FaUserPlus,
  FaQuestionCircle,
  FaBriefcase,
  FaGlobe,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaUserPlus className="text-blue-500" />,
    title: "Register Your Business",
    desc: "Join our B2B platform and connect globally.",
  },
  {
    icon: <FaQuestionCircle className="text-green-500" />,
    title: "Help & Support",
    desc: "Get answers to FAQs and support anytime.",
  },
  {
    icon: <FaBriefcase className="text-yellow-500" />,
    title: "B2B Services",
    desc: "Explore our business solutions worldwide.",
  },
  {
    icon: <FaGlobe className="text-red-500" />,
    title: "Global Reach",
    desc: "Expand your business across borders.",
  },
  {
    icon: <FaHandshake className="text-cyan-500" />,
    title: "Partnerships",
    desc: "Collaborate with trusted businesses.",
  },
  {
    icon: <FaHeadset className="text-gray-600" />,
    title: "Customer Support",
    desc: "We’re here to help 24/7.",
  },
];

export default function IndolinkCards() {
  return (
    <section className="bg-white py-4 px-4 sm:px-8 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-white rounded-lg p-8 text-center
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
            "
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="text-4xl">
                {card.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
