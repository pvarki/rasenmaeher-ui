interface TextProps {
  title?: string;
  description?: string;
}

export function Text(props: TextProps) {
  return (
    <div className="flex flex-col items-center p-0">
      <h3 className="prose text-lg text-white font-bold mb-0">
        {props.title}
      </h3>
      <p className="prose text-white">{props.description}</p>
    </div>
  );
}
