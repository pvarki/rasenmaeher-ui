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
    const defaultImageClasses = "object-cover object-center w-[135px] bg-blend-normal border shrink-0 mt-2.5 mr-4 rounded-md border-solid border-neutral-400";
  
  const appliedImageClasses = props.imageClasses ? props.imageClasses : defaultImageClasses;
  const appliedImage2Classes = props.image2Classes ? props.image2Classes : defaultImageClasses;
  const appliedImage3Classes = props.image3Classes ? props.image3Classes : defaultImageClasses;

  return (
    <div className="items-start self-stretch bg-neutral-800 flex w-[350px] max-w-full justify-between gap-2.5 mt-2 pb-2.5">

      <div className="justify-center text-white text-center text-2xl font-bold leading-6">
        {props.number}
      </div>

      <div className="items-start flex flex-col grow shrink-0 basis-auto mt-2.5 relative">
        {props.description && <p className="text-white text-l leading-6 w-[266px] max-w-full">{parse(props.description)}</p>}
        
            {props.imageSrc && (
            <a href={props.imageLink} target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={props.imageSrc} className={appliedImageClasses} alt="Image" />
            </a>
            )}
            {props.note && <p className="text-red-400 mt-2">{parse(props.note)}</p>}

        {props.description2 && <p className="text-white text-l leading-6 w-[266px] max-w-full">{parse(props.description2)}</p>}

            {props.image2Src && (
            <a href={props.image2Link} target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={props.image2Src} className={appliedImage2Classes} alt="Image" />
            </a>
            )}
            {props.note2 && <p className="text-red-400 mt-2">{parse(props.note2)}</p>}

        {props.description3 && <p className="text-white text-l leading-6 w-[266px] max-w-full">{parse(props.description3)}</p>}
        
            {props.image3Src && (
            <a href={props.image3Link} target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={props.image3Src} className={appliedImage3Classes} alt="Image" />
            </a>
            )}
            {props.note3 && <p className="text-red-400 mt-2">{parse(props.note3)}</p>}

        {props.description4 && <p className="text-white text-l leading-6 w-[266px] max-w-full">{parse(props.description4)}</p>}
        
      </div>
    </div>
  );
}
