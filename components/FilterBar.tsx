interface FilterBarProps {
  label: string;
  options: string[];
  active: string;
  onChange: (option: string) => void;
}

/** Row of pill toggles; exactly one option is active at a time. */
export default function FilterBar({ label, options, active, onChange }: FilterBarProps) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-blue/40 hover:text-brand-blue"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
