"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import logo from "@/public/logo.png";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [providers, setProviders] = useState(null);
  const[isAuthanticated,setisAuthanticated] = useState(true);
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);

  const handleSignInClick = () => {
    router.push('/register'); // Replace '/signin' with your actual sign-in route
  }
  
  const toggleDropdown = () => {
    // e.preventDefault();
    console.log("Dropdown toggled");
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="font-sans text-lg bg-fixed bg-to dark:bg-slate-800 dark:text-white  ">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center ml-auto mr-auto rounded-full overflow-hidden mt-2 mb-2"
        >
          <Image src={logo} width={100} height={100} alt="Company Logo" priority />
        </Link>
        <ul className="hidden md:flex space-x-6 tracking-wide transition duration-300 ease-in-out">
          <li>
            <Link href="/" className="hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/doctors" className="hover:font-semibold">
              Find Doctor
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:font-semibold">
              About Us
            </Link>
          </li>
        </ul>
        <div className="relative ml-auto mr-auto">
          {session?.user ? (
            <button
              onClick={() => toggleDropdown()}
              // onClick={alert("hi")}  
              className="rounded-full overflow-hidden"
            >
              {/* <Link href="/profile" className="flex items-center ml-auto mr-auto rounded-full overflow-hidden mt-2 mb-2"> */}
              <Image src={logo} width={100} height={100} alt="User Profile" />
              {/* </Link> */}
            </button>
          ) : (
            <div className="flex items-center ml-auto mr-auto">
              <button onClick={()=>handleSignInClick()} className="mr-1">Login /</button>
              <button className="ml-1">Sign Up</button>
            </div>
          )}
          {dropdownOpen && (
            <div className="absolute pt-1 bg-white rounded-md shadow-md">
              <ul className="py-2 px-4">
                <li>
                  <Link
                    href="/profile"
                    className="flex px-2 py-1 hover:bg-gray-200 w-24 rounded-md justify-center" 
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={() => signOut()}
                    className="flex px-2 py-1 hover:bg-gray-200 w-24 rounded-md justify-center text-red-600"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}