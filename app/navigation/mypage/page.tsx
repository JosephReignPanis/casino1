"use client";
export default function Home() {
  const userinfo = [
    { label: "아이디", value: "gun8005" },
    { label: "닉네임", value: "건바리" },
    { label: "은행", value: "하나은행" },
    { label: "계좌번호", value: "891910039*****" },
    { label: "비밀번호", value: "비밀번호 변경은 고객센터로 문의해주세요." },
  ];
  return (
    <>
      <div className="col-span-8 gap-1">
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          마이페이지
        </p>
        <div className="w-full bg-neutral-900 divide-y divide-neutral-800">
          {userinfo.map((items, i) => (
            <div key={i} className="flex flex-col md:flex-row p-3">
              <div className="w-full md:w-1/6 text-neutral-400">
                {items.label}
              </div>
              <div className="w-full md:w-2/6 text-white">{items.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
    