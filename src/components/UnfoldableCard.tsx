import React, { useState } from "react";
import { useAlertDialog } from "../components/AlertDialogService";

interface UnfoldableCardProps {
  title: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
  styling?: string;
  initialOpen?: boolean;
  imageSrc?: string;
  imageLink?: string;
  imageClasses?: string;
  image2Src?: string;
  image2Link?: string;
  image2Classes?: string;
  image3Src?: string;
  image3Link?: string;
  image3Classes?: string;
  image4Src?: string;
  image4Link?: string;
  image4Classes?: string;
  image5Src?: string;
  image5Link?: string;
  image5Classes?: string;
  image6Src?: string;
  image6Link?: string;
  image6Classes?: string;
  image7Src?: string;
  image7Link?: string;
  image7Classes?: string;
  image8Src?: string;
  image8Link?: string;
  image8Classes?: string;
  image9Src?: string;
  image9Link?: string;
  image9Classes?: string;
  image10Src?: string;
  image10Link?: string;
  image10Classes?: string;
  image11Src?: string;
  image11Link?: string;
  image11Classes?: string;
  image12Src?: string;
  image12Link?: string;
  image12Classes?: string;
  image13Src?: string;
  image13Link?: string;
  image13Classes?: string;
  image14Src?: string;
  image14Link?: string;
  image14Classes?: string;
  image15Src?: string;
  image15Link?: string;
  image15Classes?: string;
  description1?: React.ReactNode;
  description2?: React.ReactNode;
  description3?: React.ReactNode;
  description4?: React.ReactNode;
  description5?: React.ReactNode;
  description6?: React.ReactNode;
  description7?: React.ReactNode;
  description8?: React.ReactNode;
  description9?: React.ReactNode;
  description10?: React.ReactNode;
  description11?: React.ReactNode;
  description12?: React.ReactNode;
  description13?: React.ReactNode;
  description14?: React.ReactNode;
  description15?: React.ReactNode;
  note?: React.ReactNode;
  note2?: React.ReactNode;
  note3?: React.ReactNode;
  note4?: React.ReactNode;
  note5?: React.ReactNode;
  note6?: React.ReactNode;
  note7?: React.ReactNode;
  note8?: React.ReactNode;
  note9?: React.ReactNode;
  note10?: React.ReactNode;
  note11?: React.ReactNode;
  note12?: React.ReactNode;
  note13?: React.ReactNode;
}

