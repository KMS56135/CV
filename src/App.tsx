import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-48 bg-gradient-to-r from-emerald-400 to-emerald-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src="https://avatars.githubusercontent.com/u/159717968?v=4"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          {/* Personal Info */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Yaroslav Dudar</h1>
            <h2 className="text-xl text-emerald-600 mt-1">Junior Frontend Developer</h2>
            <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Saint Petersburg, Russia
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +7 (911) 152-66-91
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                y.dudar@example.com
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/KMS56135" className="hover:text-blue-600">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About Me</h3>
            <p className="text-gray-600 leading-relaxed">
              Passionate junior frontend developer striving to build responsive and user-friendly
              web applications. Currently learning React, TypeScript, and modern frontend
              technologies. Focused on writing clean code, optimizing performance, and delivering
              exceptional user experiences.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Git", "Vite"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Work Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text--600">
                      Actively seeking opportunities to gain practical experience in frontend
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Академия управления городской средой, градостроительства и печати
                  </h4>
                </div>
                <span className="text-gray-500">2021 - 2025</span>
              </div>
              <p className="mt-2 text-gray-600">Information Systems and Programming.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
