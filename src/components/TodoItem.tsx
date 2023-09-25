interface Props {
  id: string;
  title: string;
  complete: boolean;
}

export function TodoItem({ id, title, complete }: Props) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer"></input>
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
