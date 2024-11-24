import React from "react";

interface DefiConcept {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const DEFI_CONCEPTS: DefiConcept[] = [
  {
    title: "Provide liquidity",
    description: "Add token pairs to pools and earn fees from trades",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/10">
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.5"
            width="48"
            height="48"
            rx="24"
            fill="white"
            fill-opacity="0.04"
          />
          <path
            d="M23.9984 14.5C23.9984 14.5 17.0469 22.1418 17.0469 27.5485C17.0469 31.814 19.7329 34.5 23.9984 34.5C28.2639 34.5 30.9498 31.814 30.9498 27.5485C30.9498 22.1418 23.9984 14.5 23.9984 14.5ZM24.7707 31.9897V30.8312C25.5387 30.8303 26.2749 30.5248 26.8179 29.9818C27.3609 29.4388 27.6663 28.7026 27.6672 27.9347H28.8258C28.8246 29.0098 28.397 30.0406 27.6368 30.8008C26.8766 31.561 25.8459 31.9886 24.7707 31.9897Z"
            fill="#66B1DE"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Stake",
    description: "Lock tokens to earn passive rewards and voting rights",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_1915)">
<path d="M24 14C21.25 14 19 16.25 19 19V21H21V19C21 17.35 22.35 16 24 16C25.65 16 27 17.35 27 19V21H29V19C29 16.25 26.75 14 24 14Z" fill="#424242"/>
<path d="M30 34H18C16.9 34 16 33.1 16 32V23C16 21.9 16.9 21 18 21H30C31.1 21 32 21.9 32 23V32C32 33.1 31.1 34 30 34Z" fill="#FB8C00"/>
<path d="M24 29C24.8284 29 25.5 28.3284 25.5 27.5C25.5 26.6716 24.8284 26 24 26C23.1716 26 22.5 26.6716 22.5 27.5C22.5 28.3284 23.1716 29 24 29Z" fill="#C76E00"/>
</g>
<defs>
<clipPath id="clip0_6356_1915">
<rect width="16" height="20" fill="white" transform="translate(16 14)"/>
</clipPath>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "Yield Farming",
    description: "Earn additional tokens by participating in DeFi protocols",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_1927)">
<path d="M33.1696 21.4514C30.3224 21.0583 28.2484 19.1492 25.8843 17.6983C24.6012 16.9114 23.6118 16.3839 22.0909 16.6495C20.7324 16.8867 20.1337 18.1858 18.3253 18.4424C18.0668 18.4777 17.7818 18.618 17.8006 18.8174C17.6312 18.943 17.729 19.2427 17.8703 19.478C18.7956 21.0267 19.9759 22.4652 21.0799 23.8905C22.0774 25.1761 23.2293 26.2105 24.8518 26.577C26.4299 26.9324 28.0946 26.5086 29.4234 25.6289C30.1396 25.1549 30.7059 24.5114 31.2378 23.8464C31.8306 23.108 32.6487 22.7995 33.3724 22.228C33.6299 22.0227 33.499 21.4961 33.1668 21.4505" fill="#009248"/>
<path d="M33.1696 21.4358C32.6605 21.3641 32.1593 21.2443 31.6728 21.078C31.399 21.272 31.1412 21.4914 30.9165 21.772C30.3837 22.4355 29.8165 23.0802 29.1009 23.5542C27.7715 24.4342 26.1071 24.8577 24.5281 24.5011C22.9062 24.1358 21.7537 23.1014 20.7562 21.8148C19.9031 20.7173 19.0059 19.6086 18.2159 18.4492C17.9934 18.5048 17.7846 18.6314 17.8006 18.802C17.6312 18.9286 17.729 19.2273 17.8703 19.4645C18.7956 21.012 19.9759 22.4505 21.0799 23.8739C22.0774 25.1595 23.2293 26.1939 24.8549 26.5605C26.4331 26.9158 28.0978 26.4936 29.4265 25.6136C30.1428 25.1395 30.709 24.4948 31.2409 23.8311C31.8337 23.0914 32.6518 22.783 33.3756 22.2102C33.6331 22.007 33.5021 21.4798 33.1699 21.4342" fill="#037E40"/>
<path d="M14.5965 17.4042C15.9136 18.3358 17.3924 18.8833 18.8046 19.5889C20.3418 20.3564 21.8446 21.1086 23.4546 21.673C26.6565 22.7973 29.9686 22.6039 33.2711 22.1714C33.674 22.1183 33.533 21.4105 33.1315 21.4623C29.9393 21.8808 26.7483 22.0502 23.6502 20.9783C22.0927 20.4389 20.6177 19.738 19.1418 18.9655C17.7411 18.2323 16.2568 17.7202 14.9393 16.7886C14.5936 16.5445 14.2518 17.1602 14.5965 17.4042Z" fill="#3BB44A"/>
<path d="M15.4093 33.9347C17.2184 33.0535 19.1687 33.3569 21.1065 33.2785C22.1571 33.2354 22.939 33.1582 23.7212 32.4113C24.4184 31.7435 24.26 30.755 25.2106 29.9019C25.3471 29.7804 25.4584 29.5863 25.3712 29.4807C25.4212 29.3391 25.2475 29.2038 25.0737 29.1219C23.9318 28.5819 22.6846 28.205 21.4875 27.8069C20.4078 27.4482 19.3362 27.2935 18.249 27.7135C17.1921 28.1219 16.3893 29.0157 15.9587 30.0447C15.7271 30.5994 15.6484 31.1954 15.5971 31.7882C15.5415 32.4479 15.185 32.946 14.9878 33.5607C14.9168 33.7807 15.1975 34.0344 15.4093 33.9335" fill="#08A69B"/>
<path d="M15.4172 33.9441C15.7415 33.7874 16.0799 33.6616 16.4278 33.5685C16.5106 33.3488 16.5759 33.121 16.5972 32.871C16.6491 32.2782 16.7269 31.681 16.9575 31.1276C17.3878 30.0985 18.1916 29.2048 19.2478 28.7963C20.3347 28.3763 21.4072 28.5307 22.4869 28.8898C23.4103 29.197 24.365 29.4916 25.2738 29.8582C25.3819 29.7395 25.4538 29.5841 25.3781 29.4916C25.4288 29.3513 25.2538 29.216 25.0803 29.1338C23.9388 28.5938 22.6928 28.217 21.4956 27.8176C20.4153 27.4598 19.3438 27.3054 18.2566 27.7254C17.2003 28.1326 16.3969 29.0276 15.9669 30.0566C15.735 30.6101 15.6559 31.206 15.6053 31.7988C15.5497 32.4598 15.1938 32.9582 14.9953 33.5726C14.9253 33.7913 15.2059 34.0463 15.4172 33.9441Z" fill="#04786B"/>
<path d="M27.7865 29.053C26.6562 29.024 25.5834 29.283 24.4865 29.4224C23.2937 29.574 22.1268 29.7218 20.9712 30.0202C18.6721 30.613 16.8212 32.0152 15.0696 33.5527C14.8559 33.7399 15.2137 34.0962 15.4262 33.9115C17.1203 32.4233 18.9096 31.0833 21.1287 30.5005C22.2425 30.2074 23.375 30.0402 24.534 29.9152C25.634 29.7952 26.6953 29.5158 27.8246 29.5446C28.1209 29.5521 28.0803 29.0605 27.7865 29.053Z" fill="#04786B"/>
<path d="M25.9657 14.2503C25.9682 14.995 26.0257 15.7428 25.9575 16.4869C25.8825 17.3238 25.5107 18.0312 24.8963 18.5988C24.65 18.8259 25.0178 19.19 25.2625 18.9647C25.8844 18.3894 26.2816 17.6859 26.4278 16.8509C26.5775 15.995 26.4863 15.1131 26.4832 14.2503C26.4819 13.9166 25.9644 13.9166 25.9657 14.2503ZM30.0969 14.3994C30.1128 16.5422 28.1775 18.2047 26.8863 19.6941C26.6691 19.9456 27.0325 20.3122 27.2532 20.06C28.6438 18.455 30.6313 16.7047 30.6141 14.4006C30.6113 14.0669 30.095 14.0669 30.0969 14.4006M32.2 17.3678C31.8916 18.5197 31.0369 19.4122 30.0282 20.0019C29.7397 20.1706 30.0016 20.6181 30.2891 20.4488C31.4125 19.7925 32.3563 18.785 32.6982 17.5063C32.7841 17.1834 32.2863 17.0469 32.2 17.3678ZM14 23.5475C14.0172 24.7222 14.4097 25.8522 14.8825 26.9141C15.0178 27.2191 15.4635 26.9559 15.3288 26.6525C14.895 25.6762 14.5338 24.6259 14.5185 23.5472C14.5128 23.2137 13.9957 23.2141 14 23.5475ZM15.8938 22.9C15.906 24.6281 16.4057 26.2591 17.0472 27.8484C17.1707 28.1544 17.6713 28.0203 17.546 27.7106C16.9216 26.1659 16.4225 24.5825 16.41 22.9C16.4097 22.5662 15.8897 22.5662 15.8938 22.9ZM17.9344 23.3491C17.9866 24.1834 18.0988 25.0038 18.3422 25.8069C18.4382 26.1256 18.9382 25.9903 18.841 25.6703C18.6103 24.9103 18.501 24.1378 18.4522 23.3491C18.4313 23.0166 17.9135 23.0153 17.9344 23.3491Z" fill="#BCBCBE"/>
</g>
<defs>
<clipPath id="clip0_6356_1927">
<rect width="20" height="20" fill="white" transform="translate(14 14)"/>
</clipPath>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "Supply",
    description: "Deposit assets into a protocol to earn yield",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-cyan-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_1944)">
