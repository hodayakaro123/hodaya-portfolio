import React from "react";

interface ExperienceItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      type: "work",
      title: "Software Developer (Reservist)",
      company: "Israeli Navy Intelligence",
      location: "Haifa, Israel",
      period: "Oct 2025 - Present",
      description: [
        "Built internal tools supporting intelligence operations using React, Node.js, MongoDB, Docker",
        "Fast-paced development in mission-critical, security-sensitive environments",
      ],
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Pery - Health-Tech Startup",
      location: "Petah Tikva, Israel",
      period: "Oct 2024 - Oct 2025",
      description: [
        "Developed end-to-end multi-tenant web & mobile applications for health system clinics with secure EHR integrations",
        "Designed and developed in accordance with HIPAA privacy and security requirements",
        "Worked across staging and production environments, handling live issues and releases",
        "Designed and implemented a generic SMS Facade supporting multiple providers (Twilio, Vonage) via a unified API",
        "Tech Stack: Node.js, Next.js, React Native, TypeScript, Tailwind CSS, AWS, PostgreSQL, Pulumi, CI/CD pipelines",
      ],
    },
    {
      type: "work",
      title: "Mobile App Developer",
      company: "BaTTeRi - Startup Collaboration Project",
      location: "Israel",
      period: "2025",
      description: [
        "Built an end-to-end cross-platform mobile app for booking EV charging robots",
        "Implemented SMS-based authentication, multi-language support, and real-time robot tracking using WebSockets",
        "Tech Stack: React Native (Expo), TypeScript, Firebase, Twilio, WebSockets",
      ],
    },
    {
      type: "education",
      title: "B.Sc. in Computer Science",
      company: "The College of Management",
      location: "Israel",
      period: "2022 - 2025",
      description: [
        "Relevant coursework: Data Structures, Algorithms, Database Systems",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 flex items-center justify-center p-4 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-300 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full ring-4 ring-slate-900"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 hover:border-white/40 transition-all duration-300 transform hover:scale-[1.02]">
                    {/* Badge */}
                    <div className="inline-block mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === "work"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                            : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                        }`}
                      >
                        {item.type === "work" ? "💼 Work" : "🎓 Education"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Company/Location */}
                    {(item.company || item.location) && (
                      <div className="flex items-center space-x-2 text-white/70 mb-3">
                        {item.company && (
                          <>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                            <span className="text-sm">{item.company}</span>
                          </>
                        )}
                        {item.location && (
                          <>
                            <span className="text-white/50">•</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-sm">{item.location}</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* Period */}
                    <div className="flex items-center space-x-2 text-cyan-300 mb-4">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-white/80 text-sm leading-relaxed flex items-start"
                        >
                          <span className="text-cyan-400 mr-2 mt-1">▸</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {experiences.length === 0 && (
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/80 text-lg mb-4">
                Add your work experience and education details to showcase your
                professional journey!
              </p>
              <p className="text-white/60 text-sm">
                Edit the experiences array in Experience.tsx
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </section>
  );
};

export default Experience;

