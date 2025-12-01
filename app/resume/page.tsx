import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";

interface Role {
  title: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  coursework?: string[];
  roles?: Role[];
}

interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
}

export default function Resume() {
  // Combine education and experience, sorted by year (most recent first)
  const allEntries: Array<{
    type: "education" | "experience";
    data: Education | Experience;
    sortYear: string;
  }> = [
    ...educationData.map((edu) => ({
      type: "education" as const,
      data: edu,
      sortYear: edu.year.split("-")[0] || edu.year.split("–")[0] || edu.year,
    })),
    ...experienceData.map((exp) => ({
      type: "experience" as const,
      data: exp,
      sortYear: exp.year,
    })),
  ].sort((a, b) => parseInt(b.sortYear) - parseInt(a.sortYear));

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Timeline line - 2px wide (w-0.5), centered at 4px */}
          <div className="absolute left-[3px] top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* All entries */}
          <div className="space-y-8 sm:space-y-10">
            {allEntries.map((entry, index) => {
              if (entry.type === "education") {
                const education = entry.data as Education;
                return (
                  <div key={`edu-${index}`} className="relative pl-8 sm:pl-10">
                    {/* Timeline bullet */}
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-gray-700 bg-white z-10"></div>

                    {/* Content */}
                    <div>
                      {/* Degree Title */}
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                        {education.degree}
                      </h3>

                      {/* Institution, Location, and Year */}
                      <p className="text-gray-500 text-xs mb-3">
                        {education.institution} • {education.location} • {education.year}
                      </p>

                      {/* Relevant Coursework */}
                      {education.coursework && education.coursework.length > 0 && (
                        <p className="text-gray-500 text-xs mb-3">
                          <span className="font-bold">relevant coursework:</span> {education.coursework.join(", ")}.
                        </p>
                      )}

                      {/* Roles/Experiences */}
                      {education.roles && education.roles.length > 0 && (
                        <div className="space-y-3 mt-3">
                          {education.roles.map((role: Role, roleIndex: number) => (
                            <p key={roleIndex} className="text-gray-500 text-xs border-l-2 border-gray-200 pl-3">
                              <span className="font-bold">{role.title}</span> ({role.period}) — {role.description}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              } else {
                const experience = entry.data as Experience;
                return (
                  <div key={`exp-${index}`} className="relative pl-8 sm:pl-10">
                    {/* Timeline bullet */}
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-gray-700 bg-white z-10"></div>

                    {/* Content */}
                    <div>
                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>

                      {/* Company and Year */}
                      <p className="text-gray-500 text-xs mb-2">
                        {experience.company} ({experience.year})
                      </p>

                      {/* Description */}
                      <p className="text-gray-500 text-xs">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

