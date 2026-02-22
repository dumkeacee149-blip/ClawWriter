export type Post = {
  id: string;
  createdAt: string;
  title: string;
  body: string;
  tags: string[];
  author: string;
};

// NOTE: Demo-only in-memory store.
// On Vercel/serverless this will NOT be durable across deployments/instances.
// Replace with a real DB (e.g. Vercel KV / Postgres) for production.

declare global {
  // eslint-disable-next-line no-var
  var __AI_POSTS__: Post[] | undefined;
}

function getStore(): Post[] {
  if (!globalThis.__AI_POSTS__) globalThis.__AI_POSTS__ = [];
  return globalThis.__AI_POSTS__;
}

export function listPosts(): Post[] {
  return [...getStore()].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function addPost(post: Omit<Post, "id" | "createdAt">): Post {
  const p: Post = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...post,
  };
  getStore().push(p);
  return p;
}
