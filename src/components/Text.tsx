interface TextProps {
  title?: string;
  server?: string;
  description?: React.ReactNode;
  description2?: string;
}

export function Text(props: TextProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="prose text-lg text-white font-bold mb-0">{props.title}</h3>
      <p className="prose font-em text-white">{props.server}</p>
      <p className="prose text-white">{props.description}</p>
      <p className="prose text-white">{props.description2}</p>
    </div>
  );
}
