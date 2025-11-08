import { createIcon } from "@chakra-ui/react";

const infographic = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.min.css" />
<div class="h-full w-[150mm] bg-[#FDFAF0] p-10 py-16">
  <p class="text-center font-light">@reallygreatsite</p>
  <div class="flex justify-center pt-4">
    <p class="max-w-xs text-center text-3xl font-bold">The Pros and Cons of Renting A House</p>
  </div>
  <div class="flex divide-x-2 divide-orange-200 pt-12">
    <div class="w-[50%] flex-col px-6 text-center">
      <p class="text-center text-4xl font-bold">PROS</p>
      <div class="pt-10 pb-6">
        <img class="mx-auto w-16" src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/newspaper.svg" alt="Heroicons" />
      </div>
      <p class="font-light">More Flexible and Less Paperworks</p>
    </div>
    <div class="w-[50%] flex-col px-6 text-center">
      <p class="text-center text-4xl font-bold">CONS</p>
      <div class="pt-10 pb-6">
        <img class="mx-auto w-16" src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/clipboard-check.svg" alt="Heroicons" />
      </div>
      <p class="font-light">Need Landlord Approval for Changes</p>
    </div>
  </div>
</div>`;

const poster = `
<div class="h-[210mm] w-[210mm] bg-gray-100 p-24">
  <p class="w text-5xl font-semibold leading-tight text-gray-900">We cannot solve our problems with the same thinking we used when we created them.</p>
  <div class="mt-20 flex justify-between">
    <div>
      <p class="text-5xl font-semibold">Albert Einstein</p>
      <p class="pt-4">Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics</p>
    </div>
    <div class="pl-10">
      <img class="w-[1000px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg" alt="" />
    </div>
  </div>
</div>`;

const invoice = `
<div class="h-[297mm] w-[210mm] p-12 pl-32">
  <div class="flex justify-between">
    <div>
      <p class="pb-2 text-4xl">MB Road apples</p>
      <p class="text-sm text-gray-400">4520 Wood Duck Drive</p>
      <p class="text-sm text-gray-400">Marquette Michigan 49855</p>
    </div>
    <div>
      <img src="https://logo.clearbit.com/react.com" />
    </div>
  </div>
  <div class="flex justify-between pt-16">
    <div>
      <p>01/31/2022</p>
      <p class="pb-3 text-4xl font-bold">INVOICE</p>
      <p class="text-sm font-bold">INVOICE NO. <span class="pl-1 font-normal">0001</span></p>
      <p class="text-sm font-bold">DUE DATE: <span class="pl-1 font-normal">02/15/2002</span></p>
    </div>
    <div class="pl-2 text-right">
      <p class="text-gray-400">CLIENT</p>
      <p class="font-bold">Tony Stark</p>
      <p class="text-sm">Avengers Mansion</p>
      <p class="text-sm">890 Fifth Avenue</p>
      <p class="text-sm">Manhattan New York 10004</p>
    </div>
  </div>
  <div class="pt-16">
    <table class="w-full table-auto text-sm">
      <thead class="border-b-2">
        <tr class="h-10 text-left">
          <th>ITEM</th>
          <th>QUANTITY</th>
          <th>PRICE €</th>
          <th class="text-right">TOTAL €</th>
        </tr>
      </thead>
      <tbody>
        <tr class="h-10">
          <td>Iron Man Suit</td>
          <td>3</td>
          <td>120.00</td>
          <td class="text-right">360.00</td>
        </tr>
        <tr class="h-10">
          <td>Helicopter</td>
          <td>2</td>
          <td>750.00</td>
          <td class="text-right">1500.00</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-end">
    <p class="pt-6 text-xl font-bold">1860.00 €</p>
  </div>
  <div class="pt-16 text-sm">
    <p class="font-bold">PAYMENT ADVICE</p>
    <p>Account name: MB Road apples</p>
    <p>Bank name: Hello World</p>
    <p>IBAN: GB95BARC20038428989175</p>
  </div>
