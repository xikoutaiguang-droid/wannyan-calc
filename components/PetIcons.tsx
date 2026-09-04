// 塗りつぶし+差し色のかわいい系アイコン。すべてviewBox 0 0 24 24で統一。

export function CatFaceIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 3.2c-.6-.2-1.1.4-.8 1l1.6 3.4a8 8 0 0 1 3-1.1L5.5 3.2Z"
        fill="currentColor"
      />
      <path
        d="M18.5 3.2c.6-.2 1.1.4.8 1l-1.6 3.4a8 8 0 0 0-3-1.1l3.8-3.3Z"
        fill="currentColor"
      />
      <circle cx="12" cy="13.2" r="7.3" fill="currentColor" />
      <circle cx="9.1" cy="12.6" r="1" fill="var(--surface)" />
      <circle cx="14.9" cy="12.6" r="1" fill="var(--surface)" />
      <path
        d="M12 14.6v.6M12 15.2c-.5.7-1.7.7-2.2 0M12 15.2c.5.7 1.7.7 2.2 0"
        stroke="var(--surface)"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 13.6 4.2 13M7.9 15.4l-3.2 1.4M16.4 13.6 19.8 13M16.1 15.4l3.2 1.4"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DogFaceIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.6 6.2c-1-.5-2 .5-1.6 1.6l1.8 4.4 2.6-1.8-2.8-4.2Z"
        fill="currentColor"
      />
      <path
        d="M19.4 6.2c1-.5 2 .5 1.6 1.6l-1.8 4.4-2.6-1.8 2.8-4.2Z"
        fill="currentColor"
      />
      <ellipse cx="12" cy="13.6" rx="7.4" ry="7" fill="currentColor" />
      <ellipse cx="9.2" cy="12.6" rx="1" ry="1.1" fill="var(--surface)" />
      <ellipse cx="14.8" cy="12.6" rx="1" ry="1.1" fill="var(--surface)" />
      <path
        d="M12 14.3c-.9 0-1.5.5-1.5 1.1 0 .8.7 1.4 1.5 1.9.8-.5 1.5-1.1 1.5-1.9 0-.6-.6-1.1-1.5-1.1Z"
        fill="var(--surface)"
      />
      <path d="M12 17.3v1.1" stroke="var(--surface)" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export function BowlIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3.5 12h17a1 1 0 0 1 1 1.1c-.4 3.9-4 6.9-8.5 6.9s-8.1-3-8.5-6.9a1 1 0 0 1 1-1.1Z"
        fill="currentColor"
      />
      <ellipse cx="12" cy="12" rx="8.5" ry="2.1" fill="currentColor" />
      <ellipse cx="12" cy="11.6" rx="6.4" ry="1.5" fill="var(--surface)" />
      <path
        d="M9 4.4c-.9.5-1.3 1.6-.8 2.6M12 3.6c-.9.4-1.4 1.5-1 2.5M15 4.4c.9.5 1.3 1.6.8 2.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NeuterHeartIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.2s-7.4-4.4-9.6-9C.8 7.6 2.3 4 6 3.5a5.2 5.2 0 0 1 6 2 5.2 5.2 0 0 1 6-2c3.7.5 5.2 4.1 3.6 7.7-2.2 4.6-9.6 9-9.6 9Z"
        fill="currentColor"
      />
      <path
        d="M9.3 11.4l1.4 1.5 3.7-4"
        stroke="var(--surface)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WeightPawIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3.5" width="18" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="8.9" cy="10.6" r="1.15" fill="currentColor" />
      <circle cx="12" cy="9.3" r="1.3" fill="currentColor" />
      <circle cx="15.1" cy="10.6" r="1.15" fill="currentColor" />
      <path
        d="M12 12.3c-1.9 0-3.4 1.3-3.4 2.9 0 1.2.9 2 2.1 2 .6 0 1-.2 1.3-.2s.7.2 1.3.2c1.2 0 2.1-.8 2.1-2 0-1.6-1.5-2.9-3.4-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PawIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="7.2" cy="7.4" r="1.9" fill="currentColor" />
      <circle cx="12" cy="5.4" r="2.1" fill="currentColor" />
      <circle cx="16.8" cy="7.4" r="1.9" fill="currentColor" />
      <path
        d="M12 10.2c-3.1 0-5.4 2.1-5.4 4.6 0 1.9 1.4 3.1 3.3 3.1.9 0 1.4-.3 2.1-.3s1.2.3 2.1.3c1.9 0 3.3-1.2 3.3-3.1 0-2.5-2.3-4.6-5.4-4.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
