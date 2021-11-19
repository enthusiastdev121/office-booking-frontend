import { authHeader } from '../users/usersAPI';

export const fetchAllItems = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    'http://localhost:3000/api/v1/items',
    requestOptions,
  );
  const items = await response.json();
  return items;
};

export const fetchItemById = async (id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/items/${id}`,
    requestOptions,
  );
  const item = await response.json();
  return item;
};

export const deleteAndGetItems = async (itemId) => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/items/${itemId}`,
    requestOptions,
  );
  const data = await response.json();
  return data;
};
