"use client";
import { useTranslation } from "react-i18next";

const MoreToComeCard = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      {/* Contenitore principale per immagine e overlay hover */}
      <div
        className="cursor-pointer relative rounded-xl border-2 border-red-500 overflow-hidden h-[520px] bg-[#FF0012] flex flex-col justify-end items-start px-8 pb-8"
        onClick={() => {
          window.location.href = `mailto:${t(
            "footer.email",
            "ethereumbari@gmail.com"
          )}?subject=${encodeURIComponent("Apply as speaker - ETH Bari")}`;
        }}
      >
        <div className="flex flex-col items-start justify-left">
          <p className="text-2xl text-white font-semibold text-left font-geist">
            {t("speakers.moreToCome.line1", "More")}
          </p>
          <p className="text-2xl text-white font-semibold text-left font-geist">
            {t("speakers.moreToCome.line2", "to come...")}
          </p>
          <p className="text-lg mt-4 text-white font-normal text-left font-geist">
            {t("speakers.moreToCome.cta", "Apply as speaker")}
          </p>
        </div>
        <img
          src="/Blur.svg"
          alt="Arrow right"
          className="w-10 h-10 text-white"
        />
      </div>
    </div>
  );
};

export default MoreToComeCard;
