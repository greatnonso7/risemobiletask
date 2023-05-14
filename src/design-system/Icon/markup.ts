export const getMarkup: any = (color?: string) => {
  return {
    eyeClose: `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0963 15.6616C18.3508 15.9287 18.758 15.9459 19.021 15.6616C19.2925 15.3773 19.2755 14.9896 19.021 14.7225L4.83585 0.325448C4.58134 0.0669732 4.15714 0.0669732 3.90262 0.325448C3.65658 0.575306 3.65658 1.01471 3.90262 1.26457L18.0963 15.6616ZM18.9023 13.1716C21.3796 11.5088 23 9.22559 23 8.2003C23 6.45129 18.2914 0.87686 11.5042 0.87686C10.062 0.87686 8.70454 1.12672 7.47436 1.54028L9.68019 3.78039C10.2401 3.53915 10.851 3.40129 11.5042 3.40129C14.1258 3.40129 16.2468 5.51217 16.2468 8.2003C16.2468 8.85511 16.1025 9.48406 15.848 10.0355L18.9023 13.1716ZM11.5042 15.5238C13.0738 15.5238 14.533 15.2308 15.8141 14.7483L13.5913 12.491C12.9635 12.8184 12.2508 12.9993 11.5042 12.9993C8.85725 12.9993 6.76171 10.8195 6.75323 8.2003C6.75323 7.42488 6.93139 6.69254 7.2453 6.04635L4.34378 3.08251C1.67134 4.77983 0 7.16641 0 8.2003C0 9.9407 4.79343 15.5238 11.5042 15.5238ZM14.2021 8.01937C14.2021 6.5116 13.0059 5.28816 11.5042 5.28816C11.394 5.28816 11.2837 5.29677 11.1819 5.30539L14.1852 8.35539C14.1937 8.252 14.2021 8.13138 14.2021 8.01937ZM8.79786 8.00214C8.79786 9.51853 10.028 10.742 11.5127 10.742C11.6315 10.742 11.7418 10.7334 11.8606 10.7247L8.81483 7.63166C8.80634 7.75228 8.79786 7.88152 8.79786 8.00214Z" fill="#0898A0"/>
    </svg>
  `,
    eyeOpen: `<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z" fill="#0898A0"/>
</svg>
  `,
    radio: `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="15" height="15" rx="7.5" stroke="#0898A0"/>
</svg>
`,
    radioActive: `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="15" height="15" rx="7.5" fill="#0898A0"/>
<path d="M5 8.5L7 10.5L11 6.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="1" width="15" height="15" rx="7.5" stroke="#0898A0"/>
</svg>
`,
    calendarIcon: `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.58248 16H15.4175C17.1295 16 18 15.13 18 13.4752V2.51537C18 0.869976 17.1295 0 15.4175 0H2.58248C0.880172 0 0 0.851064 0 2.51537V13.4752C0 15.1395 0.880172 16 2.58248 16ZM2.53412 15.0827C1.48952 15.0827 0.928533 14.5437 0.928533 13.5035V5.48463C0.928533 4.44444 1.48952 3.90544 2.53412 3.90544H15.4562C16.4815 3.90544 17.0715 4.44444 17.0715 5.48463V13.5035C17.0715 14.5437 16.4815 15.0827 15.4562 15.0827H2.53412ZM7.16711 7.05437H7.69909C7.96991 7.05437 8.02794 6.99764 8.02794 6.74232V6.21277C8.02794 5.9669 7.96991 5.91017 7.69909 5.91017H7.16711C6.89629 5.91017 6.83826 5.9669 6.83826 6.21277V6.74232C6.83826 6.99764 6.89629 7.05437 7.16711 7.05437ZM10.3009 7.05437H10.8329C11.1037 7.05437 11.1617 6.99764 11.1617 6.74232V6.21277C11.1617 5.9669 11.1037 5.91017 10.8329 5.91017H10.3009C10.0301 5.91017 9.97206 5.9669 9.97206 6.21277V6.74232C9.97206 6.99764 10.0301 7.05437 10.3009 7.05437ZM13.425 7.05437H13.9667C14.2278 7.05437 14.2955 6.99764 14.2955 6.74232V6.21277C14.2955 5.9669 14.2278 5.91017 13.9667 5.91017H13.425C13.1639 5.91017 13.0962 5.9669 13.0962 6.21277V6.74232C13.0962 6.99764 13.1639 7.05437 13.425 7.05437ZM4.03332 10.0709H4.57496C4.83611 10.0709 4.90381 10.0142 4.90381 9.75887V9.22931C4.90381 8.974 4.83611 8.91726 4.57496 8.91726H4.03332C3.77217 8.91726 3.70446 8.974 3.70446 9.22931V9.75887C3.70446 10.0142 3.77217 10.0709 4.03332 10.0709ZM7.16711 10.0709H7.69909C7.96991 10.0709 8.02794 10.0142 8.02794 9.75887V9.22931C8.02794 8.974 7.96991 8.91726 7.69909 8.91726H7.16711C6.89629 8.91726 6.83826 8.974 6.83826 9.22931V9.75887C6.83826 10.0142 6.89629 10.0709 7.16711 10.0709ZM10.3009 10.0709H10.8329C11.1037 10.0709 11.1617 10.0142 11.1617 9.75887V9.22931C11.1617 8.974 11.1037 8.91726 10.8329 8.91726H10.3009C10.0301 8.91726 9.97206 8.974 9.97206 9.22931V9.75887C9.97206 10.0142 10.0301 10.0709 10.3009 10.0709ZM13.425 10.0709H13.9667C14.2278 10.0709 14.2955 10.0142 14.2955 9.75887V9.22931C14.2955 8.974 14.2278 8.91726 13.9667 8.91726H13.425C13.1639 8.91726 13.0962 8.974 13.0962 9.22931V9.75887C13.0962 10.0142 13.1639 10.0709 13.425 10.0709ZM4.03332 13.078H4.57496C4.83611 13.078 4.90381 13.0213 4.90381 12.766V12.2459C4.90381 11.9905 4.83611 11.9338 4.57496 11.9338H4.03332C3.77217 11.9338 3.70446 11.9905 3.70446 12.2459V12.766C3.70446 13.0213 3.77217 13.078 4.03332 13.078ZM7.16711 13.078H7.69909C7.96991 13.078 8.02794 13.0213 8.02794 12.766V12.2459C8.02794 11.9905 7.96991 11.9338 7.69909 11.9338H7.16711C6.89629 11.9338 6.83826 11.9905 6.83826 12.2459V12.766C6.83826 13.0213 6.89629 13.078 7.16711 13.078ZM10.3009 13.078H10.8329C11.1037 13.078 11.1617 13.0213 11.1617 12.766V12.2459C11.1617 11.9905 11.1037 11.9338 10.8329 11.9338H10.3009C10.0301 11.9338 9.97206 11.9905 9.97206 12.2459V12.766C9.97206 13.0213 10.0301 13.078 10.3009 13.078Z" fill="#0898A0"/>
</svg>
`,

    goodTick: `<svg width="39" height="26" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.36469 14.6629L12.4983 23.3704L36.6355 2.62939" stroke="#0898A0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,

    arrowDropDown: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.25L12 15.25L18 9.25" stroke="#8B9EAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    arrowRight: `<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5011 1.5L5.5011 6L1.5011 10.5" stroke="#71879C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    questionMark: `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.07354 11.4719C4.56379 11.4719 4.79554 11.1331 4.79554 10.6786V10.2596C4.81337 9.10084 5.21448 8.59276 6.5961 7.639C8.09359 6.60501 8.9493 5.50864 8.9493 3.93092C8.9493 1.48858 6.96156 0 4.44791 0C2.54039 0 0.900279 0.971588 0.222841 2.6117C0.0623955 2.99499 0 3.36045 0 3.6546C0 4.06462 0.231755 4.34095 0.668524 4.34095C1.03398 4.34095 1.27465 4.12702 1.38162 3.77047C1.77382 2.09471 2.92368 1.33705 4.40334 1.33705C6.12368 1.33705 7.47855 2.3532 7.47855 3.93092C7.47855 5.13426 6.75655 5.85627 5.57994 6.69415C4.19833 7.67465 3.3337 8.61059 3.3337 10.0813V10.6964C3.3337 11.151 3.58329 11.4719 4.07354 11.4719ZM4.08245 16C4.67075 16 5.14318 15.5187 5.14318 14.9393C5.14318 14.3599 4.67075 13.8875 4.08245 13.8875C3.50306 13.8875 3.03064 14.3599 3.03064 14.9393C3.03064 15.5187 3.50306 16 4.08245 16Z" fill="#0898A0"/>
</svg>
`,
    riseIcon: `<svg width="81" height="26" viewBox="0 0 81 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.60757 10.4332L5.43092 1.73373H0.220093V24.5201H5.60757V15.5557C5.74004 8.62262 8.38961 6.37048 15.4993 5.92888V1.38045C9.14032 1.38045 6.79987 3.80923 5.7842 10.4332H5.60757Z" fill="#71879C" fill-opacity="0.2"/>
<path d="M17.936 24.5201H23.3235V1.73373H17.936V24.5201Z" fill="#71879C" fill-opacity="0.2"/>
<path d="M37.2768 25.2266C43.7241 25.2266 47.5219 22.577 47.5219 18.1169C47.5219 14.7166 45.358 12.7736 40.8979 11.8021L34.8922 10.5215C32.9934 10.0799 31.9335 9.10837 31.9335 7.8719C31.9335 6.06136 33.7441 4.95737 36.7469 4.95737C40.0589 4.95737 42.0019 6.54712 42.0019 9.15253H47.1686C47.1686 4.03002 43.2384 1.02718 36.5703 1.02718C30.4763 1.02718 26.6344 3.76506 26.6344 8.00438C26.6344 11.4488 29.1515 13.6126 33.3025 14.4517L39.0432 15.6881C41.3837 16.2181 42.1786 16.9688 42.1786 18.3377C42.1786 20.1924 40.3238 21.2964 37.321 21.2964C33.6558 21.2964 31.5803 19.795 31.4036 17.1012H26.1045C26.2811 22.3121 30.2555 25.2266 37.2768 25.2266Z" fill="#71879C" fill-opacity="0.2"/>
<path d="M71.9562 12.3762C71.9562 6.10552 67.6728 1.02718 60.6955 1.02718C53.6742 1.02718 49.0374 5.61977 49.0374 13.0386C49.0374 21.0756 53.7625 25.2266 60.9605 25.2266C66.0389 25.2266 71.073 22.1796 71.7796 16.5713H66.8779C66.3038 19.1326 64.14 21.0314 60.9605 21.0314C57.0745 21.0314 54.3366 18.5585 54.2041 14.1426H71.9562V12.3762ZM60.4748 5.22233C64.0517 5.22233 66.3921 7.43031 66.6571 11.0955H54.2041C54.4691 7.20951 57.1186 5.22233 60.4748 5.22233Z" fill="#71879C" fill-opacity="0.2"/>
<path d="M80.7799 4.40779C80.7799 6.33956 79.2139 7.90557 77.2821 7.90557C75.3503 7.90557 73.7843 6.33956 73.7843 4.40779C73.7843 2.47602 75.3503 0.910004 77.2821 0.910004C79.2139 0.910004 80.7799 2.47602 80.7799 4.40779Z" fill="#71879C" fill-opacity="0.2"/>
</svg>
`,
    shareIcon: `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.34C12.11 16.55 12.08 16.77 12.08 17C12.08 18.61 13.39 19.91 15 19.91C16.61 19.91 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18C14.45 18 14 17.55 14 17C14 16.45 14.45 16 15 16C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18Z" fill="white"/>
</svg>
`,

    addIcon: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2195 9.74893V17.6659H8.78006V9.74893H0.863098V8.30948H8.78006V0.392517L10.2195 0.392517V8.30948H18.1365V9.74893H10.2195Z" fill="#41BCC4"/>
</svg>
`,

    infoIcon: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7.40918H11V5.40918H9V7.40918ZM10 18.4092C5.59 18.4092 2 14.8192 2 10.4092C2 5.99918 5.59 2.40918 10 2.40918C14.41 2.40918 18 5.99918 18 10.4092C18 14.8192 14.41 18.4092 10 18.4092ZM10 0.40918C8.68678 0.40918 7.38642 0.667837 6.17317 1.17038C4.95991 1.67293 3.85752 2.40953 2.92893 3.33811C1.05357 5.21348 0 7.75701 0 10.4092C0 13.0613 1.05357 15.6049 2.92893 17.4802C3.85752 18.4088 4.95991 19.1454 6.17317 19.648C7.38642 20.1505 8.68678 20.4092 10 20.4092C12.6522 20.4092 15.1957 19.3556 17.0711 17.4802C18.9464 15.6049 20 13.0613 20 10.4092C20 9.09596 19.7413 7.7956 19.2388 6.58235C18.7362 5.36909 17.9997 4.2667 17.0711 3.33811C16.1425 2.40953 15.0401 1.67293 13.8268 1.17038C12.6136 0.667837 11.3132 0.40918 10 0.40918ZM9 15.4092H11V9.40918H9V15.4092Z" fill="#0898A0"/>
</svg>
`,

    infoIconHelp: `<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50232 9.5C6.96235 9.5 9 7.46235 9 4.99768C9 2.53765 6.95771 0.5 4.49768 0.5C2.03765 0.5 0 2.53765 0 4.99768C0 7.46235 2.04229 9.5 4.50232 9.5ZM4.41413 5.93528C4.15884 5.93528 4.0196 5.80995 4.0196 5.56395V5.50825C4.0196 5.07194 4.2656 4.82594 4.59515 4.5985C4.99897 4.32001 5.18927 4.16684 5.18927 3.8605C5.18927 3.53094 4.92934 3.29887 4.52553 3.29887C4.22847 3.29887 4.01031 3.4474 3.86643 3.68876C3.72254 3.8605 3.67148 3.9951 3.40691 3.9951C3.23517 3.9951 3.06808 3.87442 3.06808 3.66555C3.06808 3.58664 3.082 3.51238 3.10521 3.43347C3.23053 3.00181 3.76431 2.63976 4.55802 2.63976C5.35637 2.63976 6.03868 3.0575 6.03868 3.82336C6.03868 4.37107 5.72769 4.631 5.27746 4.9327C4.97112 5.14621 4.80866 5.30402 4.80402 5.55467C4.80402 5.56859 4.80402 5.5918 4.80402 5.60572C4.79474 5.79139 4.65549 5.93528 4.41413 5.93528ZM4.4327 7.27205C4.16813 7.27205 3.92677 7.06782 3.92677 6.78932C3.92677 6.51083 4.16349 6.3066 4.4327 6.3066C4.70191 6.3066 4.93863 6.50619 4.93863 6.78932C4.93863 7.07246 4.69727 7.27205 4.4327 7.27205Z" fill="#71879C"/>
</svg>
`,
  };
};
