import type { ReactNode } from 'react'
import ScrollReveal from './ScrollReveal'

type SkillItem = {
  name: string
  description: string
  icon: ReactNode
  accent: string
}

type SkillGroup = {
  title: string
  items: SkillItem[]
  reverse?: boolean
}

/* SVG Icons */
const Icons = {
  HTML5: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
      <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
    </svg>
  ),
  CSS3: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
      <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" fill="#f7df1e" rx="3"/>
      <path d="M19.5 24.5c.5.9 1.2 1.5 2.4 1.5 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.8-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.7-.9-1-1.6-1-.7 0-1.2.5-1.2 1 0 .7.5 1 1.5 1.5l.6.3c2.1.9 3.3 1.9 3.3 3.9 0 2.3-1.8 3.5-4.2 3.5-2.3 0-3.8-1.1-4.6-2.6l2.3-1.1zM10.5 24.7c.4.6.7 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.5v-8.2h2.5v8.3c0 2.5-1.4 3.6-3.5 3.6-1.9 0-3-1-3.5-2.2l1.8-1.2z" fill="#323330"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" fill="#3178c6" rx="3"/>
      <path d="M18 17h-3.5v9.5H12V17H8.5v-2.5H18V17zM19 24.3v-2.7c.7.6 1.8 1.1 2.8 1.1 1.3 0 1.9-.5 1.9-1.2 0-.7-.5-1-1.8-1.5l-.5-.2c-1.7-.7-2.8-1.7-2.8-3.6 0-2 1.5-3.2 3.7-3.2 1.4 0 2.4.4 3.2 1.1L25 16.5c-.6-.5-1.4-.8-2.2-.8-1 0-1.6.4-1.6 1.1 0 .7.5 1 1.6 1.4l.5.2c2 .9 3.1 1.8 3.1 3.7 0 2.2-1.7 3.4-4 3.4-1.6.1-2.9-.4-3.4-1.2z" fill="white"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="2.5" fill="#61dafb"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  NextJS: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Next.js icon</title>
      <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" />
    </svg>
  ),
  Vue: (
    <svg viewBox="0 0 261 226" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
      <path fill="#41B883" d="M161 0L130.5 52.4L100 0H0L130.5 226.7L261 0z"/>
      <path fill="#34495E" d="M161 0L130.5 52.4L100 0H52.3L130.5 136.1L208.7 0z"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 7c-3.5 0-5.7 1.75-6.7 5.25C10.6 10.5 11.95 9.875 13.5 10.25c.86.22 1.48.84 2.16 1.53C16.84 12.99 18.22 14.5 21 14.5c3.5 0 5.7-1.75 6.7-5.25-1.3 1.75-2.65 2.375-4.2 2-.86-.22-1.48-.84-2.16-1.53C20.16 8.51 18.78 7 16 7zM9.3 14.5C5.8 14.5 3.6 16.25 2.6 19.75c1.3-1.75 2.65-2.375 4.2-2 .86.22 1.48.84 2.16 1.53 1.18 1.21 2.56 2.72 5.34 2.72 3.5 0 5.7-1.75 6.7-5.25-1.3 1.75-2.65 2.375-4.2 2-.86-.22-1.48-.84-2.16-1.53C13.46 16.01 12.08 14.5 9.3 14.5z" fill="#38bdf8"/>
    </svg>
  ),
  FramerMotion: (
    <svg viewBox="0 0 14 21" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0055FF" d="M0 0h14v7H0z"/>
      <path fill="#0055FF" fillOpacity="0.75" d="M0 7h7l7 7H0z"/>
      <path fill="#0055FF" fillOpacity="0.5" d="M0 14h7L0 21z"/>
    </svg>
  ),
  GSAP: (
    <svg width="30" height="30" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="120" rx="13" fill="#1c1c1c"/>
      <text x="12" y="88" fontFamily="Arial Black, Impact, sans-serif" fontSize="95" fontWeight="900" letterSpacing="-4" fill="#00ff9f">GSAP</text>
      <path d="M12 98 Q80 88 140 98 Q200 88 268 98" stroke="#00ff9f" strokeWidth="9" strokeLinecap="round" opacity="0.85"/>
      <path d="M15 94 Q75 87 138 94" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  Zustand: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="6" fill="#433E38"/>
      {/* ears */}
      <circle cx="10" cy="9" r="4" fill="#C8A96E"/>
      <circle cx="22" cy="9" r="4" fill="#C8A96E"/>
      <circle cx="10" cy="9" r="2.5" fill="#433E38"/>
      <circle cx="22" cy="9" r="2.5" fill="#433E38"/>
      {/* face */}
      <ellipse cx="16" cy="19" rx="9" ry="8" fill="#C8A96E"/>
      {/* snout */}
      <ellipse cx="16" cy="21.5" rx="4.5" ry="3" fill="#D4B483"/>
      {/* eyes */}
      <circle cx="12.5" cy="17" r="1.5" fill="#433E38"/>
      <circle cx="19.5" cy="17" r="1.5" fill="#433E38"/>
      {/* eye shine */}
      <circle cx="13" cy="16.5" r="0.5" fill="white"/>
      <circle cx="20" cy="16.5" r="0.5" fill="white"/>
      {/* nose */}
      <ellipse cx="16" cy="20.5" rx="1.5" ry="1" fill="#433E38"/>
    </svg>
  ),
  TanStackQuery: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="6" fill="#FF4154"/>
      <circle cx="14" cy="14" r="7" stroke="white" strokeWidth="2.5" fill="none"/>
      <line x1="19.2" y1="19.2" x2="26" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="10" y1="14" x2="18" y2="14" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="14" y1="10" x2="14" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  NodeJS: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#497718"/>
        <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#497718"/>
      </g>
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="14" fill="#009688"/>
      <path d="M17.5 5L8 18.5h8.5L15 27L25 13.5h-8.5L17.5 5z" fill="white"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 2C13 5.5 9 11 9 17c0 4.8 2.8 9 7 10.8V30h2v-2.2C22.2 26 25 21.8 25 17c0-6-4-11.5-7-14c-0.6-.7-1.4-.7-2 0z" fill="#00ED64"/>
      <path d="M15 27.8V30h2v-2.2C16.7 27.9 16.3 27.9 15 27.8z" fill="#B8C4BE"/>
      <path d="M16 6c-1.5 2.5-5 7.5-5 11 0 3 1.5 5.7 4 7.3V8c.2-.7.6-1.5 1-2z" fill="#00C04B" fillOpacity="0.4"/>
    </svg>
  ),
  DiscordJS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M25.5 6.5A22.8 22.8 0 0020 5a16 16 0 00-.7 1.5 21 21 0 00-6.6 0A16 16 0 0012 5a22.9 22.9 0 00-5.5 1.5C3.7 11.5 3 16.4 3.2 21.2a23 23 0 007 3.6 17 17 0 001.5-2.4 15 15 0 01-2.4-1.1l.6-.5a16.5 16.5 0 0014.3 0l.6.5a15 15 0 01-2.4 1.1c.4.8 1 1.6 1.5 2.4a23 23 0 007-3.6c.3-5.4-1-10.3-3.4-14.7zM12 18.4c-1.4 0-2.6-1.3-2.6-2.9s1.1-2.9 2.6-2.9 2.6 1.3 2.6 2.9-1.1 2.9-2.6 2.9zm8 0c-1.4 0-2.6-1.3-2.6-2.9s1.1-2.9 2.6-2.9 2.6 1.3 2.6 2.9-1.1 2.9-2.6 2.9z" fill="#5865f2"/>
    </svg>
  ),
  Nodemailer: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect x="2" y="7" width="28" height="18" rx="2.5" fill="#339933"/>
      <path d="M2 9.5L16 19 30 9.5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <line x1="2" y1="25" x2="11.5" y2="17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="30" y1="25" x2="20.5" y2="17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Git: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"/>
      <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2a14 14 0 00-4.4 27.3c.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9a3.7 3.7 0 00-1.5-2c-1.2-.8.1-.8.1-.8a3 3 0 012.1 1.4 3 3 0 004 1.1 3 3 0 01.9-1.9c-3.1-.4-6.4-1.6-6.4-7a5.4 5.4 0 011.5-3.8 5.1 5.1 0 01.1-3.7s1.2-.4 3.9 1.5a13.3 13.3 0 017 0c2.7-1.9 3.9-1.5 3.9-1.5a5.1 5.1 0 01.2 3.7 5.4 5.4 0 011.4 3.8c0 5.4-3.3 6.6-6.4 7a3.3 3.3 0 011 2.6v3.8c0 .4.2.8 1 .7A14 14 0 0016 2z" fill="#1b1f23"/>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 5L29 27H3L16 5z" fill="black"/>
    </svg>
  ),
  VPS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect x="4" y="5" width="24" height="8" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
      <rect x="4" y="15" width="24" height="8" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
      <circle cx="8.5" cy="9" r="1.5" fill="#22c55e"/>
      <circle cx="8.5" cy="19" r="1.5" fill="#22c55e"/>
      <line x1="13" y1="9" x2="22" y2="9" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="19" x2="22" y2="19" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  VSCode: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" fill="url(#vscode-p0)"/>
      <path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" fill="url(#vscode-p1)"/>
      <path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" fill="url(#vscode-p2)"/>
      <defs>
        <linearGradient id="vscode-p0" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#32B5F1"/><stop offset="1" stopColor="#2B9FED"/></linearGradient>
        <linearGradient id="vscode-p1" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse"><stop stopColor="#0F6FB3"/><stop offset="0.270551" stopColor="#1279B7"/><stop offset="0.421376" stopColor="#1176B5"/><stop offset="0.618197" stopColor="#0E69AC"/><stop offset="0.855344" stopColor="#0F70AF"/><stop offset="1" stopColor="#0F6DAD"/></linearGradient>
        <linearGradient id="vscode-p2" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse"><stop stopColor="#1791D2"/><stop offset="1" stopColor="#1173C5"/></linearGradient>
      </defs>
    </svg>
  ),
  Cursor: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Cursor</title>
      <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <defs>
        <linearGradient id="vite-a" x1="6" y1="0" x2="26" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF"/>
          <stop offset="1" stopColor="#BD34FE"/>
        </linearGradient>
        <linearGradient id="vite-b" x1="10" y1="10" x2="22" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3CAC"/>
          <stop offset="1" stopColor="#FFD62E"/>
        </linearGradient>
      </defs>
      <path d="M29 3L16.1 27.5 3 3h7.8L16 13.7 21.1 3z" fill="url(#vite-a)"/>
      <path d="M10.8 3L16 13.7 21.1 3h-3.5L16 6.8 14.4 3z" fill="url(#vite-b)"/>
    </svg>
  ),
  OpenAI: (
    <svg fill="#000000" width="26" height="26" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  ),
  Claude: (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 640 640" fill="none">
      <path fill="rgb(211, 94, 0)" d="M164.4 404.5L265.1 348L266.8 343.1L265.1 340.4L260.2 340.4L243.4 339.4L185.9 337.8L136 335.7L87.7 333.1L75.5 330.5L64.1 315.5L65.3 308L75.5 301.1L90.2 302.4C109.1 303.7 136.1 305.5 171.2 308L206.4 310.1L258.6 315.5L266.9 315.5L268.1 312.1L265.3 310L263.1 307.9L212.8 273.8L158.4 237.8L129.9 217.1L114.5 206.6L106.7 196.8L103.3 175.3L117.3 159.9L136.1 161.2L140.9 162.5L159.9 177.2L200.6 208.7L253.7 247.8L261.5 254.3L264.6 252.1L265 250.5L261.5 244.7L232.6 192.5L201.8 139.4L188.1 117.4L184.5 104.2C183.2 98.8 182.3 94.2 182.3 88.7L198.2 67.1L207 64.3L228.2 67.1L237.1 74.9L250.3 105.1L271.7 152.6L304.9 217.2L314.6 236.4L319.8 254.2L321.7 259.6L325.1 259.6L325.1 256.5L327.8 220.1L332.8 175.4L337.7 117.9L339.4 101.7L347.4 82.3L363.3 71.8L375.7 77.7L385.9 92.4L384.5 101.9L378.4 141.4L366.5 203.3L358.7 244.8L363.2 244.8L368.4 239.6L389.4 211.8L424.6 167.7L440.1 150.2L458.2 130.9L469.8 121.7L491.8 121.7L508 145.8L500.7 170.7L478 199.4L459.2 223.8L432.2 260.1L415.4 289.1L417 291.4L421 291L481.9 278L514.8 272.1L554.1 265.4L571.9 273.7L573.8 282.1L566.8 299.3L524.8 309.7L475.6 319.5L402.3 336.8L401.4 337.5L402.4 338.8L435.4 341.9L449.5 342.7L484.1 342.7L548.5 347.5L565.3 358.6L575.4 372.2L573.7 382.6L547.8 395.8C532.3 392.1 493.4 382.9 431.2 368.1L403.2 361.1L399.3 361.1L399.3 363.4L422.6 386.2L465.3 424.8L518.8 474.6L521.5 486.9L514.6 496.6L507.3 495.6L460.3 460.2L442.2 444.3L401.1 409.7L398.4 409.7L398.4 413.3L407.9 427.2L457.9 502.4L460.5 525.4L456.9 532.9L443.9 537.4L429.7 534.8L400.4 493.7L370.2 447.4L345.8 405.9L342.8 407.6L328.4 562.4L321.7 570.3L306.2 576.2L293.2 566.4L286.3 550.5L293.2 519L301.5 477.9L308.2 445.2L314.3 404.6L317.9 391.1L317.7 390.2L314.7 390.6L284.1 432.6L237.6 495.5L200.8 534.9L192 538.4L176.7 530.5L178.1 516.4L186.6 503.8L237.5 439L268.2 398.8L288 375.6L287.9 372.2L286.7 372.2L151.4 460L127.3 463.1L116.9 453.4L118.2 437.5L123.1 432.3L163.8 404.3L163.7 404.4L163.7 404.5z"/>
    </svg>
  ),
  Gemini: (
    <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <title>Gemini</title>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="#3186FF"/>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#gem-g0)"/>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#gem-g1)"/>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#gem-g2)"/>
      <defs>
        <linearGradient id="gem-g0" x1="7" y1="15.5" x2="11" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#08B962"/><stop offset="1" stopColor="#08B962" stopOpacity="0"/></linearGradient>
        <linearGradient id="gem-g1" x1="8" y1="5.5" x2="11.5" y2="11" gradientUnits="userSpaceOnUse"><stop stopColor="#F94543"/><stop offset="1" stopColor="#F94543" stopOpacity="0"/></linearGradient>
        <linearGradient id="gem-g2" x1="3.5" y1="13.5" x2="17.5" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#FABC12"/><stop offset=".46" stopColor="#FABC12" stopOpacity="0"/></linearGradient>
      </defs>
    </svg>
  ),
}

