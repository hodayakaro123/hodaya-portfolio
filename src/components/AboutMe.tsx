import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 flex items-center justify-center p-4 pt-24 md:pt-28">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* Profile Section */}
          <div className="mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 ring-4 ring-white/20">
              <span className="text-5xl md:text-6xl font-bold text-white">H</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Hodaya Karo
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-2 font-medium">Full Stack Developer</p>
            <p className="text-sm md:text-base text-white/70">Building modern web & mobile applications</p>
          </div>

          {/* Description */}
          <div className="text-base md:text-lg text-white/90 leading-relaxed mb-8 space-y-5 max-w-3xl mx-auto">
            <p className="text-center md:text-left">
              Hello! I'm <span className="font-semibold text-white">Hodaya Karo</span>, a Full Stack Developer with hands-on
              professional experience in developing web and mobile applications
              using modern technologies like <span className="text-blue-300">React</span>, <span className="text-blue-300">Node.js</span>, <span className="text-blue-300">TypeScript</span>, and <span className="text-blue-300">Next.js</span>.
            </p>
            <p className="text-center md:text-left">
              Currently completing my <span className="font-semibold text-white">B.Sc. in Computer Science</span>. Throughout my
              studies and professional experience, I've built intuitive mobile
              apps and scalable web platforms – working within <span className="text-blue-300">Agile</span> environments and cross-functional teams.
            </p>
            <p className="text-center md:text-left">
              I love turning ideas into smart, user-focused digital solutions
              that combine <span className="text-cyan-300">performance</span> with <span className="text-cyan-300">great design</span>.
            </p>
            <p className="text-center md:text-left font-medium">
              A fast learner, proactive team player, and creative thinker – I'm
              ready for my next challenge.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML",
                "CSS",
                "React",
                "React Native",
                "TypeScript",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
                "Docker",
                "AWS",
                "C++",
                "Python",
                "Java",
                "C",
                "CI/CD",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-white font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Hebrew", level: "Native", flag: "🇮🇱" },
                { name: "English", level: "Fluent", flag: "🇬🇧" },
                // Add more languages if needed
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 min-w-[140px] text-center"
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="text-white font-semibold mb-1">{lang.name}</div>
                  <div className="text-white/70 text-sm">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/hodayakaro123"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hodayakaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="/resume/Resume%20Hodaya%20Karo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Let's Connect Button - Second Row */}
          <div className="mt-6 text-center">
            <a
              href="mailto:hodayak3@gmail.com"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Let's Connect!</span>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-300 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
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

export default AboutMe;
