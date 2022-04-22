export const userPicture = (user: any, name?: string) => {
  if (user && user.picture) {
    return user.picture;
  }
  if ((user && user.name) || name) {
    const nameForPic = name || user.name;
    return `https://ui-avatars.com/api/?name=${nameForPic}&background=random`;
  }
  return `https://ui-avatars.com/api/?name=NG?background=random`;
};

