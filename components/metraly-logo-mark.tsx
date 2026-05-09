import Image from "next/image";

export function MetralyLogoMark({ className = "nav-logo-icon" }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/brand/metraly-logo-mark.svg"
      alt=""
      aria-hidden="true"
      width={34}
      height={34}
      priority
    />
  );
}
