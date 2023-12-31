const Footer = () => {
  return (
    <div className="footerBox">
      <div>
        <p>{`CopyRight. YoonHu's Blog`}</p>
        <p>FrontEnd Developer</p>
        <p>공부한것을 적어두고 기록해두는 블로그입니다.</p>
        <div className="footerLinks">
          <a href="https://github.com/HyeongAn">Git</a>
          <a href="https://www.notion.so/87d3f1d26daf49368f9dfe7119f2cb84?pvs=4">
            Notion
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
