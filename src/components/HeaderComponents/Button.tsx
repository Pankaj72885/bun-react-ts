interface ButtonProps {
  name: string;
}

export default function Button({ name }: ButtonProps) {
  return (
    <>
      <button className="bg-gray-700 hover:bg-gray-300 hover:text-gray-800 px-3 py-0.5 ring rounded-md">{name}</button>
    </>
  );
}