const ExtraIcons = {
  PromptEngineering: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect x="3" y="7" width="26" height="18" rx="3" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
      <path d="M8 12l4 4-4 4" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="15" y1="20" x2="24" y2="20" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  AIWorkflow: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="7" cy="16" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="8" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none"/>
      <circle cx="25" cy="16" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="24" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none"/>
      <line x1="10" y1="14.5" x2="13" y2="10.5" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="19" y1="10.5" x2="22" y2="14.5" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="22" y1="17.5" x2="19" y2="21.5" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="13" y1="21.5" x2="10" y2="17.5" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Automation: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="4" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
}

const groups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'TypeScript',    description: 'Used across all production projects for end-to-end type safety.',      icon: Icons.TypeScript,   accent: '#3178c6' },
      { name: 'JavaScript',    description: 'Powering interactive experiences and application logic.',              icon: Icons.JavaScript,   accent: '#f7df1e' },
      { name: 'React',         description: 'Building reusable components and scalable UI architectures.',          icon: Icons.React,        accent: '#61dafb' },
      { name: 'Next.js',       description: 'Developing full-stack applications with SSR and modern React.',        icon: Icons.NextJS,       accent: '#000000' },
      { name: 'Tailwind CSS',  description: 'Designing fast, consistent interfaces with utility-first CSS.',        icon: Icons.Tailwind,     accent: '#38bdf8' },
      { name: 'Framer Motion', description: 'Crafting smooth page transitions and scroll-driven animations.',       icon: Icons.FramerMotion, accent: '#0055FF' },
    ],
  },
  {
    title: 'Backend & Product Engineering',
    reverse: true,
    items: [
      { name: 'Node.js',    description: 'Building RESTful APIs, automations, and serverless backend logic.',  icon: Icons.NodeJS,    accent: '#339933' },
      { name: 'FastAPI',    description: 'High-performance Python REST APIs with automatic documentation.',    icon: Icons.FastAPI,   accent: '#009688' },
      { name: 'MongoDB',    description: 'Flexible NoSQL database for scalable document storage.',            icon: Icons.MongoDB,   accent: '#00ED64' },
      { name: 'Discord.js', description: 'Building full-featured Discord bots with the v14 API.',            icon: Icons.DiscordJS, accent: '#5865f2' },
      { name: 'Git',        description: 'Version control, branching strategy, and collaborative workflows.', icon: Icons.Git,       accent: '#f05032' },
      { name: 'GitHub',     description: 'Code hosting, pull requests, Actions CI/CD, and team collaboration.', icon: Icons.GitHub,  accent: '#1b1f23' },
      { name: 'Vercel',     description: 'Deploying and managing production web applications at scale.',      icon: Icons.Vercel,    accent: '#000000' },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { name: 'OpenAI API',          description: 'Integrating GPT models for conversational AI and intelligent automation.',    icon: Icons.OpenAI,             accent: '#10a37f' },
      { name: 'Claude API',          description: 'Long-form reasoning, research workflows, and agentic task orchestration.',   icon: Icons.Claude,             accent: '#cc785c' },
      { name: 'Gemini API',          description: 'Multimodal and agentic AI workflows powered by Google Gemini.',              icon: Icons.Gemini,             accent: '#4285f4' },
      { name: 'Prompt Engineering',  description: 'Crafting structured prompts for reliable, high-quality model outputs.',      icon: ExtraIcons.PromptEngineering, accent: '#7c3aed' },
      { name: 'AI Workflow',         description: 'Designing multi-step AI pipelines that connect models to real-world actions.', icon: ExtraIcons.AIWorkflow,  accent: '#0ea5e9' },
      { name: 'Automation',          description: 'Building scripts and bots that reduce repetitive work across systems.',      icon: ExtraIcons.Automation,    accent: '#f59e0b' },
    ],
  },
]

