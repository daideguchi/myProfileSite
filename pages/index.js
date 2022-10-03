// import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="myprofile">
      {/* プロフトップーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      <div className="md:flex bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/profile.JPG"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="profile"
            width={"384"}
            height={"413"}
          />
        </div>
        <div>
          <div className="px-10 py-1">
            <h1 className="text-2xl font-bold mt-10">
              About Me（Dai Deguchi）
            </h1>
          </div>
          <div className="px-10 py-3">
            <p className="text-red-500">・ホームページは随時更新中</p>
            <p>
              ・2022年、現在政令市の公務員として勤務しながら、エンジニアとして転職→起業を目指すべく日々猛勉強中。
            </p>
            <p>
              ・半年間、起業家エンジニア養成スクール「G’s
              Academy」を卒業し、PHPのプロダクトを制作。
            </p>
            <p>
              ・主にブロックチェーン技術やDAppsの開発に興味があり、主にWeb3.0周りの知識を習得中。
            </p>
            <p>
              ・このプロフィールサイトは、勉強のためでもあり、自分の紹介や活動記録などをまとめるために構築したものです。
            </p>
            <p>
              【このサイトの技術選定】Next.js , tailwind.css（DaisyUI）,
              vercel（デプロイ）
            </p>
            <br />
            <p>
              趣味：サウナ・サーフィン・英会話・FXトレード・不動産・世界一周旅行を計画中✈️
            </p>
          </div>
          {/* <button class="btn btn-primary">Get Started</button> */}
          <div className="px-10 py-5 border-t bg-base-200 text-base-content border-red-800">
            <h1 className="text-2xl font-bold my-5">各種SNSリンク</h1>

            {/* -Github- */}
            <span
              className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
              data-tip="GitHub"
            >
              <div className="flex-none items-center">
                <a
                  aria-label="Github"
                  target="_blank"
                  href="https://github.com/daideguchi"
                  rel="noreferrer"
                  className="btn btn-ghost drawer-button btn-square normal-case"
                >
                  <svg
                    width="34"
                    height="34"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-current"
                  >
                    <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
                  </svg>
                </a>
              </div>
            </span>
            {/* -- */}
            {/* -twitter- */}
            <span
              className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
              data-tip="Twitter"
            >
              <div className="flex-none items-center">
                <a
                  aria-label="Twitter"
                  target="_blank"
                  href="https://twitter.com/dai_fukuoka"
                  rel="noreferrer"
                  className="btn btn-ghost drawer-button btn-square normal-case"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </div>
            </span>
            {/* -- */}
            {/* -Facebook- */}
            <span
              className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
              data-tip="Facebook"
            >
              <div className="flex-none items-center">
                <a
                  aria-label="Facebook"
                  target="_blank"
                  href="https://www.facebook.com/dai.deguchi.90"
                  rel="noreferrer"
                  className="btn btn-ghost drawer-button btn-square normal-case"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </span>
            {/* -- */}
            {/* -Instagram- */}
            <span
              className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
              data-tip="Instagram"
            >
              <div className="flex-none items-center">
                <a
                  aria-label="Instagram"
                  target="_blank"
                  href="https://www.instagram.com/kou_investors/"
                  rel="noreferrer"
                  className="btn btn-ghost drawer-button btn-square normal-case"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 130 130"
                    className="fill-current"
                  >
                    <path d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z" />
                  </svg>
                </a>
              </div>
            </span>
            {/* -- */}
            {/* -Youtube- */}
            <span
              className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
              data-tip="Youtube（準備中）"
            >
              <div className="flex-none items-center">
                <a
                  aria-label="Youtube"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost drawer-button btn-square normal-case"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </span>
            {/* -- */}
            {/* -Linkedin- */}
            <span
              className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
              data-tip="Linkedin"
            >
              <div className="flex-none items-center">
                <a
                  aria-label="Linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/daideguchi"
                  rel="noreferrer"
                  className="btn btn-ghost drawer-button btn-square normal-case"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </span>
            {/* -- */}
          </div>
        </div>
      </div>

      <div className="md:flex">
        {/* リンクーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        {/* 経歴 */}
        <div className="card lg:w-96 xl:w-96 bg-base-100 shadow-xl mx-2 my-2">
          <div className="card-body">
            <div className="flex">
              <h2 className="card-title mr-2">経歴</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <p>1989年:福岡県に出生</p>
            <p>2008年:高校（情報学科）卒</p>
            <p>2013年:大学（商学部）卒</p>
            <p>2014年:政令市就職</p>
            <p>2022年:G’s Academy DEV10期 卒</p>
            <div className="card-actions justify-end">
              <a
                href="https://coffee-swift-6d0.notion.site/49ba7e156ea545fd8c1bfac08a9b68c6"
                type="button"
                target="blank"
                className="btn btn-outline btn-primary"
              >
                詳細
              </a>
            </div>
          </div>
        </div>

        {/* スキル */}
        <div className="card lg:w-96 xl:w-96 bg-base-100 shadow-xl mx-2 my-2">
          <div className="card-body">
            <div className="flex">
              <h2 className="card-title mr-2">スキル</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <p>・Microsoft Office（全般）</p>
            <p>・Wordpress（構築・設計・運用）</p>
            <p>・ExcelVBA（大学専攻）</p>
            <p>・javascript</p>
            <p>・PHP</p>
            <p>・MYSQL</p>
            <p>・Github関連</p>
            <p>・Next.js : React（学習中）</p>
            <p>・solidity（学習中）</p>
            <p>・クラウドファンディング / A to Z</p>
            <div className="card-actions justify-end">
              <a
                href="https://coffee-swift-6d0.notion.site/90dd8f0badf14bcfaed6a4e451eeffe3"
                type="button"
                target="blank"
                className="btn btn-outline btn-primary"
              >
                詳細
              </a>{" "}
            </div>
          </div>
        </div>

        {/* 今後 */}
        <div className="card lg:w-96 xl:w-96 bg-base-100 shadow-xl mx-2 my-2">
          <div className="card-body">
            <div className="flex">
              <h2 className="card-title mr-2">今後について</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <p>・まずはエンジニア（IT）業界に入る</p>
            <p>・エンジニアコミュニティともっと繋がる</p>
            <p>・スタートアップの現場で起業のノウハウを学ぶ</p>
            <p>・DappsなどWeb3.0関連のプロダクトを開発する</p>
            <div className="card-actions justify-end">
              <a
                href="https://coffee-swift-6d0.notion.site/c4a8c56538b04313b5a148b2bc6d62fd"
                type="button"
                target="blank"
                className="btn btn-outline btn-primary"
              >
                詳細
              </a>
            </div>
          </div>
        </div>

        {/* ブログ */}
        <div className="card lg:w-96 xl:w-96 bg-base-100 shadow-xl mx-2 my-2">
          <div className="card-body">
            <div className="flex">
              <h2 className="card-title mr-2">ブログ</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <p>
              <a
                href="https://daideguchi.github.io/tec_studies_blog/"
                target="blank"
                className="link link-hover link-primary"
              >
                学習アウトプット（Web3.0）
              </a>
              【Hugoを使用しSSGサイトを構築し、マークダウン記法で記事を書いている】
            </p>
            {/* <a className="link link-hover">- ブログのリンクを貼る</a> */}
            {/* <a className="link link-hover">- ブログのリンクを貼る</a> */}
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <br />
      <hr />

      {/* ポートフォリオーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      <div className="flex-col">
        <div>
          {/* ポートフォリオーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
          <hr />
          <h2 className="mt-10 flex justify-center text-2xl mb-5">
            Portfolio（開発中・考案中のもの含む）
          </h2>

          {/* ポートフォリオ１ */}
          <div className="card lg:card-side bg-base-300 shadow-xl w-full">
            <figure>
              <Image src="/gs.webp" width={"300"} height={"300"} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4">
                G’s Academyで学習したプロダクト集
              </h2>
              <p>
                半年間で製作した作品集。全てが完璧ではないが、経験は大きな資産になった
              </p>
              <p>レスポンシブには基本対応させていないため、PCでの閲覧推奨</p>
              <p>
                卒業制作においても、完璧な仕上がりではないが楽しく開発することができた。
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://gsacademy.jp/?utm_source=google&utm_medium=cpc&utm_campaign=GoogleAds_FUK_SRCH_AT-Brand_2021-03-07"
                  type="button"
                  target="blank"
                  className="btn"
                >
                  G’s Academy 公式
                </a>
                <a
                  href="https://github.com/daideguchi/Gs_Academy"
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          {/* ポートフォリオ２ */}
          <br />
          <div className="card lg:card-side bg-base-300 shadow-xl w-full">
            <figure>
              <Image
                src="/nextjs.png"
                width={"300"}
                height={"300"}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4">My Profile（このサイト）</h2>
              <p>このwebサイト</p>
              <p>Nextjs,Tailwindにて構築。レスポンシブにも対応</p>
              <p>TailwindのフレームワークとしてDaisyUIを使用</p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/daideguchi/myProfileSite"
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          {/* ポートフォリオ3 */}
          <br />
          <div className="card lg:card-side bg-base-300 shadow-xl w-full">
            <figure>
              <Image
                src="/facebook_profile_image.png"
                width={"300"}
                height={"300"}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4">NFT-Garege</h2>
              <p>
                MetaMaskのウォレットを接続し、所有しているNFTを表示させるアプリケーション
              </p>
              <p>
                スマートコントラクト実装：solidityでトークン発行、移転、預入、引出機能の実装
              </p>
              <p>Rinkebyにデプロイ：テストネットにデプロイ</p>

              <p>NFTを発行・表示：solidityでNFTをmint</p>
              <p>
                Nextjs,Tailwind(flowbiteフレームワークを使用)：MetaMaskに接続するロジック。NFT保有等条件によってダッシュボードの表示内容を変更
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://nft-garage.vercel.app/"
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  プロダクトページ
                </a>
                <a
                  href="https://github.com/daideguchi/NFT-Garage"
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          {/* ポートフォリオ4 */}
          <br />
          <div className="card lg:card-side bg-base-300 shadow-xl w-full">
            <figure>
              <Image
                src="/crypt.png"
                width={"300"}
                height={"300"}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4">Crypt Asset Hall</h2>
              <p>
                考えているプロダクトの中では、一番実現させたいプロダクト。自分も使いたいと思っている。
              </p>
              <p>
                現在構想途中。クリプト資産総額を一括で管理できるアプリケーション
              </p>
              <p>
                取引所APIに加え、ウォレットを登録することで、全てのチェーンの保有しているトークンとNFT情報を表示させる
              </p>
              <p>まだまだ初期の構想段階</p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/daideguchi/Gs_Academy"
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  Github準備中
                </a>
              </div>
            </div>
          </div>
          {/* ポートフォリオ5 */}
          <br />
          <div className="card lg:card-side bg-base-300 shadow-xl w-full">
            <figure>
              <Image
                src="/devsupporter.png"
                width={"300"}
                height={"300"}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4">Dev Supporter</h2>
              <p>
                まだまだロジックを組み立てている段階だが、実現させたいプロダクト
              </p>
              <p>web開発者を応援するクラウドファンディングプラットフォーム</p>
              <p>
                技術選定：front【nextjs,Tailwind】、back【solidity(EVM),Djangoを少々】、DB【BlockChain
                or PostgrSQLを少々触る予定】
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/daideguchi/DevSupporter"
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          {/* ポートフォリオ6 */}
          <br />
          <div className="card lg:card-side bg-base-300 shadow-xl w-full">
            <figure>
              <Image src="/byte.png" width={"300"} height={"300"} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4">Byte Work</h2>
              <p>
                開発者向けのプラットフォーム</p>
              <p>
                主に、困りごとや、簡単な質問からコーディング依頼まで、さまざまな課題を有志たちが手助けをすることで、
              </p>
              <p>
                その有志に対してトークンとして報酬が配られるようなプロダクト
              </p>
              <p>
                世の中にはYahoo知恵袋などでも、本当に良質で生産性の高い回答をする人もいるが、報酬の面で報われない。
              </p>
              <p>
                もちろん自己満足にはなっていると思うが、そこに報酬というエコシステムを加えることで、世の中にもっと良質な回答や支援者が現れ、
              </p>
              <p>相乗効果で生産性が上がると思う。</p>
              <p>
                また、このエコシステムの設計がうまくいけば、新しい働き方になり、ギグワークをさらに細分化したような労働ができる世界になる。
              </p>
              <div className="card-actions justify-end">
                <a
                  href=""
                  type="button"
                  target="blank"
                  className="btn btn-primary"
                >
                  Github準備中
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
