import Layout from "../components/layout";
// import Router from "next/router";
// import Image from "next/image";
// import { useContact } from "../hooks/useMail";

export default function Contact() {
  // const { setName, setMessage, setEmail, send } = useMail();
  // const registerUser = async (event) => {
  //   event.preventDefault();

  //   const res = await fetch("/api/send", {
  //     body: JSON.stringify({
  //       name: event.target.name.value,
  //       email: event.target.email.value,
  //       message: event.target.message.value,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });

  //   const result = await res.json();
  // };
  
  return (
    <Layout title="Contact">
      <form onSubmit={registerUser}>
        <div className="w-full md:w-96c mx-auto my-10 px-10">
          <div className="p-6 border border-gray-300 sm:rounded-md lg:w-96">
            {/* <form method="POST" action="../contact.php"> */}
              <label className="block mb-6">
                <span className="text-gray-700">お名前</span>
                <input
                  type="text"
                  // onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="hogehoge"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">メールアドレス</span>
                <input
                  name="email"
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="hoge@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">メッセージ</span>
                <textarea
                  // onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="6"
                  placeholder="ご意見などありましたらお申し付けください"
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  // onClick={send}
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  送信
                </button>
              </div>
            {/* </form> */}
          </div>
        </div>
      </form>
    </Layout>
  );
}