const SkillCard = ({ skill }: { skill: SkillItem }) => (
  <article
    className="skill-card group w-[clamp(220px,78vw,286px)] shrink-0 rounded-2xl border border-[#ece4e1] bg-white/90 p-4 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:w-[286px]"
  >
    <div className="flex items-start gap-4">
      <div
        className="skill-icon-wrap shrink-0 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-[1.06]"
        style={{ backgroundColor: `${skill.accent}14`, border: `1.5px solid ${skill.accent}30` }}
      >
        {skill.icon}
      </div>
      <div className="min-w-0">
        <h3 className="font-sans text-sm font-semibold tracking-wide text-gray-900">
          {skill.name}
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          {skill.description}
        </p>
      </div>
    </div>
  </article>
)

// Each card is ~302px wide (286px + 16px gap).
// The CSS marquee animates translateX(-50%), so it scrolls exactly one
// "half-set" worth of pixels per loop. To prevent cut-off we ensure the
// half-set is always wider than the viewport (min 8 cards). Duration is
// derived from half-set pixel width at a fixed scroll speed so every row
// moves at the same visual pace regardless of item count.
const CARD_PX    = 302  // card width + gap (px)
const PX_PER_SEC = 50   // target scroll speed

const MarqueeRow = ({ title, items, reverse = false }: SkillGroup) => {
  const repeatsPerHalf = Math.max(1, Math.ceil(8 / items.length))
  const halfSet        = Array.from({ length: repeatsPerHalf }, () => items).flat()
  const duration       = `${Math.round((halfSet.length * CARD_PX) / PX_PER_SEC)}s`

  return (
    <div className="skill-row mt-0 rounded-[28px] bg-[#fffdfd] px-3 shadow-[0_8px_24px_rgba(17,24,39,0.03)] sm:px-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="section-label !mb-1 sm:text-[1rem]">{title}</p>
          <div className="h-0.5 w-10 rounded-full bg-burgundy" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#fffdfd] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#fffdfd] to-transparent sm:w-20" />
        <div
          className={`marquee-track ${reverse ? 'reverse' : ''}`}
          style={{ animationDuration: duration }}
        >
          {[...halfSet, ...halfSet].map((skill, index) => (
            <SkillCard key={`${title}-${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal direction="down" className="mb-10">
          <div>
            <p className="section-label sm:text-[1.2rem]">My Skills</p>
            <h2 className="section-heading sm:text-[3rem]">Tech Stack &amp; Expertise</h2>
            <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
            <p className="mt-4 max-w-2xl font-sans text-[1rem] leading-7 text-gray-500 sm:text-[1.1rem]">
              I use modern web technologies to build responsive interfaces, scalable products, and efficient workflows.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" className="scroll-reveal-stagger space-y-5">
          {groups.map((group) => (
            <MarqueeRow key={group.title} {...group} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}