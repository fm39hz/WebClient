export type ShoppingItems = {
	appliedPromoteStrategy: {
		details: string;
	};
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

export type UserProps = {
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
	shoppingItems: ShoppingItems[];
	id: number;
};

export type CpuProps = {
	socket: string;
	tdp: number;
	core: number;
	thread: number;
	frequency: number;
	id: number;
};

export type VgaProps = {
	frequency: number;
	vram: number;
	id: number;
};