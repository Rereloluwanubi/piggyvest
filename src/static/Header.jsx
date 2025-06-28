import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
    <div >
      <h1>This is the Header</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
