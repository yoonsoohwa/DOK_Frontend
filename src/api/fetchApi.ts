import { useNavigate } from 'react-router-dom';

interface fetchApiProps {
  url: string;
  init?: RequestInit;
  cb: (data: any) => void;
}

export default async function fetchApi({ url, cb, init }: fetchApiProps) {
  try {
    const res = await fetch(url, init);
    const data = await res.json();

    if (res.ok) {
      return cb(data);
    }

    if (res.status === 401) {
      return (document.location.href = '/login');
    }

    if (res.status === 400 || res.status === 404) {
      return alert(data);
    }
  } catch (e) {
    alert('fetch error: ' + e);
  }
}
