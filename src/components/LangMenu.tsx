import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "./Icons";
import i18n from "@/i18n";

export default function LangMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icons.Global />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Langs.map(({ code, name, countryCode }) => (
          <DropdownMenuItem
            className="cursor-pointer flex items-center gap-4"
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            disabled={i18n.resolvedLanguage === code}
          >
            <Icons.Flag flag={countryCode} />
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Langs = [
  {
    code: "ar",
    name: "Arabic",
    countryCode: "eg",
  },
  {
    code: "en",
    name: "English",
    countryCode: "us",
  },
];
