import parse from 'html-react-parser';

interface GuideSectionProps {
  number: string;
  description: string;
  imageSrc?: string;
  note?: string;
  imageClasses?: string;
  description2?: string;
  imagePosition?: 'top' | 'middle' | 'bottom';
}

export function GuideSection({
  number,
  description,
  imageSrc,
  note,
  imageClasses,
  description2,
  imagePosition = 'middle'
}: GuideSectionProps) {

  const defaultImageClasses = "float-right aspect-[3.38] object-cover object-center w-[135px] bg-blend-normal border shrink-0 mt-2.5 mr-4 rounded-md border-solid border-neutral-400";
  const appliedImageClasses = imageClasses ? imageClasses : defaultImageClasses;

  return (
      <div className="items-start self-stretch bg-neutral-800 flex w-[350px] max-w-full justify-between gap-2.5 mt-2 pb-2.5">
          <div className="justify-center text-white text-center text-2xl font-bold leading-6">
              {number}
          </div>
          
          <div className="items-start flex flex-col grow shrink-0 basis-auto mt-2.5 relative">
              {imagePosition === 'top' && imageSrc && (
                  <img
                      loading="lazy"
                      srcSet={imageSrc}
                      className={appliedImageClasses}
                      alt="Image"
                  />
              )}
              <p className="text-white text-l leading-6 w-[266px] max-w-full">
                  {parse(description)} {/* Parsed description */}
              </p>
              {imagePosition === 'middle' && imageSrc && (
                  <img
                      loading="lazy"
                      srcSet={imageSrc}
                      className={appliedImageClasses}
                      alt="Image"
                  />
              )}
              {description2 && <p className="text-white text-l leading-6 w-[266px] max-w-full">{parse(description2)}</p>} {/* Parsed description2 */}
              {imagePosition === 'bottom' && imageSrc && (
                  <img
                      loading="lazy"
                      srcSet={imageSrc}
                      className={appliedImageClasses}
                      alt="Image"
                  />
              )}
              <div className="clear-both"></div>
              {note && <p className="text-red-400 mt-2">{parse(note)}</p>} {/* Parsed note */}
          </div>
      </div>
  );
}