<path d="M31 24.5V30.5C31 31.05 30.55 31.5 30 31.5H18C17.45 31.5 17 31.05 17 30.5V24.5C17 22.85 15.65 21.5 14 21.5V23.5C14.55 23.5 15 23.95 15 24.5V30.5C15 32.15 16.35 33.5 18 33.5H30C31.65 33.5 33 32.15 33 30.5V24.5C33 23.95 33.45 23.5 34 23.5V21.5C32.35 21.5 31 22.85 31 24.5Z" fill="#2196F3"/>
<path d="M31.3008 15.3008L26.5008 20.1008V26.5008H28.5008V20.9008L32.7008 16.7008L31.3008 15.3008ZM15.3008 16.7008L19.5008 20.9008V26.5008H21.5008V20.1008L16.7008 15.3008L15.3008 16.7008Z" fill="white"/>
<path d="M30.5 26L27.5 29L24.5 26H30.5ZM23.5 26L20.5 29L17.5 26H23.5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6356_1944">
<rect width="20" height="19" fill="white" transform="translate(14 14.5)"/>
</clipPath>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "Lend & Borrow",
    description: "Supply assets to earn interest or borrow against collateral",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-yellow-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g filter="url(#filter0_i_6356_1957)">
<path d="M16.7773 27.0527C16.7773 23.0834 19.9955 19.8652 23.9648 19.8652H24.3167C28.2855 19.8652 31.5042 23.0834 31.5042 27.0527V27.2315C31.5042 28.6902 30.9248 30.0891 29.8933 31.1206C28.8619 32.152 27.4629 32.7315 26.0042 32.7315H22.2773C20.8187 32.7315 19.4197 32.152 18.3883 31.1206C17.3568 30.0891 16.7773 28.6902 16.7773 27.2315V27.0527Z" fill="url(#paint0_radial_6356_1957)"/>
<path d="M16.7773 27.0527C16.7773 23.0834 19.9955 19.8652 23.9648 19.8652H24.3167C28.2855 19.8652 31.5042 23.0834 31.5042 27.0527V27.2315C31.5042 28.6902 30.9248 30.0891 29.8933 31.1206C28.8619 32.152 27.4629 32.7315 26.0042 32.7315H22.2773C20.8187 32.7315 19.4197 32.152 18.3883 31.1206C17.3568 30.0891 16.7773 28.6902 16.7773 27.2315V27.0527Z" fill="url(#paint1_radial_6356_1957)"/>
</g>
<path d="M16.7773 27.0527C16.7773 23.0834 19.9955 19.8652 23.9648 19.8652H24.3167C28.2855 19.8652 31.5042 23.0834 31.5042 27.0527V27.2315C31.5042 28.6902 30.9248 30.0891 29.8933 31.1206C28.8619 32.152 27.4629 32.7315 26.0042 32.7315H22.2773C20.8187 32.7315 19.4197 32.152 18.3883 31.1206C17.3568 30.0891 16.7773 28.6902 16.7773 27.2315V27.0527Z" fill="url(#paint2_radial_6356_1957)"/>
<path d="M16.7773 27.0527C16.7773 23.0834 19.9955 19.8652 23.9648 19.8652H24.3167C28.2855 19.8652 31.5042 23.0834 31.5042 27.0527V27.2315C31.5042 28.6902 30.9248 30.0891 29.8933 31.1206C28.8619 32.152 27.4629 32.7315 26.0042 32.7315H22.2773C20.8187 32.7315 19.4197 32.152 18.3883 31.1206C17.3568 30.0891 16.7773 28.6902 16.7773 27.2315V27.0527Z" fill="url(#paint3_radial_6356_1957)"/>
<g filter="url(#filter1_ii_6356_1957)">
<path d="M21.6 16.9346C21.8938 17.4352 22.3219 18.0777 22.8719 18.6046H25.4063C25.9563 18.0777 26.3838 17.4359 26.6782 16.9346C26.7134 16.8731 26.7356 16.8051 26.7436 16.7347C26.7515 16.6644 26.7449 16.5931 26.7242 16.5253C26.7036 16.4576 26.6692 16.3948 26.6234 16.3408C26.5775 16.2868 26.5211 16.2428 26.4575 16.2115C26.2575 16.109 26.0225 16.1577 25.8282 16.2709C25.3894 16.5265 25.1363 16.2252 24.7494 15.6334C24.555 15.3359 24.2582 15.3202 24.1388 15.3184C24.02 15.3202 23.7232 15.3359 23.5288 15.6334C23.1413 16.2252 22.8888 16.5265 22.45 16.2709C22.2557 16.1577 22.0207 16.109 21.82 16.2115C21.7566 16.2429 21.7002 16.2869 21.6544 16.3409C21.6086 16.3949 21.5743 16.4577 21.5537 16.5255C21.5331 16.5932 21.5266 16.6645 21.5345 16.7348C21.5425 16.8052 21.5648 16.8732 21.6 16.9346Z" fill="url(#paint4_linear_6356_1957)"/>
</g>
<g filter="url(#filter2_f_6356_1957)">
<path d="M24.5011 22.9121C24.5011 22.7795 24.4484 22.6523 24.3546 22.5586C24.2608 22.4648 24.1337 22.4121 24.0011 22.4121C23.8685 22.4121 23.7413 22.4648 23.6475 22.5586C23.5537 22.6523 23.5011 22.7795 23.5011 22.9121V23.384C23.5011 23.4959 23.4261 23.5927 23.3217 23.6327C23.1412 23.701 22.9712 23.7942 22.8167 23.9096C22.5888 24.0766 22.4043 24.2957 22.2785 24.5486C22.1527 24.8015 22.0893 25.0809 22.0936 25.3634C22.0936 26.0259 22.3923 26.5059 22.7979 26.8134C23.1842 27.1071 23.6511 27.2334 24.0229 27.2671C24.1742 27.2809 24.3998 27.3215 24.5861 27.439C24.7479 27.5409 24.9086 27.7152 24.9423 28.089C24.9748 28.4465 24.8298 28.659 24.6404 28.8034C24.4217 28.9702 24.1673 29.0234 24.1029 29.0234C23.9523 29.0234 23.6942 29.0034 23.4754 28.8846C23.2917 28.7846 23.0942 28.5965 23.0529 28.1359C23.0411 28.0037 22.9772 27.8818 22.8754 27.7967C22.7736 27.7117 22.6422 27.6706 22.5101 27.6824C22.378 27.6943 22.256 27.7581 22.171 27.8599C22.086 27.9617 22.0448 28.0931 22.0567 28.2252C22.1279 29.0246 22.5254 29.5065 22.9986 29.764C23.1036 29.8198 23.2079 29.865 23.3117 29.8996C23.3657 29.9163 23.413 29.9495 23.447 29.9946C23.481 30.0397 23.4999 30.0944 23.5011 30.1509V30.5777C23.5011 30.7103 23.5537 30.8375 23.6475 30.9313C23.7413 31.0251 23.8685 31.0777 24.0011 31.0777C24.1337 31.0777 24.2608 31.0251 24.3546 30.9313C24.4484 30.8375 24.5011 30.7103 24.5011 30.5777V30.1552C24.5011 30.0427 24.5773 29.9446 24.6836 29.9052C24.8711 29.8365 25.0673 29.7352 25.2461 29.599C25.6617 29.2821 26.0073 28.7552 25.9386 27.999C25.8748 27.2984 25.5236 26.8765 25.1136 26.6177C24.8045 26.4301 24.4576 26.3135 24.0979 26.2765C23.5298 26.2471 23.0936 25.9334 23.0936 25.3634C23.0936 25.0496 23.2186 24.8196 23.4023 24.6821C23.7829 24.3596 24.4298 24.4034 24.7354 24.8084C24.8704 24.9877 24.9311 25.1852 24.9448 25.3634C24.9661 25.6384 25.2042 25.8577 25.4798 25.8365C25.7548 25.8159 25.9604 25.6002 25.9392 25.3246C25.9093 24.9288 25.7677 24.5495 25.5311 24.2309C25.3411 23.9784 24.9817 23.7371 24.6873 23.6159C24.6342 23.5959 24.5882 23.5607 24.555 23.5147C24.5219 23.4686 24.5031 23.4138 24.5011 23.3571V22.9121Z" fill="url(#paint5_linear_6356_1957)"/>
</g>
<g filter="url(#filter3_ii_6356_1957)">
<path d="M24.626 22.8477C24.626 22.715 24.5734 22.5879 24.4796 22.4941C24.3858 22.4003 24.2586 22.3477 24.126 22.3477C23.9934 22.3477 23.8663 22.4003 23.7725 22.4941C23.6787 22.5879 23.626 22.715 23.626 22.8477V23.3195C23.626 23.432 23.551 23.5283 23.4467 23.5683C23.2665 23.6372 23.0966 23.7304 22.9417 23.8452C22.7139 24.0122 22.5295 24.2313 22.4038 24.4842C22.2781 24.7372 22.2148 25.0165 22.2192 25.2989C22.2192 25.9614 22.5173 26.4414 22.9229 26.7489C23.3092 27.0427 23.7754 27.1695 24.1479 27.2033C24.2992 27.217 24.5248 27.257 24.7117 27.3745C24.8729 27.4764 25.0335 27.6508 25.0679 28.0245C25.1004 28.3827 24.9548 28.5952 24.7648 28.7395C24.546 28.9064 24.2923 28.9589 24.2273 28.9589C24.0773 28.9589 23.8192 28.9389 23.6004 28.8208C23.4167 28.7208 23.2192 28.532 23.1779 28.072C23.1721 28.0066 23.1534 27.943 23.123 27.8848C23.0926 27.8266 23.051 27.7749 23.0006 27.7328C22.9503 27.6907 22.8921 27.6589 22.8294 27.6392C22.7667 27.6196 22.7008 27.6125 22.6354 27.6183C22.57 27.6241 22.5064 27.6428 22.4482 27.6732C22.39 27.7036 22.3383 27.7452 22.2962 27.7956C22.254 27.8459 22.2222 27.9041 22.2026 27.9668C22.1829 28.0294 22.1758 28.0954 22.1817 28.1608C22.2529 28.9608 22.6504 29.4427 23.1235 29.6995C23.2285 29.7558 23.3329 29.801 23.4367 29.8352C23.546 29.8727 23.626 29.9714 23.626 30.087V30.5139C23.626 30.6465 23.6787 30.7737 23.7725 30.8675C23.8663 30.9612 23.9934 31.0139 24.126 31.0139C24.2586 31.0139 24.3858 30.9612 24.4796 30.8675C24.5734 30.7737 24.626 30.6465 24.626 30.5139V30.0914C24.626 29.9783 24.7023 29.8808 24.8085 29.8414C24.996 29.7727 25.1923 29.6714 25.371 29.5352C25.7867 29.2183 26.1323 28.6908 26.0635 27.9345C25.9998 27.2339 25.6485 26.8127 25.2385 26.5533C24.9295 26.3656 24.5826 26.249 24.2229 26.212C23.6548 26.1827 23.2185 25.8689 23.2185 25.2995C23.2185 24.9858 23.3435 24.7558 23.5273 24.6183C23.9079 24.2958 24.5548 24.3395 24.8604 24.7445C24.9954 24.9239 25.056 25.1214 25.0698 25.2989C25.091 25.5739 25.3292 25.7939 25.6048 25.7727C25.8798 25.7514 26.0854 25.5358 26.0642 25.2602C26.0342 24.8643 25.8927 24.4851 25.656 24.1664C25.466 23.9145 25.1067 23.6727 24.8123 23.5514C24.7592 23.5315 24.7132 23.4963 24.68 23.4502C24.6469 23.4042 24.6281 23.3493 24.626 23.2927V22.8477Z" fill="url(#paint6_linear_6356_1957)"/>
</g>
<g filter="url(#filter4_i_6356_1957)">
<path d="M25.2628 18.6055H22.9928C22.63 18.6055 22.3359 18.8996 22.3359 19.2623V19.2667C22.3359 19.6295 22.63 19.9236 22.9928 19.9236H25.2628C25.6256 19.9236 25.9197 19.6295 25.9197 19.2667V19.2623C25.9197 18.8996 25.6256 18.6055 25.2628 18.6055Z" fill="url(#paint7_linear_6356_1957)"/>
<path d="M25.2628 18.6055H22.9928C22.63 18.6055 22.3359 18.8996 22.3359 19.2623V19.2667C22.3359 19.6295 22.63 19.9236 22.9928 19.9236H25.2628C25.6256 19.9236 25.9197 19.6295 25.9197 19.2667V19.2623C25.9197 18.8996 25.6256 18.6055 25.2628 18.6055Z" fill="url(#paint8_radial_6356_1957)"/>
</g>
<path d="M25.2628 18.6055H22.9928C22.63 18.6055 22.3359 18.8996 22.3359 19.2623V19.2667C22.3359 19.6295 22.63 19.9236 22.9928 19.9236H25.2628C25.6256 19.9236 25.9197 19.6295 25.9197 19.2667V19.2623C25.9197 18.8996 25.6256 18.6055 25.2628 18.6055Z" fill="url(#paint9_radial_6356_1957)"/>
<defs>
<filter id="filter0_i_6356_1957" x="16.7773" y="18.9277" width="15.3516" height="13.8047" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.625" dy="-0.9375"/>
<feGaussianBlur stdDeviation="1.09375"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.321569 0 0 0 0 0.211765 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_6356_1957"/>
</filter>
<filter id="filter1_ii_6356_1957" x="21.4062" y="15.1621" width="5.40234" height="3.56836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.125" dy="0.125"/>
<feGaussianBlur stdDeviation="0.09375"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.92549 0 0 0 0 0.403922 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_6356_1957"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.0625" dy="-0.15625"/>
<feGaussianBlur stdDeviation="0.15625"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.364706 0 0 0 0 0.12549 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_6356_1957" result="effect2_innerShadow_6356_1957"/>
</filter>
<filter id="filter2_f_6356_1957" x="21.8672" y="22.2246" width="4.26953" height="9.04102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.09375" result="effect1_foregroundBlur_6356_1957"/>
</filter>
<filter id="filter3_ii_6356_1957" x="22.1172" y="22.2227" width="4.05078" height="8.88477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.09375" dy="-0.125"/>
<feGaussianBlur stdDeviation="0.09375"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.352941 0 0 0 0 0.168627 0 0 0 0 0.188235 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_6356_1957"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.0625" dy="0.09375"/>
<feGaussianBlur stdDeviation="0.06875"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.670588 0 0 0 0 0.458824 0 0 0 0 0.403922 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_6356_1957" result="effect2_innerShadow_6356_1957"/>
</filter>
<filter id="filter4_i_6356_1957" x="22.3359" y="18.2305" width="3.58203" height="1.69336" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.375"/>
<feGaussianBlur stdDeviation="0.3125"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.388235 0 0 0 0 0.223529 0 0 0 0 0.109804 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_6356_1957"/>
</filter>
<radialGradient id="paint0_radial_6356_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.1518 21.0716) rotate(100.07) scale(11.5054 12.0506)">
<stop stop-color="#F6C93B"/>
<stop offset="1" stop-color="#E88340"/>
</radialGradient>
<radialGradient id="paint1_radial_6356_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.0432 22.8677) rotate(133.199) scale(4.39397 7.36162)">
<stop stop-color="#FFE065"/>
<stop offset="1" stop-color="#FFE065" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_6356_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.793 22.8684) rotate(31.6513) scale(3.34982 8.30206)">
<stop offset="0.187" stop-color="#FFA45D"/>
<stop offset="1" stop-color="#FFA45D" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint3_radial_6356_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.1405 29.7821) rotate(-90) scale(10.1953 15.3608)">
<stop offset="0.928" stop-color="#F3BD46" stop-opacity="0"/>
<stop offset="0.98" stop-color="#917011"/>
</radialGradient>
<linearGradient id="paint4_linear_6356_1957" x1="24.9225" y1="16.4321" x2="24.1388" y2="18.6046" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3C048"/>
<stop offset="1" stop-color="#E67A41"/>
</linearGradient>
<linearGradient id="paint5_linear_6356_1957" x1="24.0011" y1="22.619" x2="24.0011" y2="30.6271" gradientUnits="userSpaceOnUse">
<stop stop-color="#A6782C"/>
<stop offset="1" stop-color="#B95940"/>
</linearGradient>
<linearGradient id="paint6_linear_6356_1957" x1="26.2892" y1="27.672" x2="22.1798" y2="27.672" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D6360"/>
<stop offset="1" stop-color="#724A4D"/>
</linearGradient>
<linearGradient id="paint7_linear_6356_1957" x1="22.8341" y1="19.2648" x2="25.9197" y2="19.2648" gradientUnits="userSpaceOnUse">
<stop stop-color="#834B41"/>
<stop offset="1" stop-color="#735854"/>
</linearGradient>
<radialGradient id="paint8_radial_6356_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.2947 19.0598) rotate(180) scale(1.16699 0.878906)">
<stop stop-color="#7D5A54"/>
<stop offset="1" stop-color="#7D5A54" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint9_radial_6356_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.4509 19.2648) rotate(180) scale(3.45703 2.76939)">
<stop offset="0.695" stop-color="#B3624D" stop-opacity="0"/>
<stop offset="0.96" stop-color="#B3624D"/>
</radialGradient>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "Collateral",
    description: "Assets deposited as security for borrowing",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-indigo-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_1982)">
