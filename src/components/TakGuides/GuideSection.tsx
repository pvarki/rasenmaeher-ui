import React from "react";

interface GuideSectionProps {
  number?: string;
  description?: React.ReactNode;
  imageSrc?: string;
  imageLink?: string;
  note?: React.ReactNode;
  imageClasses?: string;

  description2?: React.ReactNode;
  image2Src?: string;
  image2Link?: string;
  note2?: React.ReactNode;
  image2Classes?: string;

  description3?: React.ReactNode;
  image3Src?: string;
  image3Link?: string;
  note3?: React.ReactNode;
  image3Classes?: string;

  description4?: React.ReactNode;
}

export function GuideSection(props: GuideSectionProps) {
  const defaultImageClasses =
    "object-cover object-center w-[135px] bg-blend-normal border shrink-0 mt-2.5 rounded-md border-solid border-neutral-400";

  const renderImage = (
    imageSrc: string,
    imageLink: string,
    imageClasses: string,
  ) => (
    <a href={imageLink} target="_blank" rel="noopener noreferrer">
      <img loading="lazy" src={imageSrc} className={imageClasses} alt="Image" />
    </a>
  );

  const renderDescription = (description?: React.ReactNode) => (
    <div className="prose prose-white max-w-none">{description}</div>
  );

  const renderNote = (note?: React.ReactNode) => (
    <div className="prose prose-white max-w-none text-red-400 mt-2">{note}</div>
  );

  return (
    <div
      className={`flex w-full max-w-[350px] md:max-w-[400px] lg:max-w-[600px] justify-between gap-2.5 mt-4 mb-6 pb-2.5 bg-neutral-800 items-start self-stretch`}
    >
      <div className="justify-center text-white text-center text-2xl font-bold leading-6">
        {props.number}
      </div>

      <div className="flex-grow relative flex flex-col justify-start">
        {renderDescription(props.description)}
        {props.imageSrc &&
          renderImage(
            props.imageSrc,
            props.imageLink || "#",
            props.imageClasses || defaultImageClasses,
          )}
        {renderNote(props.note)}

        {renderDescription(props.description2)}
        {props.image2Src &&
          renderImage(
            props.image2Src,
            props.image2Link || "#",
            props.image2Classes || defaultImageClasses,
          )}
        {renderNote(props.note2)}

        {renderDescription(props.description3)}
        {props.image3Src &&
          renderImage(
            props.image3Src,
            props.image3Link || "#",
            props.image3Classes || defaultImageClasses,
          )}
        {renderNote(props.note3)}

        {renderDescription(props.description4)}
      </div>
    </div>
  );
}
