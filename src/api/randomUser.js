export const getImages = async number => {
  const req = await fetch(`https://randomuser.me/api/?results=${number}`);
  const res = await req.json();
  console.log(req)
  return res.results;
}