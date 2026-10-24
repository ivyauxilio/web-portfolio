import { useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import { designFolders } from "../data/designs";

// pulls the folder ID out of a normal Drive share link
const folderId = (url: string) => url.match(/folders\/([\w-]+)/)?.[1] ?? "";

export default function DesignWorks() {
  const [activeId, setActiveId] = useState(designFolders[0].id);
  const folder = designFolders.find((f) => f.id === activeId)!;
  const id = folderId(folder.driveUrl);

  return (
    <Section
      id="design"
      title="Graphic design"
      intro="Posters, social media posts and thumbnails I've designed."
    >
      <div
        className="mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label="Design categories"
      >
        {designFolders.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveId(f.id)}
            aria-pressed={f.id === activeId}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              f.id === activeId
                ? "bg-midnight-900 text-lavender-50"
                : "bg-lavender-100 text-midnight-800 hover:bg-lavender-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div key={folder.id} className="animate-rise">
        <p className="mb-4 text-midnight-800/80">{folder.description}</p>

        {id ? (
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${id}#grid`}
            title={`${folder.label} designs`}
            loading="lazy"
            className="h-[560px] w-full rounded-xl border border-midnight-900/10 bg-white"
          />
        ) : (
          <p className="rounded-xl bg-lavender-100 p-6 text-midnight-800">
            Add a valid Google Drive folder link for this category in{" "}
            <code>src/data/designs.ts</code>.
          </p>
        )}

        <div className="mt-5">
          <Button
            href={folder.driveUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            Open in Google Drive
          </Button>
        </div>
      </div>
    </Section>
  );
}
