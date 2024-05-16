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
      xmlSpace="preserve"
      style={
        {
          enableBackground: "new 0 0 512 512",
        } as React.CSSProperties
      }
      viewBox="0 0 512 512"
      {...props}
    >
      <circle
        cx={256}
        cy={256}
        r={256}
        style={{
          fill: "#88c5cc",
        }}
      />
      <path
        d="M100 396c-15.436 0-28-12.564-28-28V140c0-15.436 8.564-24 24-24h316c15.436 0 28 12.564 28 28v224c0 15.436-12.564 28-28 28H100z"
        style={{
          fill: "#ccc",
        }}
      />
      <circle
        cx={95.812}
        cy={140}
        r={8}
        style={{
          fill: "#cc584c",
        }}
      />
      <circle
        cx={119.812}
        cy={140}
        r={8}
        style={{
          fill: "#ffd464",
        }}
      />
      <circle
        cx={143.812}
        cy={140}
        r={8}
        style={{
          fill: "#198058",
        }}
      />
      <path
        d="M403.812 144c0 2.2-1.8 4-4 4h-232c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h232c2.2 0 4 1.8 4 4v8zM424 372c0 4.4-3.6 8-8 8H96c-4.4 0-8-3.6-8-8V172c0-4.4 3.6-8 8-8h320c4.4 0 8 3.6 8 8v200z"
        style={{
          fill: "#f5f5f5",
        }}
      />
      <path
        d="M160 356c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8V188c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v168zM400 180c4.4 0 8 3.6 8 8v40c0 4.408-3.6 8-8 8H184c-4.4 0-8-3.592-8-8v-40c0-4.4 3.6-8 8-8h216z"
        style={{
          fill: "#406a80",
        }}
      />
      <path
        d="M176 248h232v8H176zM176 260h232v8H176zM176 272h232v8H176zM176 284h52v52h-52z"
        style={{
          fill: "#b3b3b3",
        }}
      />
      <path
        d="M236 284h52v52h-52z"
        style={{
          fill: "#e16b5a",
        }}
      />
      <path
        d="M296 284h52v52h-52zM356 284h52v52h-52z"
        style={{
          fill: "#b3b3b3",
        }}
      />
    </svg>
  ),
  Knowledge: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={
        {
          enableBackground: "new 0 0 512 512",
        } as React.CSSProperties
      }
      viewBox="0 0 512 512"
      {...props}
    >
      <circle
        cx={256}
        cy={256}
        r={256}
        style={{
          fill: "#f2cf61",
        }}
      />
      <path
        d="M112 106.332c0 13.2 10.8 24 24 24h212v224c0 4-4 8-8 8-52-.024-204 0-204 0-13.2 0-24-10.8-24-24v-232z"
        style={{
          fill: "#233540",
        }}
      />
      <path
        d="M152 130.332h8v232h-8zM176 178.332h8v184h-8z"
        style={{
          fill: "#1c2a33",
        }}
      />
      <path
        d="M348 146.332v140c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16v-112c0-16 12-28 28-28h144z"
        style={{
          fill: "#1c2a33",
        }}
      />
      <path
        d="M348 90.332c0-4-4-8-8-8H136c-13.2 0-24 10.8-24 24s10.8 24 24 24h212v-40z"
        style={{
          fill: "#406a80",
        }}
      />
      <path
        d="M152 82.332h8v48h-8z"
        style={{
          fill: "#395f73",
        }}
      />
      <path
        d="M136 130.332h16v-48h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24z"
        style={{
          fill: "#e66356",
        }}
      />
      <path
        d="M136 122.332c-8.672 0-16-7.328-16-16s7.328-16 16-16h212v32H136z"
        style={{
          fill: "#f5f5f5",
        }}
      />
      <path
        d="M136 362.332h16v-232h-16c-13.2 0-24-10.8-24-24v232c0 13.2 10.8 24 24 24z"
        style={{
          fill: "#cc584c",
        }}
      />
      <path
        d="M212 234.32h80v8h-80z"
        style={{
          fill: "#f5f5f5",
        }}
      />
      <path
        d="M192 234.32h104v8H192z"
        style={{
          fill: "#f5f5f5",
        }}
      />
      <path
        d="M184 178.332c0 13.2 10.8 24 24 24h200v224c0 4-4 8-8 8-52-.024-192 0-192 0-13.2 0-24-10.8-24-24v-232z"
        style={{
          fill: "#233540",
        }}
      />
      <path
        d="M224 202.332h8v232h-8z"
        style={{
          fill: "#1c2a33",
        }}
      />
      <path
        d="M408 162.332c0-4-4-8-8-8H208c-13.2 0-24 10.8-24 24s10.8 24 24 24h200v-40z"
        style={{
          fill: "#406a80",
        }}
      />
      <path
        d="M224 154.332h8v48h-8z"
        style={{
          fill: "#395f73",
        }}
      />
      <path
        d="M208 202.332h16v-48h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24z"
        style={{
          fill: "#e66356",
        }}
      />
      <path
        d="M208 194.332c-8.672 0-16-7.328-16-16s7.328-16 16-16h200v32H208z"
        style={{
          fill: "#f5f5f5",
        }}
      />
      <path
        d="M208 434.332h16v-232h-16c-13.2 0-24-10.8-24-24v232c0 13.2 10.8 24 24 24z"
        style={{
          fill: "#cc584c",
        }}
      />
      <path
        d="M284 290.32h64v8h-64zM264 306.32h104v8H264z"
        style={{
          fill: "#f5f5f5",
        }}
      />
    </svg>
  ),
  Computer: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={
        {
          enableBackground: "new 0 0 512 512",
        } as React.CSSProperties
      }
      viewBox="0 0 512 512"
      {...props}
    >
      <circle
        cx={256}
        cy={256}
        r={256}
        style={{
          fill: "#263a7a",
        }}
      />
      <path
        d="m116.815 326.68 181.774 181.774C419.699 488.17 512 382.873 512 256c0-10.23-.619-20.313-1.786-30.23L394.002 109.778 116.815 326.68z"
        style={{
          fill: "#121149",
        }}
      />
      <path
        d="M213.333 326.68h85.333v56.889h-85.333z"
        style={{
          fill: "#e2e2e2",
        }}
      />
      <path
        d="M255.431 326.68h43.236v56.889h-43.236z"
        style={{
          fill: "#a8a8a8",
        }}
      />
      <path
        d="M383.138 332.714H128.862c-8.33 0-15.084-6.753-15.084-15.084V120.242c0-8.33 6.753-15.084 15.084-15.084h254.276c8.33 0 15.084 6.753 15.084 15.084V317.63c0 8.331-6.754 15.084-15.084 15.084z"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M383.138 105.158H255.426v227.556h127.712c8.33 0 15.084-6.753 15.084-15.084V120.242c0-8.331-6.752-15.084-15.084-15.084z"
        style={{
          fill: "#e2e2e2",
        }}
      />
      <path
        d="M125.845 118.627h260.31v162.685h-260.31z"
        style={{
          fill: "#ffc61b",
        }}
      />
      <path
        d="M255.431 118.627H386.16v162.685H255.431z"
        style={{
          fill: "#d19809",
        }}
      />
      <path
        d="M142.222 133.603h227.556v56.889H142.222z"
        style={{
          fill: "#ff5419",
        }}
      />
      <path
        d="M255.431 133.603h114.347v56.889H255.431z"
        style={{
          fill: "#940030",
        }}
      />
      <path
        d="M284.444 204.283h85.333v56.889h-85.333z"
        style={{
          fill: "#ffedb5",
        }}
      />
      <path
        d="M316.768 398.222H195.232c-5.713 0-10.343-4.63-10.343-10.343s4.63-10.343 10.343-10.343h121.535c5.713 0 10.343 4.63 10.343 10.343.001 5.713-4.629 10.343-10.342 10.343z"
        style={{
          fill: "#a8a8a8",
        }}
      />
      <path
        d="M316.768 377.535h-61.342v20.687h61.342c5.713 0 10.343-4.63 10.343-10.343s-4.63-10.344-10.343-10.344z"
        style={{
          fill: "#7f7f7f",
        }}
      />
      <circle
        cx={256}
        cy={305.131}
        r={7.758}
        style={{
          fill: "#a8a8a8",
        }}
      />
      <path
        d="M256 297.374c-.197 0-.381.043-.574.059v15.4c.193.014.378.059.574.059a7.759 7.759 0 0 0 0-15.518z"
        style={{
          fill: "#a8a8a8",
        }}
      />
    </svg>
  ),
};
