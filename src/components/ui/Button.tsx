
interface ButtonProps {
    label: string
    onclick: () => void
}
export default function Button({label, onclick}: ButtonProps){

    return(
        <button 
        className="p-5 text-[#F1F1F1] border border-[#e8f7fc] rounded-lg 
        hover:scale-105 duration-300 ease-in-out active:scale-95 font-mono"
        onClick={onclick}>{label}</button>
    );

}