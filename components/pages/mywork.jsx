import Reveal from "../Reveal";
import { FileText, ClipboardList, BookOpen } from "lucide-react";

const FOLDERS = [
    {
    title: "Notes",
    description: "Clear and carefully prepared learning notes to support understanding beyond the classroom.",
    link: "https://drive.google.com/drive/folders/16FLMog9cpd3UWPfsyonP3fL5auFVaaHY",
    icon: BookOpen,
  },
  
  {
    title: "Assignments",
    description: "Thoughtfully designed activities that encourage curiosity, creativity, and meaningful learning.",
    link: "https://drive.google.com/drive/folders/1dR7NiGU2Rn4zvzJfk5pnpL8QmmI6d85U",
    icon: ClipboardList,
  },
  {
    title: "Test Papers",
    description: "Curated assessments designed to help students practise, prepare, and grow with confidence.",
    link: "https://drive.google.com/drive/folders/1K4y826C1iTzULXLfYuUUIs4TH3frLPgQ",
    icon: FileText,
  },
  
];

export default function Lessons() {
  return (
    <section className="mx-auto px-8 md:px-12 lg:px-20 py-16 sm:py-24">
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">
          Your learning material
        </span>

        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">
          Study resources
        </h2>
      </Reveal>

     <div className="grid sm:grid-cols-3 gap-6 mt-10 items-stretch">
  {FOLDERS.map((folder, i) => {
    const Icon = folder.icon;

    return (
      <Reveal key={folder.title} delay={i * 100} className="h-full">
        <a
          href={folder.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full w-full"
        >
          <div className="relative h-full w-full">

            {/* Folder tab */}
            <div className="absolute left-4 -top-3 w-20 h-7 rounded-t-lg bg-[var(--moss-deep)]" />

            {/* Folder */}
            <div
              className="
                relative
                w-full
                h-[250px]
                bg-[var(--moss)]
                rounded-2xl
                rounded-tl-none
                p-6
                pt-8
                shadow-md
                transition-all
                duration-300
                group-hover:-translate-y-2
                group-hover:shadow-xl
                flex
                flex-col
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 shrink-0 rounded-xl bg-[var(--paper)]/90 flex items-center justify-center mb-5">
                <Icon
                  size={30}
                  className="text-[var(--moss-deep)]"
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--paper)] shrink-0">
                {folder.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm
                  mt-2
                  leading-relaxed
                  text-[var(--paper)]/80
                  line-clamp-3
                  overflow-hidden
                "
              >
                {folder.description}
              </p>

              {/* Bottom link */}
              <div className="mt-auto pt-3 text-sm font-medium text-[var(--paper)]/90 shrink-0">
                Open →
              </div>
            </div>
          </div>
        </a>
      </Reveal>
    );
  })}
</div>
    </section>
  );
}