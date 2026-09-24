import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { ActivityStatus, CollaborationActivity } from "@/lib/types";

const STATUS_LABEL: Record<ActivityStatus, string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

const DATE_LABEL: Record<ActivityStatus, string> = {
  upcoming: "Date",
  ongoing: "Since",
  completed: "Held",
};

const STATUS_DOT: Record<ActivityStatus, string> = {
  upcoming: "bg-brand-blue",
  ongoing: "bg-brand-blue ring-4 ring-brand-blue/20",
  completed: "bg-slate-300",
};

/** Same card structure as the Projects cards, with activity metadata added. */
export default function ActivityCard({ activity }: { activity: CollaborationActivity }) {
  return (
    <article
      className="flex flex-col justify-between border border-[#E1E1E1] bg-white p-5"
      style={{ borderRadius: "10px" }}
    >
      <div>
        <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "8px" }}>
          <Image
            src={activity.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs text-slate-500">
          <span className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 font-medium text-brand-blue">
            {activity.category}
          </span>
          <span className="inline-flex items-center gap-2 font-medium">
            <span className={`h-2 w-2 rounded-full ${STATUS_DOT[activity.status]}`} aria-hidden="true" />
            {STATUS_LABEL[activity.status]}
          </span>
        </div>

        <h3 className="mb-2 font-heading text-2xl font-normal tracking-tight text-slate-900">
          {activity.title}
        </h3>
        <p className="text-sm leading-normal text-slate-500 md:text-base">{activity.description}</p>

        <dl className="mt-4 space-y-1 text-xs text-slate-500">
          <div className="flex gap-2">
            <dt className="text-slate-400">With</dt>
            <dd>{activity.participants}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-slate-400">{DATE_LABEL[activity.status]}</dt>
            <dd>
              <time dateTime={activity.date}>{formatDate(activity.date)}</time>
            </dd>
          </div>
        </dl>
      </div>

      {activity.cta && (
        <div className="mt-6 pt-2">
          <Link
            href={activity.cta.href}
            className="inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
          >
            {activity.cta.label} →
          </Link>
        </div>
      )}
    </article>
  );
}
