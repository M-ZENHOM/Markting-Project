import {
  Globe,
  InfoIcon,
  LucideProps,
  PhoneIcon,
  UsersIcon,
} from "lucide-react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export const Icons = {
  About: (props: LucideProps) => <InfoIcon {...props} />,
  Users: (props: LucideProps) => <UsersIcon {...props} />,
  Phone: (props: LucideProps) => <PhoneIcon {...props} />,
  Global: (props: LucideProps) => <Globe {...props} />,
  Flag: ({
    flag,
    ...props
  }: { flag: string } & React.HTMLAttributes<HTMLSpanElement>) => (
    <span {...props} className={`fi fi-${flag}`}></span>
  ),
};
