export function mergeClassNames(...classes: string[]): string {
  let className = '';

  className = classes.reduce((classNames, currClassName) =>
    currClassName ? `${classNames} ${currClassName}` : classNames
  );

  return className.trim();
}

export function convertEnumIdentifierToWords(identifier: string): string {
  if (!identifier) return;
  const words = identifier.toLowerCase().split('_');

  let result = '';

  words.forEach((word) => {
    const wordCapitalized = word.charAt(0).toUpperCase().concat(word.substr(1));
    result = result.concat(' ', wordCapitalized);
  });

  return result.trim();
}

export function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function getUnloadEventName(): string {
  const isOnIOS = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i);
  return isOnIOS ? 'pagehide' : 'beforeunload';
}
