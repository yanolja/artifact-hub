export enum PackageKind {
  Chart = 0,
  Operator,
};

export interface ChartRepository {
  name: string;
  displayName: string | null;
  url: string;
  chartRepositoryId?: string;
}

export interface Maintainer {
  name?: string;
  email: string;
}

export interface Package {
  packageId: string;
  kind: PackageKind;
  name: string;
  displayName: string | null;
  description: string;
  logoImageId: string | null;
  appVersion: string;
  chartRepository: ChartRepository;
  readme?: string | null;
  availableVersions?: string[];
  version?: string;
  homeUrl?: string | null;
  keywords?: string[];
  maintainers?: Maintainer[];
}

export interface SearchResults {
  data: {
    packages: Package[];
    facets: Facets[];
  };
  metadata: {
    limit: number;
    offset: number;
    total: number;
  };
}

export interface Filters {
  text?: string;
  f: {
    [key: string]: string[];
  };
  pageNumber: number;
}

export interface SearchQuery {
  text?: string;
  filters: {
    [key: string]: string[];
  };
  limit: number;
  offset: number;
  total?: number;
}

export interface Stats {
  packages: number;
  releases: number;
}

export interface Facets {
  filterKey: string;
  title: string;
  options: FacetOption[];
};

export interface FacetOption {
  id: string;
  name: string;
  total: number;
}

export interface PackagesUpdates {
  latestPackagesAdded: Package[];
  packagesRecentlyUpdated: Package[];
}