</div>
`;

const resume = `
<div class="h-[297mm] w-[210mm] p-12">
  <div class="flex">
    <div class="mt-16 grid w-[40%] border-2 border-gray-400 p-10">
      <div class="grid gap-8">
        <div class="mx-auto mt-[-80px]">
          <img class="w-40 rounded-full" src="https://randomuser.me/api/portraits/women/96.jpg" alt="" />
        </div>
        <p class="text-4xl font-semibold">Adeline Palmerston</p>
      </div>
      <div class="pt-3">
        <p class="font-light uppercase">Creative Designer</p>
      </div>
      <div class="pt-10">
        <p class="text-2xl font-medium">Contact</p>
        <div class="grid gap-2 pt-4 text-sm font-light">
          <p>123 Anywhere St., Any City, ST 12345</p>
          <p>hello@reallygreatsite.com</p>
          <p>www.reallygreatsite.com</p>
          <p>@reallygreatsite</p>
        </div>
      </div>
      <div class="flex flex-col gap-5 pt-10">
        <p class="text-2xl font-medium">Skills</p>
        <div class="flex flex-col gap-5">
          <div>
            <div class="flex flex-col gap-2">
              <p class="">Project Management</p>
              <div class="flex flex-row gap-1">
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-2">
              <p class="">Problem Solving</p>
              <div class="flex flex-row gap-1">
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-2">
              <p class="">Creativity</p>
              <div class="flex flex-row gap-1">
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-300"></div>
                <div class="h-3 w-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-2">
              <p class="">Leadership</p>
              <div class="flex flex-row gap-1">
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-500"></div>
                <div class="h-3 w-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="pl-10 pt-16">
        <p class="text-2xl font-semibold">About</p>
        <p class="pt-4 text-sm font-light">Assists the department head in carrying out digital marketing companies works closely with the marketing head for digital promotions and others.</p>
      </div>
      <div class="pl-10 pt-10">
        <p class="text-2xl font-semibold">Education History</p>
        <div class="flex items-center justify-between pt-4">
          <p class="text-sm font-light">Masters in Product Design</p>
          <p class="text-xs font-light">Jan 2016 - Dec 2017</p>
        </div>
        <div>
          <p class="pt-1 font-medium">Really Great University</p>
          <ul class="list-disc pl-5 pt-3 text-xs">
            <li>Post Graduated in Graphics Designing.</li>
            <li>Gained extensive training.</li>
          </ul>
        </div>
        <div class="flex items-center justify-between pt-5">
          <p class="text-sm font-light">BA in Product Design</p>
          <p class="text-xs font-light">Dec 2012 - Dec 2016</p>
        </div>
        <div>
          <p class="pt-1 font-medium">Really Great University</p>
          <ul class="list-disc pl-5 pt-3 text-xs">
            <li>Academic Excellence in Product Design, English and Mathematics.</li>
          </ul>
        </div>
      </div>
      <div class="pl-10 pt-10">
        <p class="text-2xl font-semibold">Work Experience</p>
        <div class="flex items-center justify-between pt-4">
          <p class="text-sm font-light">Really Great Company</p>
          <p class="text-xs font-light">Oct 2020 - Present</p>
        </div>
        <div>
          <p class="pt-1 font-medium">Creative Designer</p>
          <ul class="list-disc pl-5 pt-3 text-xs">
            <li>Comes up with unique graphic designs for clients.</li>
            <li>Works closely with the copywriting team.</li>
          </ul>
        </div>
        <div class="flex items-center justify-between pt-5">
          <p class="text-sm font-light">Really Great Company</p>
          <p class="text-xs font-light">Sep 2019 - Aug 2020</p>
        </div>
        <div>
          <p class="pt-1 font-medium">Project Manager</p>
          <ul class="list-disc pl-5 pt-3 text-xs">
            <li>Edited editorial photos for clients and magazines.</li>
            <li>Organization of files.</li>
          </ul>
        </div>
        <div class="flex items-center justify-between pt-5">
          <p class="text-sm font-light">Really Great Company</p>
          <p class="text-xs font-light">Jan 2018 - July 2019</p>
        </div>
        <div>
          <p class="pt-1 font-medium">Art Director</p>
          <ul class="list-disc pl-5 pt-3 text-xs">
            <li>Worked on marketing campaigns for brands.</li>
            <li>Handled multiple digital accounts.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const PosterIcon = createIcon({
  viewBox: "0 0 32 32",
  displayName: "PosterIcon",
  path: (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.63 2.71s1.632.624 4.632 3.624c2.989 2.989 3.615 4.624 3.62 4.636.073 1.424.118 3.09.118 5.03 0 5.79-.402 9.133-.741 10.92-.218 1.15-1.114 1.936-2.276 2.062-1.569.17-4.337.352-8.983.352-4.646 0-7.414-.183-8.983-.352-1.162-.125-2.058-.913-2.276-2.061C4.402 25.133 4 21.79 4 16c0-5.791.402-9.133.741-10.921.218-1.149 1.114-1.936 2.276-2.061 1.569-.17 4.337-.352 8.983-.352 1.366 0 2.57.016 3.63.042Z"
        fill="#fff"
      />
      <path
        d="M9.334 22c0 .737.596 1.334 1.333 1.334H20a1.333 1.333 0 0 0 0-2.667h-9.333c-.737 0-1.333.597-1.333 1.333ZM9.334 16c0 .737.596 1.334 1.333 1.334H16a1.333 1.333 0 0 0 0-2.667h-5.333c-.737 0-1.333.597-1.333 1.333ZM27.882 10.97c-1.92.482-4.186.514-6.144-.084a2.692 2.692 0 0 1-1.752-1.717c-.696-2.04-.868-4.538-.357-6.46 0 0 1.633.624 4.633 3.624s3.62 4.636 3.62 4.636Z"
        fill="#CBD5E1"
      />
    </svg>
  ),
});
const ResumeIcon = createIcon({
  viewBox: "0 0 32 32",
  displayName: "ResumeIcon",
  path: (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.037 2.71s-1.632.624-4.632 3.624c-2.99 2.989-3.616 4.624-3.62 4.636A98.81 98.81 0 0 0 2.666 16c0 5.79.403 9.133.742 10.92.217 1.15 1.113 1.936 2.276 2.062 1.568.17 4.337.352 8.982.352 4.646 0 7.415-.183 8.983-.352 1.163-.125 2.059-.913 2.276-2.061.34-1.788.741-5.13.741-10.92 0-5.791-.402-9.133-.74-10.921-.218-1.149-1.114-1.936-2.277-2.061-1.568-.17-4.337-.352-8.983-.352-1.366 0-2.57.016-3.629.042Z"
        fill="#fff"
      />
      <path
        d="M2.785 10.97c1.92.483 4.186.515 6.144-.083A2.692 2.692 0 0 0 10.68 9.17c.696-2.04.868-4.538.356-6.46 0 0-1.632.624-4.632 3.624s-3.62 4.636-3.62 4.636ZM17.423 16.936c.07 1.149.817 2.038 1.958 2.187.881.115 2.154.211 3.952.211s3.07-.096 3.952-.21c1.141-.15 1.889-1.04 1.958-2.188.05-.822.09-1.984.09-3.602 0-1.618-.04-2.78-.09-3.602-.07-1.149-.817-2.038-1.958-2.187-.881-.115-2.154-.211-3.952-.211-1.797 0-3.07.096-3.952.21-1.141.15-1.889 1.04-1.958 2.188-.05.822-.09 1.984-.09 3.602 0 1.618.04 2.78.09 3.602Z"
        fill="#CBD5E1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.61 14.738a2.5 2.5 0 1 0-2.361 0 3.511 3.511 0 0 0-1.792 1.447c-.291.467-.093 1.093.444 1.214.097.022.198.037.301.047.567.051 1.297.088 2.227.088.93 0 1.66-.037 2.227-.088.104-.01.204-.025.302-.047.537-.12.735-.747.443-1.214a3.512 3.512 0 0 0-1.791-1.447Z"
        fill="#fff"
      />
      <path
        d="M6.667 23.615c0 .513.387.939.9.967.72.04 1.875.085 3.463.085 1.382 0 2.271-.034 2.825-.069.474-.03.811-.421.811-.896v-.737c0-.475-.337-.866-.811-.896A45.905 45.905 0 0 0 11.03 22a63.02 63.02 0 0 0-3.464.084.957.957 0 0 0-.9.968v.563ZM6.667 18.383c0 .47.328.86.795.894.42.03 1.026.057 1.871.057s1.452-.027 1.871-.057c.467-.034.796-.425.796-.894v-.766c0-.468-.329-.859-.796-.893-.42-.03-1.026-.057-1.87-.057-.846 0-1.452.026-1.872.057-.467.034-.795.425-.795.893v.766Z"
        fill="#CBD5E1"
      />
    </svg>
  ),
});
const InvoiceIcon = createIcon({
  viewBox: "0 0 32 32",
  displayName: "InvoiceIcon",
  path: (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.752 2.782c.16.01 1.523.16 3.914 2.552 2.413 2.412 2.543 3.723 2.55 3.858v.012c.07 1.736.117 3.96.117 6.796 0 6.193-.225 10.14-.413 12.36-.087 1.026-1.249 1.478-2.04.818l-2.213-1.844-1.823 1.823c-.48.48-1.245.522-1.776.098l-2.402-1.921-1.723 1.724c-.521.52-1.365.52-1.886 0l-1.724-1.724-2.401 1.92a1.333 1.333 0 0 1-1.776-.098l-1.823-1.822-2.213 1.844c-.792.66-1.953.208-2.04-.819-.189-2.22-.413-6.166-.413-12.359 0-5.7.19-8.924.367-10.692.126-1.253 1.02-2.148 2.273-2.273C7.075 2.857 10.3 2.667 16 2.667c2.812 0 5.022.046 6.752.115Z"
        fill="#fff"
      />
      <path
        d="M29.216 9.204c-.583.072-1.408.13-2.55.13-.84 0-1.507-.031-2.034-.076-1.147-.099-1.892-.975-1.936-2.125a47.383 47.383 0 0 1-.03-1.8c0-1.181.032-1.998.07-2.552 0 0 1.38.003 3.93 2.553 2.55 2.55 2.55 3.87 2.55 3.87Z"
        fill="#CBD5E1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.11 11.959a1.31 1.31 0 0 1 .458 1.866c-2.309 3.458-4.383 5.727-5.558 6.896-.592.589-1.492.666-2.158.162a21.811 21.811 0 0 1-4.22-4.275c-.38-.506-.316-1.21.125-1.664l.355-.364c.497-.511 1.309-.542 1.816-.041a43.337 43.337 0 0 1 2.84 3.128s1.85-2.67 4.524-5.579a1.31 1.31 0 0 1 1.61-.247l.208.118Z"
        fill="#CBD5E1"
      />
    </svg>
  ),
});
const InfogIcon = createIcon({
  viewBox: "0 0 32 32",
  displayName: "InfogIcon",
  path: (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.002 4.994c1.15.116 2.053.877 2.278 2.011.334 1.679.72 4.752.72 9.995 0 5.244-.386 8.317-.72 9.995-.225 1.134-1.128 1.896-2.278 2.011-1.566.157-4.337.328-9.002.328-4.665 0-7.436-.17-9.002-.328-1.15-.115-2.053-.877-2.278-2.01C4.386 25.315 4 22.243 4 17c0-5.243.386-8.316.72-9.995.225-1.134 1.128-1.895 2.278-2.01 1.566-.158 4.337-.328 9.002-.328 4.665 0 7.436.17 9.002.327Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.41 2.7a1.972 1.972 0 0 1 1.909 2.212l-.156 1.323A2 2 0 0 1 19.177 8h-6.352a2 2 0 0 1-1.986-1.765l-.156-1.323a1.972 1.972 0 0 1 1.91-2.212c1.013-.021 2.146-.033 3.408-.033 1.263 0 2.395.012 3.408.033Z"
        fill="#CBD5E1"
      />
      <path
        d="M9.333 21.667c0-.956.612-1.66 1.567-1.667a16.084 16.084 0 0 1 .199 0c.956.007 1.567.71 1.567 1.667 0 .955-.611 1.659-1.567 1.666a16.075 16.075 0 0 1-.199 0c-.955-.007-1.567-.71-1.567-1.666ZM14.682 21.104c.034-.602.496-1.003 1.098-1.046A26.66 26.66 0 0 1 17.667 20c.827 0 1.444.026 1.887.058.602.043 1.064.444 1.098 1.046a9.903 9.903 0 0 1 0 1.125c-.034.602-.496 1.003-1.098 1.046-.443.032-1.06.058-1.887.058s-1.444-.026-1.887-.058c-.602-.043-1.064-.444-1.098-1.046a9.905 9.905 0 0 1 0-1.125ZM9.333 15c0-.955.612-1.659 1.567-1.666a16.084 16.084 0 0 1 .199 0c.956.007 1.567.71 1.567 1.667 0 .956-.611 1.659-1.567 1.666a16.075 16.075 0 0 1-.199 0c-.955-.007-1.567-.71-1.567-1.666ZM14.695 14.34c.052-.55.505-.886 1.057-.924.598-.04 1.54-.082 2.915-.082 1.376 0 2.316.041 2.915.082.552.038 1.005.374 1.057.925.017.182.028.4.028.66 0 .259-.011.477-.028.66-.052.55-.505.886-1.057.924-.599.041-1.54.082-2.915.082-1.376 0-2.317-.04-2.915-.082-.552-.038-1.005-.373-1.057-.925a7.094 7.094 0 0 1-.028-.66c0-.259.011-.477.028-.66Z"
        fill="#CBD5E1"
      />
    </svg>
  ),
});

const usecase = [
  {
    id: 1,
    title: "Poster",
    url: `https://play.tailwindcss.com/WKCIi7Xcbl`,
    template: poster,
    bg: "#F59E0B",
    icon: <PosterIcon fontSize={24} />,
  },
  {
    id: 2,
    title: "Resume",
    url: `https://play.tailwindcss.com/aY208bEWW6`,
    template: resume,
    bg: "#06B6D4",
    icon: <ResumeIcon fontSize={24} />,
  },
  {
    id: 3,
    title: "Invoice",
    url: `https://play.tailwindcss.com/kMGHinjkEt`,
    template: invoice,
    bg: "#6366F1",
    icon: <InvoiceIcon fontSize={24} />,
  },
  {
    id: 4,
    title: "Infographic",
    url: `https://play.tailwindcss.com/xglvp6OLHi`,
    template: infographic,
    bg: "#F178B6",
    icon: <InfogIcon fontSize={24} />,
  },
];

export { usecase };
