import React from "react";
import { useAlertDialog } from "../components/AlertDialogService";

export interface StepProps {
  imageSrc?: string;
  imageLink?: string;
  imageClasses?: string;
  description?: React.ReactNode;
  note?: React.ReactNode;
}

export function Step({
  imageSrc,
  imageLink,
  imageClasses,
  description,
  note,
}: StepProps): JSX.Element {
  const { openDialog } = useAlertDialog();

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
    <>
      {description && (
        <p className="m-2 text-white prose prose-white">{description}</p>
      )}

      {renderImage(imageSrc, imageLink, imageClasses)}

      {note && (
        <div className="prose prose-white max-w-none text-red-400 mt-2">
          {note}
        </div>
      )}
    </>
  );
}
