import { useState } from "react";

// 훅은 반드시 함수 컴포넌트 + 커스텀 훅 내부에서만 호출가능
// 조건부로 호출될 수 없다


const HookExam = () => {
    
  const state = useState();
  return <div>HookExam</div>;
};

export default HookExam;
