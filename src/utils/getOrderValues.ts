import { OrderProducts } from '@store/ShopHistory/types';

export function getProductOrderValues(
  orderProducts: OrderProducts
): GetOrderValuesPayload {
  const id = orderProducts.id;
  const price = orderProducts.price;
  const quantity = orderProducts.quantity;
  const title = orderProducts.product?.title;
  const colorName = orderProducts.ProductColor?.title;
  const colorOption = orderProducts.ProductOption?.name;

  let picture;

  if (orderProducts.ProductOption?.image_url) {
    picture = orderProducts.ProductOption.image_url;
  } else if (orderProducts.ProductColor?.image_url) {
    picture = orderProducts.ProductColor.image_url;
  } else {
    picture =
      orderProducts.product?.picture_mobile || orderProducts.product?.picture;
  }

  return {
    id: id,
    price: price,
    quantity: quantity,
    title: title,
    colorName: colorName,
    colorOption: colorOption,
    picture: picture,
  };
}

type GetOrderValuesPayload = {
  id: number;
  price: number;
  quantity: number;
  title: string;
  colorName: string;
  colorOption: string;
  picture: string;
};
