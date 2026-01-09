import Button from "./ui/Button";
import { useFormater } from "../hooks/UseFormater";

interface ActionBarProps {
    setOutput: (text: string) => void;
    input: string;
}
 
export default function ActionBar({ setOutput, input }: ActionBarProps) {

    const { toSnakeCase, handleSpaces, formatJSON } = useFormater();

    
    return (
        <section className="flex justify-center items-center gap-3">
            <Button label="to_snake_case" onclick={() =>setOutput(toSnakeCase(input))}/>
            <Button label="Fix crazy  Spaces" onclick={() => setOutput(handleSpaces(input))}/>
            <Button label="Pretty JSON" onclick={ () => setOutput(formatJSON(input))}/>
        </section>
    );

}
        