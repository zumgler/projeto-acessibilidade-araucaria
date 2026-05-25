export type AccessibilitySettings = {
  fontScale: number;
  highContrast: boolean;
  reduceMotion: boolean;
  customCursor: boolean;
};

export const DEFAULT_ACCESSIBILITY: AccessibilitySettings = {
  fontScale: 100,
  highContrast: false,
  reduceMotion: false,
  customCursor: true,
};

const STORAGE_KEY = "nexo-acessibilidade";

export function loadAccessibilitySettings(): AccessibilitySettings {
  if (typeof window === "undefined") return DEFAULT_ACCESSIBILITY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ACCESSIBILITY;
    const parsed = JSON.parse(raw) as Partial<AccessibilitySettings>;
    return {
      fontScale: clamp(parsed.fontScale ?? DEFAULT_ACCESSIBILITY.fontScale, 80, 140),
      highContrast: parsed.highContrast ?? DEFAULT_ACCESSIBILITY.highContrast,
      reduceMotion: parsed.reduceMotion ?? DEFAULT_ACCESSIBILITY.reduceMotion,
      customCursor: parsed.customCursor ?? DEFAULT_ACCESSIBILITY.customCursor,
    };
  } catch {
    return DEFAULT_ACCESSIBILITY;
  }
}

export function saveAccessibilitySettings(settings: AccessibilitySettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function applyAccessibilitySettings(settings: AccessibilitySettings) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.fontSize = `${settings.fontScale}%`;
  root.classList.toggle("high-contrast", settings.highContrast);
  root.classList.toggle("reduce-motion", settings.reduceMotion);
  root.classList.toggle("no-custom-cursor", !settings.customCursor);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