<path d="M23.632 14.1183C23.7385 14.0414 23.8665 14 23.9979 14C24.1292 14 24.2572 14.0414 24.3637 14.1183C24.8995 14.5049 26.1037 15.2116 27.6112 15.8191C29.1195 16.4274 30.8795 16.9166 32.5387 16.9166C32.7045 16.9166 32.8634 16.9824 32.9806 17.0996C33.0978 17.2169 33.1637 17.3758 33.1637 17.5416V24.0016C33.1637 26.5241 31.7445 28.8691 29.9654 30.6266C28.1879 32.3824 25.9429 33.6599 24.1045 33.9799L23.9979 33.9983L23.8904 33.9799C22.0529 33.6591 19.807 32.3824 18.0295 30.6266C16.2512 28.8691 14.832 26.5241 14.832 24.0016V17.5416C14.832 17.3758 14.8979 17.2169 15.0151 17.0996C15.1323 16.9824 15.2913 16.9166 15.457 16.9166C17.1162 16.9166 18.8762 16.4274 20.3854 15.8191C21.892 15.2108 23.0962 14.5041 23.632 14.1183Z" fill="url(#paint0_radial_6356_1982)"/>
</g>
<defs>
<radialGradient id="paint0_radial_6356_1982" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.63037 2.75079) rotate(54) scale(47.894 42.5548)">
<stop offset="0.338" stop-color="#0FAFFF"/>
<stop offset="0.529" stop-color="#367AF2"/>
<stop offset="0.682" stop-color="#5750E2"/>
<stop offset="0.861" stop-color="#CC23D1"/>
</radialGradient>
<clipPath id="clip0_6356_1982">
<rect width="18.3333" height="20" fill="white" transform="translate(14.832 14)"/>
</clipPath>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "Impermanent Loss",
    description: "Potential loss when providing liquidity compared to holding",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_1993)">
