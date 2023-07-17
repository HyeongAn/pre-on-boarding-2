import Link from "next/link";

const Header = () => {
  return (
    <div className="headBox">
      <h1>{`YoonHu's Blog`}</h1>
      <div className="headLinkBox">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
