const assignedIds = new Set();

// randomId returns a random string of length 8.
// It is guaranteed to be unique.
export function randomId() {
  let id = "";
  do {
    id = Math.random().toString(36).slice(2, 10);
  } while (assignedIds.has(id));
  assignedIds.add(id);
  return id;
}
