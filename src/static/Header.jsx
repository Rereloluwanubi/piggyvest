
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import Button from "../components/reuseable/Button";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Header = () => {
const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };



  
    // <div>
    //   {/* <section className="flex justify-between items-center gap-4">
    //     <img
    //       src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg "
    //       alt="Logo"
    //     />
    //     <div>Save</div>
    //     <div>Invest</div>
    //     <div>Stories</div>
    //     <div>FAQS</div>
    //     <div>Resources</div>
    //   </section>
    //   <section className="bg-blue-950 text-white px-4 py-2 rounded-md flex items-center gap-2">
    //     <button>Sign in</button>
    //     <button>Create free Account</button>
    //     </section> */}
    
      // {/* <h1>This is the Header</h1>
      // <ul>
      //   <Link to="/">
      //     <li>Home</li>
      //   </Link>
      //   <Link to="/about">
      //     <li>About</li>
      //   </Link>
      //   <Link to="/contact">
      //     <li>Contact</li>
      //   </Link>
      //   <Link to="/footer">
      //     <li>Footer</li>
      //   </Link>
      // </ul> */}
    return (
    <>
      <header className=" h-24 ">
        <div className=" max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between">
          <section className=" flex">
            <Link to="/">
              <main>
                <img src="./logo.svg" alt="" />
              </main>
            </Link>
            <main className=" flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
              <nav className=" flex items-center gap-0.5">
                <span>Save</span>
                <span>
                  <LuChevronDown size={20} />
                </span>
              </nav>
              <Link to="/invest">
                <nav>Invest</nav>
              </Link>
              <Link to="/stories">
                <nav>Stories</nav>
              </Link>
              <nav>FAQs</nav>
              <nav className=" flex items-center gap-0.5">
                {" "}
                <span>Resources</span>
                <span>
                  {" "}
                  <LuChevronDown />{" "}
                </span>
              </nav>
            </main>
          </section>
          <section className=" flex gap-2 max-tablet:hidden">
            <Button title="Sign In" borderColor="#122231" />
            <Button
              title="Create free Account"
              bgColor="#122231"
              textColor="#fff"
            />
          </section>
          <section className=" hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>
      </header>


        <div> {toggle && <Sidebar handleToggle={handleToggle} />}</div>
        </>
  );
};

export default Header;