<path d="M26.4481 17.2891C26.2812 16.9906 26.0377 16.742 25.7427 16.5689C25.4476 16.3959 25.1118 16.3047 24.7698 16.3047C24.4278 16.3047 24.0919 16.3959 23.7969 16.5689C23.5019 16.742 23.2584 16.9906 23.0914 17.2891L15.7797 30.3681C15.6161 30.6607 15.5319 30.9909 15.5353 31.326C15.5387 31.6612 15.6296 31.9896 15.799 32.2788C15.9685 32.5679 16.2106 32.8078 16.5013 32.9745C16.792 33.1413 17.1213 33.2292 17.4565 33.2295H32.0769C32.4122 33.2294 32.7417 33.1418 33.0326 32.9751C33.3236 32.8085 33.5659 32.5686 33.7355 32.2794C33.9052 31.9902 33.9962 31.6617 33.9997 31.3264C34.0032 30.9911 33.9189 30.6608 33.7553 30.3681L26.4481 17.2891Z" fill="url(#paint0_linear_6356_1993)"/>
<path d="M25.9208 28.9982C25.9208 29.3042 25.7992 29.5977 25.5829 29.814C25.3665 30.0304 25.073 30.152 24.767 30.152C24.461 30.152 24.1676 30.0304 23.9512 29.814C23.7348 29.5977 23.6133 29.3042 23.6133 28.9982C23.6133 28.6922 23.7348 28.3988 23.9512 28.1824C24.1676 27.966 24.461 27.8444 24.767 27.8444C25.073 27.8444 25.3665 27.966 25.5829 28.1824C25.7992 28.3988 25.9208 28.6922 25.9208 28.9982ZM23.9979 25.5369V21.691C23.9979 21.4871 24.0789 21.2914 24.2232 21.1472C24.3674 21.0029 24.563 20.9219 24.767 20.9219C24.971 20.9219 25.1667 21.0029 25.3109 21.1472C25.4552 21.2914 25.5362 21.4871 25.5362 21.691V25.5369C25.5362 25.7409 25.4552 25.9366 25.3109 26.0808C25.1667 26.2251 24.971 26.3061 24.767 26.3061C24.563 26.3061 24.3674 26.2251 24.2232 26.0808C24.0789 25.9366 23.9979 25.7409 23.9979 25.5369Z" fill="url(#paint1_linear_6356_1993)"/>
</g>
<defs>
<linearGradient id="paint0_linear_6356_1993" x1="18.4179" y1="13.6601" x2="28.9603" y2="35.5754" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCD0F"/>
<stop offset="1" stop-color="#FE8401"/>
</linearGradient>
<linearGradient id="paint1_linear_6356_1993" x1="21.6903" y1="20.9219" x2="25.4839" y2="31.0365" gradientUnits="userSpaceOnUse">
<stop stop-color="#4A4A4A"/>
<stop offset="1" stop-color="#212121"/>
</linearGradient>
<clipPath id="clip0_6356_1993">
<rect width="20" height="18.4602" fill="white" transform="translate(14 14.7695)"/>
</clipPath>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "TVL",
    description: "Total value of assets deposited in a protocol",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="tvl icon"
        >
          <path
            d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "APR",
    description: "Simple interest rate earned over one year",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<path d="M16 28C16.8284 28 17.5 27.3284 17.5 26.5C17.5 25.6716 16.8284 25 16 25C15.1716 25 14.5 25.6716 14.5 26.5C14.5 27.3284 15.1716 28 16 28Z" fill="#6AFFAF"/>