export function UnfoldableCard({
  title,
  content,
  children,
  styling = "",
  initialOpen = false,
  imageSrc,
  imageLink = "",
  imageClasses = "",
  image2Src,
  image2Link = "",
  image2Classes = "",
  image3Src,
  image3Link = "",
  image3Classes = "",
  image4Src,
  image4Link = "",
  image4Classes = "",
  image5Src,
  image5Link = "",
  image5Classes = "",
  image6Src,
  image6Link = "",
  image6Classes = "",
  image7Src,
  image7Link = "",
  image7Classes = "",
  image8Src,
  image8Link = "",
  image8Classes = "",
  image9Src,
  image9Link = "",
  image9Classes = "",
  image10Src,
  image10Link = "",
  image10Classes = "",
  image11Src,
  image11Link = "",
  image11Classes = "",
  image12Src,
  image12Link = "",
  image12Classes = "",
  image13Src,
  image13Link = "",
  image13Classes = "",
  image14Src,
  image14Link = "",
  image14Classes = "",
  image15Src,
  image15Link = "",
  image15Classes = "",
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  description10,
  description11,
  description12,
  description13,
  description14,
  description15,
  note,
  note2,
  note3,
  note4,
  note5,
  note6,
  note7,
  note8,
  note9,
  note10,
  note11,
  note12,
  note13,
}: UnfoldableCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const { openDialog } = useAlertDialog();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleImageClick = (src: string, link: string) => {
    if (link) {
      window.location.href = link;
    } else {
      openDialog({
        title: "Katso kuvaa suurempana",
        description: (
          <img src={src} alt="Enlarged Content" style={{ maxWidth: "100%" }} />
        ),
        confirmLabel: "Sulje",
        confirmColor: "primary",
        onConfirm: () => {
          // just close the modal
        },
      });
    }
  };

  const renderImage = (src = "", link = "", classes = "") =>
    src && (
      <img
        src={src}
        className={`mx-auto ${classes} cursor-pointer`}
        alt="Unfoldable card content"
        onClick={() => handleImageClick(src, link)}
      />
    );

  return (
    <div
      className={`flex flex-col w-full p-4 rounded-md cursor-pointer bg-background ${styling}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-l text-white font-bold">{title}</h3>
        <span
          className={`transform transition-transform duration-300 text-white ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ display: "inline-block" }}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <>
          {renderImage(imageSrc, imageLink, imageClasses)}
          {description1 && (
            <p className="m-2 text-white prose prose-white">{description1}</p>
          )}

          {renderImage(image2Src, image2Link, image2Classes)}
          {description2 && (
            <p className="m-2 text-white prose prose-white">{description2}</p>
          )}

          {note && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note}
            </div>
          )}

          {renderImage(image3Src, image3Link, image3Classes)}
          {description3 && (
            <p className="m-2 text-white prose prose-white">{description3}</p>
          )}

          {note2 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note2}
            </div>
          )}

          {renderImage(image4Src, image4Link, image4Classes)}
          {description4 && (
            <p className="m-2 text-white prose prose-white">{description4}</p>
          )}

          {note3 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note3}
            </div>
          )}

          {renderImage(image5Src, image5Link, image5Classes)}
          {description5 && (
            <p className="m-2 text-white prose prose-white">{description5}</p>
          )}

          {note4 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note4}
            </div>
          )}

          {renderImage(image6Src, image6Link, image6Classes)}
          {description6 && (
            <p className="m-2 text-white prose prose-white">{description6}</p>
          )}

          {note5 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note5}
            </div>
          )}

          {renderImage(image7Src, image7Link, image7Classes)}
          {description7 && (
            <p className="m-2 text-white prose prose-white">{description7}</p>
          )}

          {note6 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note6}
            </div>
          )}

          {renderImage(image8Src, image8Link, image8Classes)}
          {description8 && (
            <p className="m-2 text-white prose prose-white">{description8}</p>
          )}

          {note7 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note7}
            </div>
          )}

          {renderImage(image9Src, image9Link, image9Classes)}
          {description9 && (
            <p className="m-2 text-white prose prose-white">{description9}</p>
          )}

          {note8 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note8}
            </div>
          )}

          {renderImage(image10Src, image10Link, image10Classes)}
          {description10 && (
            <p className="m-2 text-white prose prose-white">{description10}</p>
          )}

          {note9 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note9}
            </div>
          )}

          {renderImage(image11Src, image11Link, image11Classes)}
          {description11 && (
            <p className="m-2 text-white prose prose-white">{description11}</p>
          )}

          {note10 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note10}
            </div>
          )}

          {renderImage(image12Src, image12Link, image12Classes)}
          {description12 && (
            <p className="m-2 text-white prose prose-white">{description12}</p>
          )}

          {note11 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note11}
            </div>
          )}

          {renderImage(image13Src, image13Link, image13Classes)}
          {description13 && (
            <p className="m-2 text-white prose prose-white">{description13}</p>
          )}

          {note12 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note12}
            </div>
          )}

          {renderImage(image14Src, image14Link, image14Classes)}
          {description14 && (
            <p className="m-2 text-white prose prose-white">{description14}</p>
          )}

          {note13 && (
            <div className="prose prose-white max-w-none text-red-400 mt-2">
              {note13}
            </div>
          )}

          {renderImage(image15Src, image15Link, image15Classes)}
          {description15 && (
            <p className="m-2 text-white prose prose-white">{description15}</p>
          )}

          {content && (
            <p className="mt-2 text-white prose prose-white">{content}</p>
          )}
          {children}
        </>
      )}
    </div>
  );
}
