"use client";

import React from "react";

export default function ChevronButton({ isOpen }: { isOpen: boolean }): React.JSX.Element {
    return (
        <div className="w-6 h-6 mr-3 flex items-center justify-center">
                {isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-chevron-compact-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"
                    />
                  </svg>
                )}
                {!isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.776 10.447a.5.5 0 0 1-.448 0l-6-3a.5.5 0 1 1 .448-.894L8 9.44l5.224-2.947a.5.5 0 1 1 .448.894l-6 3z"
                    />
                  </svg>
                )}
              </div>
    )
}