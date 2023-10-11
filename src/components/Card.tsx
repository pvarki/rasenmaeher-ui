// interface CardProps {
//   title: string;
//   image?: string;
//   url?: string;
//   children?: ReactNode;
// }

export function Card({
  title,
  image,
  url,
}: {
  title: string;
  image?: string;
  url?: string;
  children?: ReactNode; 
}

export function Card({ title, image, url }: CardProps) {
    return (
      <a
        href={url}
        className="relative bg-backgroundLight rounded-lg w-full w-[380px] max-w-full h-36 md:h-36 lg:h-36 mb-5 overflow-hidden flex items-center justify-center"
      >
        {image && (
          <img
            src={image}
            className="max-w-36 max-h-36 object-contain p-3"
          />
        )}
        <div className="absolute right-0 bottom-0 bg-primary p-2 rounded-tl-lg">
          <span className="text-white">{title}</span>
        </div>
      </a>
    );
}