<path d="M20 29C20.8284 29 21.5 28.3284 21.5 27.5C21.5 26.6716 20.8284 26 20 26C19.1716 26 18.5 26.6716 18.5 27.5C18.5 28.3284 19.1716 29 20 29Z" fill="#6AFFAF"/>
<path d="M24 25.5C24.8284 25.5 25.5 24.8284 25.5 24C25.5 23.1716 24.8284 22.5 24 22.5C23.1716 22.5 22.5 23.1716 22.5 24C22.5 24.8284 23.1716 25.5 24 25.5Z" fill="#6AFFAF"/>
<path d="M28 28C28.8284 28 29.5 27.3284 29.5 26.5C29.5 25.6716 28.8284 25 28 25C27.1716 25 26.5 25.6716 26.5 26.5C26.5 27.3284 27.1716 28 28 28Z" fill="#6AFFAF"/>
<path d="M32 22C32.8284 22 33.5 21.3284 33.5 20.5C33.5 19.6716 32.8284 19 32 19C31.1716 19 30.5 19.6716 30.5 20.5C30.5 21.3284 31.1716 22 32 22Z" fill="#6AFFAF"/>
<path d="M31.1492 19.9492C30.0992 21.5492 28.4992 23.9492 27.6992 25.1492C27.0992 24.7992 26.1492 24.1492 24.4992 23.1492L23.8492 22.7492L19.6992 26.3992L16.1992 25.5492L15.6992 27.4992L20.1992 28.6492L24.0492 25.2992C25.3492 26.0992 26.9492 27.0992 27.2992 27.3492L27.5492 27.5992L27.9992 27.5492C28.5492 27.4992 28.5492 27.4992 32.7492 21.0992L31.1492 19.9492Z" fill="#6AFFAF"/>
</svg>


      </div>
    ),
  },
  {
    title: "APY",
    description: "Compound interest rate earned over one year",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-teal-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_2036)">
