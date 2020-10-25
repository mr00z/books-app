export function mergeClassNames(...classes: string[]): string {
  let className = '';

  className = classes.reduce((classNames, currClassName) =>
    currClassName ? `${classNames} ${currClassName}` : classNames
  );

  return className.trim();
}
