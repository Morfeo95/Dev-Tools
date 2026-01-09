import { useState } from "react";
import Textarea from "../components/ui/TextArea";
import ActionBar from "../components/ActionBar";
import Button from "../components/ui/Button";
import Donations from "../components/Donations";

export default function Formater() {

    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    };
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(output);
    };

    return (
        <div className="flex flex-col gap-3 items-center mt-5">
            <Textarea 
            label={"Ingresa tu texto aqui"} 
            placeholder={"text_to_camel_case"} 
            onChange={handleInputChange} 
            value={input} />
            <ActionBar input={input} setOutput={setOutput} />
            <Textarea 
                label={"Salida de texto...."}
                placeholder={"textToCamelCase"}
            onChange={() => { } } 
            value={output} />
            <div className="w-22">
            <Button label={"copiar"} onclick={ copyToClipboard }/>
            </div>
            <div className="fixed top-1 right-1 m-10">
                <Donations/>
            </div>
        </div>
    );
}