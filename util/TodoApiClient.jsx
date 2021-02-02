import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = 'http://localhost:5000/api';

export function getItems() {
  const url = `${baseUrl}/todo`;
  const { data: items, error } = useSWR(url, fetcher);
  return { items, error };
}

export async function deleteItem(id) {
  const url = `${baseUrl}/todo/${id}`;
  await fetch(url, {
    method: 'DELETE',
  });
}
