export interface INavigation {
  displayName: string;
  route: string;
  lazyLoadComponent: () => null;
}
