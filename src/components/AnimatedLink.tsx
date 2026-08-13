import Link from "next/link";
import type { ComponentProps } from "react";

type AnimatedLinkProps = ComponentProps<typeof Link>;

/* Next.js Link with the shared soft opacity hover. */
export default function AnimatedLink({
  className,
  children,
  ...rest
}: AnimatedLinkProps) {
  const needsInlineBlock = !/\bblock\b/.test(className ?? "");

  return (
    <Link
      {...rest}
      className={
        (needsInlineBlock ? "inline-block " : "") +
        "interactive " +
        (className ?? "")
      }
    >
      {children}
    </Link>
  );
}
