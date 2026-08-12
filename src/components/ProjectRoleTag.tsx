import type { CSSProperties } from "react";

type ProjectRoleTagProps = {
  role: string;
  accent: string;
  className?: string;
};

/* Role label beside a project title; skill-tag hover underline. */
export default function ProjectRoleTag({
  role,
  accent,
  className = "",
}: ProjectRoleTagProps) {
  return (
    <span
      className={`skill-tag ${className}`.trim()}
      style={
        {
          "--skill-underline-hover": accent,
        } as CSSProperties
      }
    >
      {role}
    </span>
  );
}
