import { Download } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { useSkills, useExperience } from '../hooks/useData';

export const ResumePage = () => {
  const skills = useSkills();
  const experience = useExperience();

  return (
    <div className="max-w-3xl mx-auto py-12">
      
      {/* Header */}
      <Section className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Resume</h1>
            <p className="text-zinc-600 dark:text-zinc-400">Senior Frontend Engineer & UI Specialist</p>
        </div>
        <button 
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            onClick={() => alert("This is a demo. In a real app, this would trigger a PDF download.")}
        >
            <Download size={18} />
            Download PDF
        </button>
      </Section>

      {/* Skills */}
      <Section delay={0.1} className="mb-16">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                        {skillGroup.items.map((item) => (
                            <li key={item} className="text-zinc-600 dark:text-zinc-400 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </Section>

      {/* Experience */}
      <Section delay={0.2}>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">Experience</h2>
        <div className="space-y-12">
            {experience.map((job) => (
                <div key={job.id} className="relative pl-8 md:pl-0">
                    {/* Timeline line for mobile visual */}
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:hidden" />
                    <div className="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-blue-500 md:hidden" />

                    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                        <div className="text-zinc-500 dark:text-zinc-500 text-sm font-medium pt-1">
                            {job.period}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{job.role}</h3>
                            <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">{job.company}</div>
                            <ul className="space-y-3">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                                        • {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

    </div>
  );
};
