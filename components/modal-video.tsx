"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video thumbnail */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-200"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="opacity-50 grayscale"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>
        {/* Play icon */}
        <span className="pointer-events-none absolute p-3.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM13.5 10L8.5 6.5V13.5L13.5 10Z"
                fill="url(#paint0_linear_201_46)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_46"
                  x1="-1.34152e-07"
                  y1="6.09014"
                  x2="20"
                  y2="13.9099"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEAFFF" />
                  <stop offset="1" stop-color="#F495FF" />
                </linearGradient>
              </defs>
            </svg>

            <span className="text-sm font-medium leading-tight text-gray-300">
              Overview
              <span className="text-gray-600"> - </span>
              1:31
            </span>
          </span>
        </span>
      </button>
      {/* End: Video thumbnail */}

      <Dialog
        initialFocus={videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed flex items-center justify-center inset-0 z-[99999] px-4 py-6 sm:px-6 ">
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel transition className="w-[100vw] p-3">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  paddingTop: "56.25%", // 16:9 Aspect Ratio
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src="https://www.youtube.com/embed/KL3Sfbh8jic?si=L46pQSAdZF69jzig"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
