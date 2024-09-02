import React from 'react';
type CartProps = {
    children: React.ReactNode;
};

const Cart = ({ children }: CartProps) => {
    return <div>{children}</div>;
};

export default Cart;
