import Link from "next/link";
import type { ReactNode } from "react";

const SIZE_STYLES = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

interface BaseProps {
  children: ReactNode;
  size?: keyof typeof SIZE_STYLES;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  type?: never;
}

interface SubmitButtonProps extends BaseProps {
  href?: never;
  type: "button" | "submit";
}

type ButtonProps = LinkButtonProps | SubmitButtonProps;

export default function Button({ children, href, type, size = "sm", className = "" }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-1.5 rounded-lg font-heading font-semibold text-white shadow-sm transition-all hover:bg-brand-dark bg-brand-blue ${SIZE_STYLES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
