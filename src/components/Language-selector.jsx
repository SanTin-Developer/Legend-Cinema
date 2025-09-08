import { useState } from "react";
import { IoMdGlobe } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../components/UI/DropdownMenu";

import { Button } from "./UI/Button";

const languages = [
  { code: "en", name: "En", flag: "🇬🇧" },
  { code: "km", name: "ខ្មែរ", flag: "🇰🇭" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Here you can add logic to change the app's language
    console.log("Language changed to:", language.code);
  };

  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild className="z-50">
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-transparent z-10"
        >
          <IoMdGlobe className="text-2xl text-cyan-800 z-0" />
          <span className="flex items-center gap-2">
            <span>{selectedLanguage.flag}</span>
            <span>{selectedLanguage.name}</span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 z-50 ">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center gap-3 cursor-pointer  z-[100]"
          >
            <span className="text-lg z-50 ">{language.flag}</span>
            <span className="font-medium z-50  ">{language.name}</span>
            {selectedLanguage.code === language.code && (
              <span className="ml-auto text-primary z-50">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
