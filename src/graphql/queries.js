import {
  gql,
} from 'react-apollo';

export const FindProductsByFlavor = gql`
  query FindProductsByFlavor($flavor: String!) {
    FindProductsByFlavor(flavor: $flavor){
      _id
      error {
        hard
        soft
        message {
          en
          ja
        }
      }
      product {
        mainTitle {
          en
          ja
        }
        title {
          en
          ja
        }
        flavor
        price
        sku
        size
        nicotineStrength
        slug
        vendor {
          en
          ja
        }
        blurb {
          en
          ja
        }
        images {
          purpose
          url
        }
        quantities {
          available
          inCarts
        }
      }
    }
  }
`;

export const FindProductById = gql`
  query FindProductById($id: ID!) {
    FindProductById(_id: $id){
      _id
      error {
        hard
        soft
        message {
          en
          ja
        }
      }
      product {
        mainTitle {
          en
          ja
        }
        title {
          en
          ja
        }
        flavor
        price
        sku
        size
        nicotineStrength
        slug
        vendor {
          en
          ja
        }
        blurb {
          en
          ja
        }
        images {
          purpose
          url
        }
        quantities {
          available
          inCarts
        }
      }
    }
  }
`;

export const FetchMultipleProducts = gql`
  query FetchMultipleProducts($ids: [ID]!) {
    FetchMultipleProducts(ids: $ids){
      _id
      error {
        hard
        soft
        message {
          en
          ja
        }
      }
      product {
        mainTitle {
          en
          ja
        }
        title {
          en
          ja
        }
        flavor
        price
        sku
        size
        nicotineStrength
        slug
        vendor {
          en
          ja
        }
        blurb {
          en
          ja
        }
        images {
          purpose
          url
        }
        quantities {
          available
          inCarts
        }
      }
    }
  }
`;

export const FetchMultipleProductsOptions = ({ loggedIn, userCart, guestCart }) => {
  let ids = [];

  if (!loggedIn) ids = guestCart.map(({ _id }) => _id);

  if (!!userCart.length) ids = userCart.map(({ product }) => product);

  return ({
    variables: { ids },
  });
};

export const FetchSagawa = gql`
  query FetchSagawa($id: ID!) {
    FetchSagawa(id: $id) {
      _id
      error {
        hard
        soft
        message {
          en
          ja
        }
      }
      userId
      transactionId
      shippingAddress {
        referenceId
        shipdate
        deliveryDate
        customerName
        postal
        jpaddress1
        jpaddress2
        phoneNumber
      }
    }
  }
`;

export const FetchTrackingInfo = gql`
  query FetchTrackingInfo($token: String!) {
    FetchTrackingInfo(token: $token) {
      error {
        hard
        soft
        message {
          en
          ja
        }
      }
      shipDate
      orderId
      trackingNumber
      userName
      orderId
      totalPaid
      totalCurrency
      orderStatus {
        en
        ja
      }
      trackingInfo {
        location
        date
        activity
      }
    }
  }
`;
