const images = import.meta.glob(
  '../assets/products/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

export const getProductImage = (imageName) => {
  if (!imageName) return '';

  const image = Object.entries(images).find(([path]) => {
    const fileName = path
      .split('/')
      .pop()
      .replace(/\.[^/.]+$/, '');

    return fileName.toLowerCase() === imageName.trim().toLowerCase();
  });

  return image ? image[1] : '';
};