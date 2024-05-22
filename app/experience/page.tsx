import { title } from "@/components/primitives";
import ContentCard from "@/components/content-card";
import ExperienceData from "../../data/experience.json";

export default function ExperiencePage() {
    return (
        <div className="grid grid-rows-5 gap-12">
         {ExperienceData.map((experience) => (
                <ContentCard key={experience.id} title={experience.title} description={experience.description} date={experience.date} />
        ))}
        </div>
    );
}
