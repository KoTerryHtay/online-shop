export const paths = {
  categoryPage(category: string) {
    return `/product/${category}`;
  },
  brandPage(brandId: string) {
    return `/brand/${brandId}`;
  },
  cart() {
    return "/cart";
  },
  productDetail(category: string, id: string) {
    return `/product/${category}/${id}`;
  },
};
