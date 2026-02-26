export default async function getCredit() {
  const res = await fetch("/api/user/credit/get", {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch credit");
  }

  return res.json();
}