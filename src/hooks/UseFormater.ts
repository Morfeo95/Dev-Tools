

export function useFormater(){
    const toSnakeCase = (text: string) => text.toLocaleLowerCase().replace(/\s+/g, '_');
    const handleSpaces = (text: string) => text.replace(/\s+/g, ' ').trim();
    const formatJSON = (text: string) => {
        try{
            return JSON.stringify (JSON.parse(text), null, 2);
        }
        catch (e){
        return "JSON invalido";
    }
    }
    return {
        toSnakeCase,
        handleSpaces,
        formatJSON
    }
}