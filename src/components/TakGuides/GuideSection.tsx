import parse from 'html-react-parser';

interface GuideSectionProps {
  number?: string;
  description?: string;
  imageSrc?: string;
  imageLink?: string;
  note?: string;
  imageClasses?: string;

  description2?: string;
  image2Src?: string;
  image2Link?: string;
  note2?: string;
  image2Classes?: string;

  description3?: string;
  image3Src?: string;
  image3Link?: string;
  note3?: string;
  image3Classes?: string;

  description4?: string;
}

export function GuideSection(props: GuideSectionProps) {
  const defaultImageClasses = "object-cover object-center w-[135px] bg-blend-normal border shrink-0 mt-2.5 rounded-md border-solid border-neutral-400";

  const renderImage = (imageSrc: string, imageLink: string, imageClasses: string) => (
    <a href={imageLink} target="_blank" rel="noopener noreferrer">
      <img loading="lazy" src={imageSrc} className={imageClasses} alt="Image" />
    </a>
  );

  return (
    <div className={`flex w-full max-w-[350px] md:max-w-[400px] lg:max-w-[600px] justify-between gap-2.5 mt-4 mb-6 pb-2.5 bg-neutral-800 items-start self-stretch`}>
      <div className="justify-center text-white text-center text-2xl font-bold leading-6">
        {props.number}
      </div>
      
      <div className="flex-grow relative flex flex-col justify-start">
        {props.description && <p className="text-white text-l leading-6 w-full">{parse(props.description)}</p>}
        {props.imageSrc && renderImage(props.imageSrc, props.imageLink || '#', props.imageClasses || defaultImageClasses)}
        {props.note && <p className="text-red-400 mt-2 w-full">{parse(props.note)}</p>}

        {props.description2 && <p className="text-white text-l leading-6 w-full">{parse(props.description2)}</p>}
        {props.image2Src && renderImage(props.image2Src, props.image2Link || '#', props.image2Classes || defaultImageClasses)}
        {props.note2 && <p className="text-red-400 mt-2 w-full">{parse(props.note2)}</p>}

        {props.description3 && <p className="text-white text-l leading-6 w-full">{parse(props.description3)}</p>}
        {props.image3Src && renderImage(props.image3Src, props.image3Link || '#', props.image3Classes || defaultImageClasses)}
        {props.note3 && <p className="text-red-400 mt-2 w-full">{parse(props.note3)}</p>}

        {props.description4 && <p className="text-white text-l leading-6 w-full">{parse(props.description4)}</p>}
      </div>
    </div>
  );
}
