import {
  Globe,
  InfoIcon,
  LucideProps,
  PhoneIcon,
  QrCode,
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
  Logo: (props: LucideProps) => <QrCode {...props} />,
  Website: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      stroke="#000"
      strokeWidth={3}
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M39.93 55.72a24.86 24.86 0 1 1 16.93-23.57 37.24 37.24 0 0 1-.73 6" />
      <path d="M37.86 51.1A47 47 0 0 1 32 56.7M32 7a34.14 34.14 0 0 1 11.57 23 34.07 34.07 0 0 1 .09 4.85M32 7a34.09 34.09 0 0 0-11.69 25.46c0 16.2 7.28 21 11.66 24.24M10.37 19.9h43.38M32 6.99V56.7M11.05 45.48h25.99M7.14 32.46l49.72-.61M53.57 57 58 52.56l-8-8 4.55-2.91a.38.38 0 0 0-.12-.7l-15.29-3.58a.39.39 0 0 0-.46.46L42 53.41a.39.39 0 0 0 .71.13L45.57 49Z" />
    </svg>
  ),
  Knowledge: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>{"book"}</title>
      <path d="M28.25 2c0-.69-.56-1.25-1.25-1.25H7.2L7.107.749A3.36 3.36 0 0 0 3.75 3.995v24.394a3.08 3.08 0 0 0 3.258 2.861h-.009 20a1.25 1.25 0 0 0 0-2.5h-19.8a.882.882 0 0 1-.95-.745L6.248 28v-1.223c0-.09.266-.361.746-.361l20.004.057h.001a1.25 1.25 0 0 0 1.148-.756l.003-.008.007-.034c.056-.132.089-.286.092-.447v-.005zm-2.5 21.969-14.5-.041V3.25h14.5zM6.25 24V4a.882.882 0 0 1 .953-.75H7.2h1.55v20.671L7 23.916a3.642 3.642 0 0 0-.774.089L6.25 24zM14 8.25h9a1.25 1.25 0 0 0 0-2.5h-9a1.25 1.25 0 0 0 0 2.5zm9 1.5h-9a1.25 1.25 0 0 0 0 2.5h9a1.25 1.25 0 0 0 0-2.5z" />
    </svg>
  ),
  Computer: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Icons"
      viewBox="0 0 32 32"
      {...props}
    >
      <style>
        {
          ".st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
      <path d="M3 4h26v19H3zM14 20h4M20 26l2 3H10l2-3" className="st0" />
    </svg>
  ),
};
