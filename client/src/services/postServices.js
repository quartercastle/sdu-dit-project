const options = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}

export default {
  getPosts: async () => {
    let res = await fetch(`http://localhost:8000/api/post`);
    const data = await res.json()
    return data || [];
  },
  getPost: async (id) => {
    let res = await fetch(`http://localhost:8000/api/post/${id}`);
    const data = await res.json()
    return data || [];
  },
  createPost: async (body) => {
    let res = await fetch(`http://localhost:8000/api/post`, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    });
    const data = await res.json()
    return data || [];
  },
  updatePost: async (id, body) => {
    let res = await fetch(`http://localhost:8000/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...options
    });
    const data = await res.json()
    return data || [];
  },
  deletePost: async (id) => {
    let res = await fetch(`http://localhost:8000/api/post/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json()
    return data || [];
  }

}
