import Link from "next/link";
import React from "react";

const CardDropdown = ({
    dropdown,
    toggle,
}: {
    dropdown: boolean;
    toggle: () => void;
}) => {
    return (
        <div
            className={`h-auto relative right-2 top-0 rounded-t-lg text-white w-24 ${
                dropdown && "bg-slate-950"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 ml-6"
                onClick={toggle}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
            </svg>

            {dropdown && (
                <div className="w-24 text-blue-600 bg-slate-950 flex flex-col gap-2 absolute top-6 right-0 rounded-xl rounded-tr-none overflow-hidden pb-2">
                    <p className="hover:bg-gray-300 text-center">Link One</p>
                    <p className="hover:bg-gray-300 text-center">Link Two</p>
                    <p className="hover:bg-gray-300 text-center">Link Three</p>
                    <p className="hover:bg-gray-300 text-center">Link Four</p>
                    <p className="hover:bg-gray-300 text-center">Link Five</p>
                    <p className="hover:bg-gray-300 text-center">Link Six</p>
                    <p className="hover:bg-gray-300 text-center">link Seven</p>
                </div>
            )}
        </div>
    );
};

export default CardDropdown;