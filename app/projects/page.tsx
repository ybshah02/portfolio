import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen space-y-12">
      {/* Software Projects Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">software</h2>
        <div className="max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.tech.map((project) => (
              <ProjectCard key={project.id} project={project} variant="tech" />
            ))}
          </div>
        </div>
      </div>

      {/* Consulting Projects Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">consulting</h2>
        <div className="max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.consulting.map((project) => (
              <ProjectCard key={project.id} project={project} variant="consulting" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

