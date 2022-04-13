export const userPicture = (user: any) => {
  if (user && user.picture) {
    return user.picture;
  }
  if (user && user.name) {
    return `https://ui-avatars.com/api/?name=${user.name}&background=random`;
  }
  return `https://ui-avatars.com/api/?background=random`;
};

