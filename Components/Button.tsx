import { ScriptProps } from "next/script";

type ButtonProps = ScriptProps & {
  text: string;
  onClick?: () => any | Promise<() => any>;
  icon?: any;
};

export default function Button({ ...props }: ButtonProps): JSX.Element {
  return (
    <div
      onClick={props.onClick}
      className="flex align-center justify-center cursor-pointer w-40 h-auto font-normal text-center mt-5 p-2 bg-transparent border-2 border-zinc-200 transition-all hover:text-zinc-900 hover:bg-zinc-200"
    >
      <div className="absolute text-xl pr-2 -ml-20 self-center btn-icon">
        {props.icon}
      </div>
      {props.icon && (
        <button className="ml-5 pointer-events-none">{props.text}</button>
      )}
      {!props.icon && (
        <button className="pointer-events-none">{props.text}</button>
      )}
    </div>
  );
}
