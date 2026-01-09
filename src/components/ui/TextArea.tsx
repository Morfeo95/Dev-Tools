import React from 'react';

interface TextareaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ label, placeholder, value, onChange }: TextareaProps) {

    const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-3 items-center text-[#f1f1f1] font-mono">

      <label htmlFor={id} className="">
        {label}
      </label>
      
      <textarea
        id={id}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        className="border border-[#e8f7fc] rounded-lg outline-none resize-none w-2xl h-96"
      ></textarea>
    </div>
  );
}