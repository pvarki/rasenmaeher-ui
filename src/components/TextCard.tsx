export function TextCard({
  title,
  image,
  details,
}: {
  title?: React.ReactNode;
  image?: string;
  details?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-backgroundLight rounded-lg w-full max-w-full h-36 md:h-36 lg:h-36 mb-5 overflow-hidden prose prose-white">
      <h3 className="text-xl font-bold mt-1 mb-1">{title}</h3>
      {image && <img src={image} className="w-36 h-36 object-contain mt-2" />}
      {details && <p className="text-center ml-2 mr-2 ">{details}</p>}
    </div>
  );
}
