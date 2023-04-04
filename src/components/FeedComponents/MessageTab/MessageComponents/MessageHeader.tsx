import React from "react";
import Image from "next/image";
import ProfileImageMessageTab from "../../../../assets/download.png";
import Link from "next/link";
function MessageHeader({ closeMessage }: { closeMessage: () => void }) {
    return (
        <div className="w-full ">
            <div className=" w-full flex flex-col justify-around items-center gap-4  bg-slate-800 relative ">
                <div className="w-full flex flex-row items-center gap-4 pl-3">
                    <Image
                        className="avatar img-fluid w-12 rounded-full my-3"
                        src={ProfileImageMessageTab}
                        alt="Avatar"
                    />
                    <Link href={"#"} className="text-white">
                        Niptu Diptu
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute right-2 top-6 text-white hover:rotate-90 duration-300 cursor-pointer"
                        onClick={closeMessage}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default MessageHeader;
