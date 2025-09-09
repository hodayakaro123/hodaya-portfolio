import React, { useState } from "react";
import project1Image from "../assets/projects/1.png";
import project2Image from "../assets/projects/2.png";
import project3Image from "../assets/projects/3.png";
import project4Image from "../assets/projects/4.png";
import project5Image from "../assets/projects/5.png";
import project6Image from "../assets/projects/6.png";
import project7Image from "../assets/projects/7.png";
import project8Image from "../assets/projects/8.png";
import project9Image from "../assets/projects/9.png";
import project10Image from "../assets/projects/10.jpeg";
import project11Image from "../assets/projects/11.jpeg";
import project12Image from "../assets/projects/12.jpeg";
import project13Image from "../assets/projects/13.jpeg";
import project14Image from "../assets/projects/14.jpeg";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  images?: string[];
  videoUrl?: string;
}

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openVideoModal = (videoUrl: string) => {
    console.log("Opening video:", videoUrl);
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Charging Stations",
      description:
        "A full-stack application for managing electric vehicle charging stations. Features include user authentication, station booking, real-time maps integration, and comprehensive admin dashboard. Built with modern web technologies and includes both web and mobile interfaces.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Express",
        "MUI",
        "Leaflet",
      ],
      githubUrl: "https://github.com/TomGuter/Charging-Stations",
      images: [
        project1Image,
        project2Image,
        project3Image,
        project4Image,
        project5Image,
        project6Image,
        project7Image,
        project8Image,
        project9Image,
      ],
    },
    {
      id: 2,
      title: " BaTTeRi",
      description:
        "A comprehensive battery management and monitoring application. Features include real-time battery status tracking, charging optimization, usage analytics, and predictive maintenance alerts. Built with modern technologies for efficient battery lifecycle management.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Express",
        "Chart.js",
        "Socket.io",
      ],
      githubUrl: "",
      videoUrl: "/videos/batteri-demo.mp4",
      images: [
        project10Image,
        project11Image,
        project12Image,
        project13Image,
        project14Image,
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications and innovative
            solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>

              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-6 text-xl">
                    Project Screenshots:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 cursor-pointer"
                        onClick={() => openModal(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-medium">
                            Click to enlarge
                          </p>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Description */}
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                {project.videoUrl && (
                  <button
                    onClick={() => openVideoModal(project.videoUrl!)}
                    className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Watch Demo</span>
                  </button>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Summary */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Portfolio Summary
            </h3>
            <p className="text-white/80 text-lg">
              These projects showcase my expertise in full-stack development,
              modern web technologies, and innovative problem-solving
              approaches.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 mt-16">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        >
          {" "}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Enlarged project screenshot"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl shadow-2xl"
              style={{ maxHeight: "90vh", maxWidth: "90vw" }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              {selectedVideo.includes("youtube.com") ||
              selectedVideo.includes("vimeo.com") ? (
                <iframe
                  src={
                    selectedVideo.includes("youtube.com/watch")
                      ? selectedVideo.replace("watch?v=", "embed/")
                      : selectedVideo
                  }
                  title="Project Demo Video"
                  className="w-full h-96 md:h-[500px] rounded-2xl shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={selectedVideo}
                  controls
                  className="w-full h-96 md:h-[500px] rounded-2xl shadow-2xl"
                  preload="metadata"
                  crossOrigin="anonymous"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  <source src={selectedVideo} type="video/m4v" />
                  <source src={selectedVideo} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              )}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
