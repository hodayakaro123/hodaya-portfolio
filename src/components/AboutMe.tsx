import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            About Me
          </span>
        </h1>

        {/* Content Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* Profile Section */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">H</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hodaya Karo
            </h2>
            <p className="text-xl text-white/80 mb-6">Full Stack Developer</p>
          </div>

          {/* Description */}
          <div className="text-lg text-white/90 leading-relaxed mb-8 space-y-4">
            <p>
              Hello! I'm Hodaya, a creative and innovative software developer
              with a passion for creating exceptional digital experiences.
            </p>
            <p>
              I specialize in Full Stack development with a focus on modern
              technologies like React, Node.js, and TypeScript. My love for code
              is connected with the desire to create solutions that improve
              people's lives.
            </p>
            <p>
              Beyond code, I believe in design that combines functionality with
              aesthetics, creating intuitive and beautiful interfaces.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
            ].map((skill, index) => (
              <div
                key={skill}
                className="bg-white/20 rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Let's Connect!
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </section>
  );
};

export default AboutMe;
