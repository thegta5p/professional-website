import EducationInfo from "@/components/education-info";
import { Divider } from "@nextui-org/react";
import SkillsData from "../../data/skills.json";
import ContentCard from "@/components/content-card";

export default function Education() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-4xl font-bold">Education</h1>
      </div>
      <EducationInfo />
      <Divider className="my-4" />
      <div className="flex items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {SkillsData.map((skill) => (
          <ContentCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
            date={skill.date}
          />
        ))}
      </div>
    </div>
  );
}
