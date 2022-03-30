import hackatonData from "../data/hackathon";

export function getHackathonData(slug: string) {
  console.log('hack', hackatonData, slug);
  return hackatonData.find(hackathon => hackathon.slug === slug);
}

export function getHackathonPaths() {
  return hackatonData.map((h:any) => {
    return {
      params: {
        slug: h.slug
      }
    }
  });
}