export type ShoppingItemsProps = {
	appliedPromoteStrategy: {
		details: string;
	};
	orderStatus: string;
	orderId: number;
	promoteType: string;
	target: ProductProps;
	productId: number;
	cartId: number;
	quantity: number;
	isSelected: number;
	id: number;
};

export type ProductProps = {
	name: string;
	specificationId: number;
	description: string;
	imageUrl: string;
	basePrice: number;
	inStock: number;
	manufacturer: string;
	reviewCount: number;
	rating: number;
	type: string;
	id: number;
};

export type ShippingInformationProps = {
	userUid: string;
	name: string;
	phoneNumber: string;
	address: string;
	gender: string;
};

export type OrderProps = {
	user: LocalUserProps;
	shippingTarget: ShippingInformationProps;
	items: ShoppingItemsProps[];
	status: string;
	invoice: InvoiceProps;
	id: number;
};

export type InvoiceProps = {
	userUid: string;
	orderId: number;
	createdTime: string;
	id: number;
};

export type LocalUserProps = {
	uid: string;
	credential: string;
	isAdmin: number;
	cart: CartProps;
	shippingInfomations: ShippingInformationProps[];
	invoices: InvoiceProps[];
};

export type FireBaseUserProps = {
	uid: string;
	displayName: string;
	email: string;
	phoneNumber: string;
	photoUrl: string;
	providerId: string;
	emailVerified: boolean;
	disabled: boolean;
	providerData: [
		{
			uid: string;
			displayName: string;
			email: string;
			phoneNumber: string;
			photoUrl: string;
			providerId: string;
		},
		{
			uid: string;
			displayName: string;
			email: string;
			phoneNumber: string;
			photoUrl: string;
			providerId: string;
		},
	];
	tokensValidAfterTimestamp: string;
	userMetaData: {
		creationTimestamp: string;
		lastSignInTimestamp: string;
		lastRefreshTimestamp: string;
	};
	customClaims: {};
	tenantId: string;
};

export type CartProps = {
	userUid: string;
	shoppingItems: ShoppingItemsProps[];
	id: number;
};

export type PromoteDetailsProps = {
	details: string;
	shortHand: string;
};

export type CpuProps = {
	socket: string;
	tdp: string;
	core: string;
	thread: string;
	frequency: string;
	id: number;
};

export type VgaProps = {
	frequency: string;
	vram: string;
	id: number;
};
