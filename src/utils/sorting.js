export const sortItems = (items, sortOption) => {
    switch (sortOption) {
      case "a-z":
        return items.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return items.sort((a, b) => b.title.localeCompare(a.title));
      case "newest":
        return items.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      case "oldest":
        return items.sort((a, b) => new Date(a.updated) - new Date(b.updated));
      default:
        return items;
    }
  };
  