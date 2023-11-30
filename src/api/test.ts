import { userUrl } from './apiUrls';

export async function test() {
  // ${userUrl}
  const res = await fetch(`http://localhost:3000/api/users/signIn`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 'doogguby12',
      password: 'Testpassword1234!',
    }),
  });

  const data = await res.json();
  console.log(data);
}
