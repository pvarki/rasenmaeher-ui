export enum OperatingSystem {
  MacOS = "MacOS",
  Windows = "Windows",
  Android = "Android",
  iOS = "iOS",
}

export function getOperatingSystem(): OperatingSystem {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;

  if (/Mac/i.test(platform)) {
    return OperatingSystem.MacOS;
  } else if (/Win/i.test(platform)) {
    return OperatingSystem.Windows;
  } else if (/Android/i.test(userAgent)) {
    return OperatingSystem.Android;
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return OperatingSystem.iOS;
  }
  return OperatingSystem.Android; // Default to Android
}
