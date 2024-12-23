export enum Tabs {
  all = "",
  fit = "FIT",
  mayBe = "MAYBE",
  rejected = "REJECTED",
}

export type QueryParams = {
  q?: string;
  tab: Tabs;
};
