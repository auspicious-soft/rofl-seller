"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HostItemDetail = () => {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccessModalOpen(true);
      }, 500);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#E6E6E6] p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT – Images */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/images/iphone.svg"
                  alt=""
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-55 object-cover"
                />
              </div>

              <div className="flex gap-2">
                <Image
                  src="/images/iphone.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover"
                />
              </div>
            </div>

            {/* RIGHT – Info */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <h2 className="text-lg sm:text-[22px] [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison text-[#F04C2E]">
                  gfdgdf
                </h2>

                <div className="mt-4 sm:mt-6 space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="text-gray-400 text-xs">Total Spots</p>
                    654
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Total Pot</p>
                    65
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Platform Fee</p>
                    $ 656
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="text-gray-400 text-xs">Desired Net Payout</p>
                  <p className="text-xl sm:text-[22px] magison text-[#F04C2E]">
                    $ 65
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Ticket Price</p>
                  $ 655
                </div>
                <div>
                  <p className="text-gray-400 text-xs">IRS Withholding</p>
                  $ 654
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Processing Fee</p>
                  $ 654
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-4 sm:gap-6 mt-6">
          <button
            onClick={() => setScheduleModalOpen(true)}
            className="text-sm underline text-gray-600 text-center sm:text-left"
          >
            Schedule Item
          </button>

          <button
            onClick={handlePublish}
            disabled={loading}
            className="bg-[#F04C2E] w-full sm:w-52 h-14 border border-black text-white rounded-xl flex items-center justify-center gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Publish"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ================= SUCCESS MODAL ================= */}
      {successModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 text-center relative">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/success.svg"
                alt="Success"
                width={48}
                height={48}
              />
            </div>

            <h2 className="text-2xl sm:text-4xl font-normal [text-shadow:2px_2px_0px_rgb(0_0_0/1.00)] magison text-[#F2482D] mb-2">
              Your item is now live!
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Share it with your friends and followers to sell out faster.
            </p>

            <div className="flex justify-center flex-wrap gap-3 mb-6">
              {["Facebook", "instagram", "twitter", "pintrust"].map((icon) => (
                <Image
                  key={icon}
                  src={`/icons/${icon}.svg`}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 p-2 rounded-full bg-[#F04C2E] cursor-pointer"
                />
              ))}
            </div>

            <button
              onClick={() => setSuccessModalOpen(false)}
              className="w-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] rounded-xl py-3 text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HostItemDetail;
