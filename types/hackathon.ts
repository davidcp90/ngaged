export interface IHackathonDetails {
    startDate: string;
    endDate: string;
    location: string;
    venue: string;
    description: string;
};
export interface IColors {
    primary: string;
    secondary: string;
}
export interface IHackathon {
  slug: string;
  title: string;
  hostLogo: string;
  cover: string;
  host: string;
  colors: IColors;
  details: IHackathonDetails;

}