<path d="M16.168 32.5C16.9964 32.5 17.668 31.8284 17.668 31C17.668 30.1716 16.9964 29.5 16.168 29.5C15.3395 29.5 14.668 30.1716 14.668 31C14.668 31.8284 15.3395 32.5 16.168 32.5Z" fill="#5CE3FE"/>
<path d="M20.168 33.5C20.9964 33.5 21.668 32.8284 21.668 32C21.668 31.1716 20.9964 30.5 20.168 30.5C19.3395 30.5 18.668 31.1716 18.668 32C18.668 32.8284 19.3395 33.5 20.168 33.5Z" fill="#5CE3FE"/>
<path d="M24.168 30C24.9964 30 25.668 29.3284 25.668 28.5C25.668 27.6716 24.9964 27 24.168 27C23.3395 27 22.668 27.6716 22.668 28.5C22.668 29.3284 23.3395 30 24.168 30Z" fill="#5CE3FE"/>
<path d="M28.168 31C28.9964 31 29.668 30.3284 29.668 29.5C29.668 28.6716 28.9964 28 28.168 28C27.3395 28 26.668 28.6716 26.668 29.5C26.668 30.3284 27.3395 31 28.168 31Z" fill="#5CE3FE"/>
<path d="M32.168 29C32.9964 29 33.668 28.3284 33.668 27.5C33.668 26.6716 32.9964 26 32.168 26C31.3395 26 30.668 26.6716 30.668 27.5C30.668 28.3284 31.3395 29 32.168 29Z" fill="#5CE3FE"/>
<path d="M31.718 26.5996L28.068 28.4496L23.918 27.3996L19.918 30.8996L16.418 30.0496L15.918 31.9496L20.418 33.0996L24.418 29.5996L28.268 30.5496L32.618 28.3996L31.718 26.5996Z" fill="#5CE3FE"/>
<path d="M16.168 23.5C16.9964 23.5 17.668 22.8284 17.668 22C17.668 21.1716 16.9964 20.5 16.168 20.5C15.3395 20.5 14.668 21.1716 14.668 22C14.668 22.8284 15.3395 23.5 16.168 23.5Z" fill="#6AFFAF"/>
<path d="M20.168 24.5C20.9964 24.5 21.668 23.8284 21.668 23C21.668 22.1716 20.9964 21.5 20.168 21.5C19.3395 21.5 18.668 22.1716 18.668 23C18.668 23.8284 19.3395 24.5 20.168 24.5Z" fill="#6AFFAF"/>
<path d="M24.168 21C24.9964 21 25.668 20.3284 25.668 19.5C25.668 18.6716 24.9964 18 24.168 18C23.3395 18 22.668 18.6716 22.668 19.5C22.668 20.3284 23.3395 21 24.168 21Z" fill="#6AFFAF"/>
<path d="M28.168 23.5C28.9964 23.5 29.668 22.8284 29.668 22C29.668 21.1716 28.9964 20.5 28.168 20.5C27.3395 20.5 26.668 21.1716 26.668 22C26.668 22.8284 27.3395 23.5 28.168 23.5Z" fill="#6AFFAF"/>
<path d="M32.168 17.5C32.9964 17.5 33.668 16.8284 33.668 16C33.668 15.1716 32.9964 14.5 32.168 14.5C31.3395 14.5 30.668 15.1716 30.668 16C30.668 16.8284 31.3395 17.5 32.168 17.5Z" fill="#6AFFAF"/>
<path d="M31.3172 15.4492C30.2672 17.0492 28.6672 19.4492 27.8672 20.6492C27.2672 20.2992 26.3172 19.6492 24.6672 18.6492L24.0172 18.2492L19.8672 21.8992L16.3672 21.0492L15.8672 22.9992L20.3672 24.1492L24.2172 20.7992C25.5172 21.5992 27.1172 22.5992 27.4672 22.8492L27.7172 23.0992L28.1672 23.0492C28.7172 22.9992 28.7172 22.9992 32.9172 16.5992L31.3172 15.4492Z" fill="#6AFFAF"/>
</g>
<defs>
<clipPath id="clip0_6356_2036">
<rect width="20" height="20" fill="white" transform="translate(14 14)"/>
</clipPath>
</defs>
</svg>


      </div>
    ),
  },
  {
    title: "Swap",
    description: "Exchange one token for another at market price",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<g clip-path="url(#clip0_6356_2059)">
<path d="M15.1111 20.6662H29.5556L27.7778 21.9996C27.661 22.0871 27.5627 22.1968 27.4884 22.3223C27.414 22.4479 27.3651 22.5869 27.3445 22.7313C27.3239 22.8758 27.3319 23.0229 27.3681 23.1642C27.4043 23.3056 27.468 23.4384 27.5556 23.5551C27.6591 23.6931 27.7933 23.8051 27.9475 23.8823C28.1018 23.9594 28.272 23.9996 28.4444 23.9996C28.6849 23.9996 28.9188 23.9216 29.1111 23.7773L33.5556 20.444C33.6915 20.3403 33.8016 20.2067 33.8774 20.0535C33.9532 19.9002 33.9927 19.7316 33.9927 19.5607C33.9927 19.3897 33.9532 19.2211 33.8774 19.0679C33.8016 18.9147 33.6915 18.781 33.5556 18.6773L29.2667 15.344C29.0339 15.1628 28.7386 15.0814 28.4458 15.1179C28.1531 15.1544 27.8868 15.3056 27.7056 15.5384C27.5243 15.7712 27.443 16.0665 27.4795 16.3593C27.5159 16.652 27.6672 16.9183 27.9 17.0996L29.6444 18.444H15.1111C14.8164 18.444 14.5338 18.5611 14.3254 18.7694C14.1171 18.9778 14 19.2604 14 19.5551C14 19.8498 14.1171 20.1324 14.3254 20.3408C14.5338 20.5492 14.8164 20.6662 15.1111 20.6662ZM32.8889 28.444H18.4444L20.2222 27.1107C20.458 26.9339 20.6138 26.6706 20.6555 26.3789C20.6972 26.0872 20.6213 25.7909 20.4444 25.5551C20.2676 25.3194 20.0044 25.1635 19.7127 25.1218C19.421 25.0802 19.1246 25.1561 18.8889 25.3329L14.4444 28.6662C14.3085 28.7699 14.1984 28.9036 14.1226 29.0568C14.0468 29.21 14.0073 29.3786 14.0073 29.5496C14.0073 29.7205 14.0468 29.8891 14.1226 30.0423C14.1984 30.1955 14.3085 30.3292 14.4444 30.4329L18.7333 33.7662C18.9273 33.9167 19.1656 33.9988 19.4111 33.9996C19.5808 33.9992 19.7481 33.9599 19.9003 33.8848C20.0524 33.8097 20.1854 33.7007 20.2889 33.5662C20.4693 33.3346 20.5507 33.041 20.5153 32.7495C20.48 32.458 20.3306 32.1924 20.1 32.0107L18.3556 30.6662H32.8889C33.1836 30.6662 33.4662 30.5492 33.6746 30.3408C33.8829 30.1324 34 29.8498 34 29.5551C34 29.2604 33.8829 28.9778 33.6746 28.7694C33.4662 28.5611 33.1836 28.444 32.8889 28.444Z" fill="#D35CFE"/>
</g>
<defs>
<clipPath id="clip0_6356_2059">
<rect width="20" height="20" fill="white" transform="translate(14 14)"/>
</clipPath>
</defs>
</svg>

      </div>
    ),
  },
  {
    title: "Bridge",
    description: "Transfer assets between different blockchains",
    icon: (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-yellow-500/10">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
<path d="M32.1251 26.1875H29.9376V22.7102C30.4722 23.21 31.0943 23.6072 31.7727 23.882C32.0032 23.9753 32.2613 23.9731 32.4903 23.8761C32.7192 23.779 32.9002 23.595 32.9934 23.3645C33.0867 23.1339 33.0845 22.8758 32.9874 22.6469C32.8904 22.418 32.7063 22.237 32.4758 22.1437C31.7242 21.8417 31.0805 21.321 30.628 20.6491C30.1755 19.9773 29.9349 19.1851 29.9376 18.375C29.9376 18.1264 29.8388 17.8879 29.663 17.7121C29.4871 17.5363 29.2487 17.4375 29.0001 17.4375C28.7514 17.4375 28.513 17.5363 28.3371 17.7121C28.1613 17.8879 28.0626 18.1264 28.0626 18.375C28.0626 19.4524 27.6345 20.4858 26.8727 21.2476C26.1108 22.0095 25.0775 22.4375 24.0001 22.4375C22.9226 22.4375 21.8893 22.0095 21.1274 21.2476C20.3656 20.4858 19.9376 19.4524 19.9376 18.375C19.9376 18.1264 19.8388 17.8879 19.663 17.7121C19.4871 17.5363 19.2487 17.4375 19.0001 17.4375C18.7514 17.4375 18.513 17.5363 18.3371 17.7121C18.1613 17.8879 18.0626 18.1264 18.0626 18.375C18.0648 19.1849 17.824 19.9768 17.3714 20.6484C16.9187 21.32 16.275 21.8403 15.5235 22.1422C15.293 22.2354 15.1089 22.4164 15.0119 22.6453C14.9148 22.8743 14.9127 23.1324 15.0059 23.3629C15.0992 23.5934 15.2801 23.7774 15.5091 23.8745C15.738 23.9716 15.9961 23.9737 16.2266 23.8805C16.905 23.6057 17.5271 23.2084 18.0618 22.7086V26.1875H15.8751C15.6264 26.1875 15.388 26.2863 15.2121 26.4621C15.0363 26.6379 14.9376 26.8764 14.9376 27.125C14.9376 27.3736 15.0363 27.6121 15.2121 27.7879C15.388 27.9637 15.6264 28.0625 15.8751 28.0625H18.0626V29.625C18.0626 29.8736 18.1613 30.1121 18.3371 30.2879C18.513 30.4637 18.7514 30.5625 19.0001 30.5625C19.2487 30.5625 19.4871 30.4637 19.663 30.2879C19.8388 30.1121 19.9376 29.8736 19.9376 29.625V28.0625H28.0626V29.625C28.0626 29.8736 28.1613 30.1121 28.3371 30.2879C28.513 30.4637 28.7514 30.5625 29.0001 30.5625C29.2487 30.5625 29.4871 30.4637 29.663 30.2879C29.8388 30.1121 29.9376 29.8736 29.9376 29.625V28.0625H32.1251C32.3737 28.0625 32.6121 27.9637 32.788 27.7879C32.9638 27.6121 33.0626 27.3736 33.0626 27.125C33.0626 26.8764 32.9638 26.6379 32.788 26.4621C32.6121 26.2863 32.3737 26.1875 32.1251 26.1875ZM24.9376 24.2383V26.1875H23.0626V24.2383C23.6836 24.3372 24.3165 24.3372 24.9376 24.2383ZM19.9376 22.7016C20.3136 23.0546 20.7337 23.3573 21.1876 23.6023V26.1875H19.9376V22.7016ZM26.8126 26.1875V23.6023C27.2664 23.3573 27.6866 23.0546 28.0626 22.7016V26.1875H26.8126Z" fill="#FFFA6A"/>
</svg>

      </div>
    ),
  },
];
