interface PlaybackRateInputProps {
  rate: number;
  onChange: (rate: number) => void;
}

export default function PlaybackRateInput({
  rate,
  onChange,
}: PlaybackRateInputProps) {
  return (
    <input
      aria-label="rate"
      name="rate"
      type="range"
      min={0.1}
      step={0.1}
      max={2}
      value={rate}
      className="w-[110px] m-0 h-2 rounded-full accent-amber-600 bg-gray-700 appearance-none cursor-pointer"
      onChange={(e) => {
        onChange(e.currentTarget.valueAsNumber);
      }}
    />
  );
}
