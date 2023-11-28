export async function test() {
  const res = await fetch('http://kdt-sw-6-team01.elicecoding.com/api/certificationRouter/postCertificationPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: 'zz', matchingPost: 'asd', sublocation: 'asd', postText: 'asd', review: 'qwe', deletedAt: null }),
  });

  const data = await res.json();
  console.log(data);
}
