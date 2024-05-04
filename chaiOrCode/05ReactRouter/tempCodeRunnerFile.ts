const loaderData = async (): Promise<{ followers: number, avatar_url: string }> => {
  let data: Response = await fetch(
    "https://api.github.com/users/codewithsaffy"
  );
  let response: { followers: number, avatar_url: string } = await data.json();
  return {
    followers: response.followers,
    avatar_url: response.avatar_url
  }
};
console.log(loaderData());